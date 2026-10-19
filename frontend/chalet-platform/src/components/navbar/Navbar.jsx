import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Chalet Models', path: '/chalet-models' },
  { label: 'Terrains', path: '/terrains' },
  { label: 'Options', path: '/options' },
  { label: 'About', path: '/about' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY.current

      setScrolled(currentScrollY > 60)

      if (currentScrollY <= 0) {
        setIsHidden(false)
      } else if (Math.abs(scrollDelta) > 4) {
        setIsHidden(scrollDelta > 0 && !isOpen)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-[#1D2923]/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto max-w-375 px-6 transition-all duration-500 md:px-10 lg:px-16 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="relative z-50 font-serif text-3xl text-white"
          >
            AUREA
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/build-your-own"
              className="ml-4 inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#1D2923] transition-all duration-300 hover:bg-[#EFEBE2]"
            >
              Build Your Own

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
              />
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-11 w-11 items-center justify-center text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={26} strokeWidth={1.5} />
            ) : (
              <Menu size={26} strokeWidth={1.5} />
            )}
          </button>

        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1D2923] transition-all duration-500 lg:hidden ${
          isOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
      >
        <div className="flex h-full flex-col px-6 pt-32">

          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-5 font-serif text-4xl text-white"
              >
                <span className="mr-4 font-sans text-sm text-white/30">
                  0{index + 1}
                </span>

                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/build-your-own"
            onClick={() => setIsOpen(false)}
            className="mt-10 inline-flex w-fit items-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-[#1D2923]"
          >
            Build Your Own
            <ArrowUpRight size={17} />
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Navbar