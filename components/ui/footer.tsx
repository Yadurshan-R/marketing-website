import React from 'react'
import Link from 'next/link'
import { Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="md:flex md:items-center md:justify-between">

            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4 flex items-center">
                <Link href="https://github.com/Parani2002/SDGP-SE4" className="flex justify-center items-center text-white hover:text-slate-200 rounded-full transition duration-150 ease-in-out" aria-label="Website">
                  <Github className="w-5 h-5 items-center flex justify-center" />
                </Link>
              </li>
              <li className="ml-5 flex items-center">
                <Link href="mailto:campusnavigator.pyrag@gmail.com" className="flex justify-center items-center text-white hover:text-slate-200 rounded-full transition duration-150 ease-in-out" aria-label="Website">
                  <Mail className="w-5 h-5 items-center flex justify-center" />
                </Link>
              </li>
            </ul>
            <div className="text-white text-sm font-medium mr-4 flex justify-center">&copy; Campus Navigator. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
