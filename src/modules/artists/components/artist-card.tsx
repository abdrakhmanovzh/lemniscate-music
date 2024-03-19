import { Card } from '@/shared/components/ui/card'
import Image from 'next/image'

interface Props {
  imageUrl: string
  name: string
}

export function ArtistCard({ imageUrl, name }: Props) {
  return (
    <Card className="border-2 shadow-md">
      <div className="flex items-center gap-4 p-4">
        <Image
          className="h-[100px] w-[100px] rounded-md object-cover"
          src={imageUrl}
          height={100}
          width={100}
          alt={name}
        />

        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </Card>
  )
}
