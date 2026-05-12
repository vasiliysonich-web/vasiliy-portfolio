import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { existsSync, readFileSync } from 'node:fs';

const fromEmail = 'Portfolio Contact <onboarding@resend.dev>';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getEnvValue(key: string): string | undefined {
    if (process.env[key]) {
        return process.env[key];
    }

    const envFiles = ['.env.local', '.env'];
    for (const file of envFiles) {
        const path = `${process.cwd()}/${file}`;
        if (!existsSync(path)) continue;

        const content = readFileSync(path, 'utf8');
        const line = content
            .split(/\r?\n/)
            .map((item) => item.trim())
            .find((item) => item && !item.startsWith('#') && item.startsWith(`${key}=`));

        if (line) {
            return line.split('=')[1]?.trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '');
        }
    }

    return undefined;
}

export async function POST(request: NextRequest) {
    try {
        const apiKey = getEnvValue('RESEND_API_KEY');
        if (!apiKey) {
            console.error('❌ RESEND_API_KEY не найден в переменных окружения!');
            return NextResponse.json(
                { error: 'Сервис отправки писем не настроен' },
                { status: 500 }
            );
        }

        // Проверка формата ключа
        if (!apiKey.startsWith('re_')) {
            console.error('❌ RESEND_API_KEY имеет неправильный формат (должен начинаться с re_)');
            return NextResponse.json(
                { error: 'Неправильный формат API ключа Resend' },
                { status: 500 }
            );
        }

        console.log('✅ API ключ найден, формат корректный');

        const resend = new Resend(apiKey);
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Все поля обязательны для заполнения' },
                { status: 400 }
            );
        }

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Некорректный адрес email' },
                { status: 400 }
            );
        }

        console.log('📧 Отправка письма на vasiliysonich@gmail.com от', name);

        const data = await resend.emails.send({
            from: fromEmail,
            to: 'vasiliysonich@gmail.com',
            subject: `Новое сообщение от ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #333;">Новое сообщение с портфолио</h2>
                  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Имя:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Сообщение:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                  </div>
                  <p style="color: #666; font-size: 14px;">
                    Это сообщение отправлено через форму контакта портфолио.
                  </p>
                </div>
            `,
        });

        console.log('Resend response:', JSON.stringify(data, null, 2));

        // Проверка на ошибки Resend
        if (data.error) {
            console.error('❌ Ошибка Resend:', data.error);
            return NextResponse.json(
                { error: `Ошибка Resend: ${data.error.message || 'Неизвестная ошибка'}` },
                { status: 500 }
            );
        }

        if (!data.data || !data.data.id) {
            console.error('❌ Resend вернул неожиданный ответ:', data);
            return NextResponse.json(
                { error: 'Письмо не было отправлено. Проверьте статус Resend.' },
                { status: 500 }
            );
        }

        console.log('✅ Письмо отправлено успешно, ID:', data.data.id);
        return NextResponse.json({ success: true, data: data.data });
    } catch (error) {
        console.error('❌ API error:', error);

        const errorMessage =
            error instanceof Error
                ? error.message
                : typeof error === 'object' && error !== null
                    ? JSON.stringify(error)
                    : String(error);

        return NextResponse.json(
            { error: `Ошибка отправки письма: ${errorMessage}` },
            { status: 500 }
        );
    }
}
