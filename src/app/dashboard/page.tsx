import { DashboardArtists, DashboardTracks } from '@/modules/dashboard'
import { Button } from '@/shared/components/ui/button'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-20 pt-[8%]">
      <div className="flex w-full flex-col gap-10 lg:flex-row">
        <DashboardTracks />
        <DashboardArtists />
      </div>

      <Button variant={'secondary'} asChild>
        <Link href={'/filters'}>more detailed info</Link>
      </Button>
    </div>
  )
}
