'use client'

import { Button } from '@/shared/components/ui/button'
import { useRouter } from 'next/navigation'
import { logout } from '@/modules/auth'

export function LogoutButton() {
  const router = useRouter()

  async function handleButton() {
    await logout()
    router.push('/')
  }

  return (
    <Button className="h-fit p-0 font-normal" onClick={handleButton} variant={'ghost'} size={'sm'}>
      sign out
    </Button>
  )
}
