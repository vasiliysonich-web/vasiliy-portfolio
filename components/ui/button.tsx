import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-neon-purple via-neon-pink to-neon-purple bg-[length:200%_100%] animate-shimmer text-white shadow-lg shadow-neon-purple/30 hover:shadow-neon-mixed hover:scale-105',
        secondary: 'border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-neon-cyan/50 hover:shadow-neon-cyan/20 hover:scale-105',
        ghost: 'text-white/80 hover:text-white hover:bg-white/5',
        outline: 'border border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple',
      },
      size: {
        default: 'h-12 px-6 py-2',
        sm: 'h-10 px-4 text-xs',
        lg: 'h-14 px-8 text-base',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
