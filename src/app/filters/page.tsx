import { CategorySelect, PeriodSelect } from '@/modules/filters'
import { FilteredCards } from '@/modules/filters/components'

export default function Page({
  searchParams
}: {
  searchParams: {
    [key: string]: undefined | string[] | string
  }
}) {
  const category = (searchParams.category ?? 'tracks') as string
  const period = (searchParams.period ?? 'short_term') as string

  return (
    <div className="flex flex-col gap-4 py-10">
      <h1 className="dark:text-base-white text-2xl font-semibold">filters</h1>
      <div className="flex justify-between lg:justify-start lg:gap-10">
        <CategorySelect />
        <PeriodSelect />
      </div>

      <FilteredCards category={category} period={period} />
    </div>
  )
}
