import { ThemeToggle, TextLogo } from '@/modules/core/components'

import { UserDropdown } from './user-dropdown'

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between border-b border-neutral-100 px-4 py-4 dark:border-neutral-800 lg:px-[5%] xl:px-[10%] 2xl:px-[15%]">
      <TextLogo />

      <div className="flex gap-4">
        <ThemeToggle />

        <UserDropdown />
      </div>
    </nav>
  )
}
