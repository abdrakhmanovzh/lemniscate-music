export function HeroMessage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="darK:text-base-white text-6xl font-semibold">
        favourite music. favourite artists.
      </h1>
      <p className="text-xl text-neutral-700 dark:text-neutral-300">
        no need to wait for{' '}
        <span className="font-medium underline underline-offset-2">&quot;wrapped&quot;</span>,
        <br />
        get data from your spotify account now
      </p>
    </div>
  )
}
