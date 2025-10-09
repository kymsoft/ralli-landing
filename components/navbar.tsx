"use client"
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
      const [scrollY, setScrollY] = useState(0)
    
      useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
      }, [])
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
            <Link className="font-heading font-bold text-2xl flex items-end" href="/" >
            <Image
              src="/ralli-logo.png"
              alt="RALLi Technologies Logo"
              width={30}
              height={20}
              className=""
            />
            ALLi Technologies
            </Link>
            <p className='text-sm mt-1'>~ A Different Kind of Disruptive.</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/team" className="text-foreground hover:text-primary transition-colors">
                Team
              </a>
              <Link href="/products" className="text-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* <div className="hidden md:block">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
            </div> */}
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border/50">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="/about" className="text-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="/team" className="text-foreground hover:text-primary transition-colors">
                  Team
                </a>
                <Link href="/products" className="text-foreground hover:text-primary transition-colors">
                  Products
                </Link>
                <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
  )
}

export default Navbar
