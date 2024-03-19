'use client'

import {
  SelectContent,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
  SelectItem,
  Select
} from '@/shared/components/ui/select'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export function CategorySelect() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const onValueChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('category', value)
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Select onValueChange={onValueChange} defaultValue={'tracks'}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>category</SelectLabel>
          <SelectItem value="tracks">tracks</SelectItem>
          <SelectItem value="artists">artists</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
