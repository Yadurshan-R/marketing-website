import Link from 'next/link'
import MobileMenu from './mobile-menu'
import { GraduationCap } from 'lucide-react'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4 flex">
            <Link href="/" className="block" aria-label="Cruip">
              <p className='flex items-center justify-center text-white'><GraduationCap className='w-7 h-7 mobile:w-5 mobile:h-5 xl:w-7 xl:h-7 lg:w-7 lg:h-7 md:w-8 md:h-8 sm:w-7 sm:h-7' /><span className='ml-2.5 flex items-center justify-center text-xl xl:text-xl mobile:text-lg font-bold'>Campus Navigator</span></p>
            </Link>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="feature" className="btn-sm rounded-full text-black font-semibold bg-white hover:bg-slate-200 ml-3">
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
