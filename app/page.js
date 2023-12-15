import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className='mb-8 text-5xl font-bold'>Next.js Basics</h1>
      <Link href='/tasks' className='btn btn-accent'>
        get started
      </Link>
    </div>
  )
}
