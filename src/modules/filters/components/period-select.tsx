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

export function PeriodSelect() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const onValueChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('period', value)
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Select onValueChange={onValueChange} defaultValue={'short_term'}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>period</SelectLabel>
          <SelectItem value="short_term">month</SelectItem>
          <SelectItem value="medium_term">last six month</SelectItem>
          <SelectItem value="long_term">all time</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
