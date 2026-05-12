import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        // Валидация данных
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Все поля обязательны для заполнения' },
                { status: 400 }
            );
        }

        // Базовая валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Некорректный адрес email' },
                { status: 400 }
            );
        }

        // Проверка API ключа
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY не установлен');
            return NextResponse.json(
                { error: 'Сервис отправки писем не настроен' },
                { status: 500 }
            );
        }

        // Отправка email
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
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

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Ошибка отправки письма. Проверьте логи сервера.' },
                { status: 500 }
            );
        }

        if (!data || !data.id) {
            console.error('Письмо отправлено, но без ID:', data);
            return NextResponse.json(
                { error: 'Ошибка при отправке письма' },
                { status: 500 }
            );
        }

        console.log('Email отправлено успешно:', data.id);
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера. Пожалуйста, попробуйте позже.' },
            { status: 500 }
        );
    }
}