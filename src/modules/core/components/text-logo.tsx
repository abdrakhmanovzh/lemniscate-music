import Link from 'next/link'

import { Logo } from './logo'

export function TextLogo() {
  return (
    <Link className="flex items-center gap-2" href="/">
      <Logo />
      <h1 className="dark:text-base-white text-base-black text-xl font-medium">
        lemniscate | music
      </h1>
    </Link>
  )
}
