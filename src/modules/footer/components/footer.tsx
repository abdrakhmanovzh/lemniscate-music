import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex justify-center border-t border-neutral-100 py-3 dark:border-neutral-800">
      <p className="dark:text-base-white text-sm">
        by{' '}
        <Link href={'https://github.com/abdrakhmanovzh'} className="font-medium hover:underline">
          jesse.abdrakhmanov
        </Link>
      </p>
    </footer>
  )
}
