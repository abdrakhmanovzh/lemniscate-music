import { DashboardArtists, DashboardTracks } from '@/modules/dashboard'
import { Button } from '@/shared/components/ui/button'

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-20">
      <div className="flex w-full flex-col gap-10 lg:flex-row">
        <DashboardTracks />
        <DashboardArtists />
      </div>

      <Button variant={'secondary'}>more detailed info</Button>
    </div>
  )
}
