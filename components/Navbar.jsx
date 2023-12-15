import Link from 'next/link'

const links = [
  // { href: '/client', label: 'client' },
  // { href: '/drinks', label: 'drinks' },
  { href: '/tasks', label: 'tasks' },
  { href: '/prisma-example', label: 'prisma' },
]

const Navbar = () => {
  return (
    <nav className='py-4 bg-base-300'>
      <div className='flex-col max-w-6xl px-8 mx-auto navbar sm:flex-row'>
        <li>
          <Link href='/' className='btn btn-primary'>
            Next.js
          </Link>
        </li>
        <ul className='menu menu-horizontal md:ml-8'>
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href} className='capitalize '>
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
