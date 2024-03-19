import { Card } from '@/shared/components/ui/card'
import Image from 'next/image'

interface Props {
  imageUrl: string
  artist: string
  title: string
}

export function TrackCard({ imageUrl, artist, title }: Props) {
  return (
    <Card className="border-2 shadow-md">
      <div className="flex items-center gap-4 p-4">
        <Image
          className="h-[100px] w-[100px] rounded-md object-cover"
          src={imageUrl}
          height={100}
          alt={title}
          width={100}
        />

        <div className="flex flex-col gap-1.5">
          <h3 className="line-clamp-2 text-lg font-semibold">{title}</h3>
          <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{artist}</p>
        </div>
      </div>
    </Card>
  )
}
