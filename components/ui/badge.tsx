import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white/10 text-white/80 border border-white/10',
        primary: 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30',
        secondary: 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30',
        cyan: 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30',
        glow: 'bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-lg shadow-neon-purple/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
