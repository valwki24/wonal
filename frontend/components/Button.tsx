import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#FADADD] text-white font-bold uppercase py-2 px-4 rounded hover:bg-[#F8C8CB] transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

