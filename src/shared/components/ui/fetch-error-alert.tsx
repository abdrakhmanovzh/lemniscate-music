import { AlertCircle } from 'lucide-react'

interface Props {
  message?: string
}

export function FetchErrorAlert({ message }: Props) {
  return (
    <div className="flex h-[420px] flex-col items-center justify-center gap-2 rounded-xl border border-red-950 bg-red-800/10">
      <AlertCircle />
      <h4 className="text-white">{message}</h4>
      <p className="text-white">please, try again</p>
    </div>
  )
}
