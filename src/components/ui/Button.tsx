'use client'

import Link from 'next/link'
import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonVariant = 'primary' | 'outline' | 'accent'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  showArrow?: boolean
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#2152cf] text-white hover:bg-[#1a3fa3] border-2 border-[#2152cf] hover:border-[#1a3fa3]',
  outline:
    'bg-transparent text-[#2152cf] border-2 border-[#2152cf] hover:bg-[#2152cf] hover:text-white',
  accent:
    'bg-[#d9ff42] text-[#1e2547] font-semibold border-2 border-[#d9ff42] hover:bg-[#b8d932] hover:border-[#b8d932]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
  showArrow = true,
}: ButtonProps) {
  const baseClasses = twMerge(
    `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2152cf]/50 focus:ring-offset-2 group ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
    className
  )

  const arrowIcon = showArrow ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  ) : null

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e)
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e)
  }

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={handleAnchorClick}>
        <span>{children}</span>
        {arrowIcon}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={handleButtonClick}
      disabled={disabled}
      className={baseClasses}
    >
      <span>{children}</span>
      {arrowIcon}
    </button>
  )
}
