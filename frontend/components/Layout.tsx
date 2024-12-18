import { Playfair_Display, Lato } from 'next/font/google'
import Link from 'next/link'

const playfair = Playfair_Display({ subsets: ['latin'] })
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen flex flex-col ${lato.className}`}>
      <header className="sticky top-0 bg-white shadow-md z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className={`text-4xl font-bold text-[#FADADD] ${playfair.className}`}>
            She Is Someone
          </Link>
          <ul className="flex space-x-6">
            {['Home', 'About', 'Blog Stories', 'Login'].map((item) => (
              <li key={item}>
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#FADADD] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <ul className="flex justify-center space-x-6">
            {['About', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#FADADD] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  )
}

