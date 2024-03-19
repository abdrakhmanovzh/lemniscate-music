import { HeroLoginButton, HeroArtists, HeroMessage, HeroTracks } from '@/modules/home'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10 pt-[5%] lg:flex-row">
      <div className="flex flex-1 flex-col gap-10">
        <HeroMessage />
        <HeroLoginButton />
      </div>
      <div className="flex flex-1 flex-col gap-10 lg:flex-row">
        <HeroTracks />
        <HeroArtists />
      </div>
    </div>
  )
}
