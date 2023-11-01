import { cn } from '@/lib/utils'
import React from 'react'

function FlexDiv({ className, children }: { className?: string, children: React.JSX.Element}) {
  return (
      <div className={cn('flex w-full h-full items-center justify-center', className)}>{children}</div>
  )
}

export default FlexDiv