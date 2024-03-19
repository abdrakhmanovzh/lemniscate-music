'use client'

import { Button } from '@/shared/components/ui/button'
import { login } from '@/modules/auth'

export function HeroLoginButton() {
  async function handleButton() {
    await login()
  }

  return (
    <Button className="w-fit rounded-xl text-lg" onClick={handleButton} size={'lg'}>
      start now
    </Button>
  )
}
