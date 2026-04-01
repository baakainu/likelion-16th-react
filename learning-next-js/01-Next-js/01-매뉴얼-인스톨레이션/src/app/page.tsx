import VercelLogo from '@/components/ui/vercel-logo'

export default function Page() {
  return (
    <header className="flex min-h-screen flex-col items-center justify-center-safe">
      <h1 className="text-4xl font-black">안녕 Next.js</h1>
      {/* <img src="/vercel.svg" alt="Vercel 로고" className="mt-2 size-8" /> */}
      <VercelLogo className="mt-2 size-8 text-rose-500 dark:text-yellow-400" />
    </header>
  )
}
