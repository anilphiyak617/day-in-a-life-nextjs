'use client'

import { clsx } from 'clsx';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react'

type NavLinkPropsTypes = LinkProps & {
  name: string;
  Icon?: React.ElementType
}
function NavLink({ name, Icon, ...linkProps }: NavLinkPropsTypes) {
  const pathname = usePathname()


  return (
    <Link {...linkProps} >
      <div className={clsx({ 'text-primary': pathname === linkProps.href })}
      >
        {Icon && <Icon />}
        <span>{name}</span>
      </div>
    </Link>
  )
}

export default NavLink