import { AlertCircle } from 'lucide-react'

interface Props {
  message?: string
}

export function FetchErrorAlert({ message }: Props) {
  return (
    <div className="flex h-[420px] flex-col items-center justify-center gap-2 rounded-xl border border-red-500 bg-red-200 dark:border-red-950 dark:bg-red-800/10">
      <AlertCircle className="text-red-500 dark:text-white" />
      <h4 className="text-red-500 dark:text-white">{message}</h4>
      <p className="text-red-500 dark:text-white">please, try again</p>
    </div>
  )
}
