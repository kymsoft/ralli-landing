import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="font-heading font-bold text-2xl">RALLi Technologies</div>
              <p className="text-primary-foreground/80 text-pretty">
                Empowering tomorrow's innovations through advanced AI and transformative technology solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg">Products</h3>
              <div className="space-y-2">
                <Link
                  href="https://unswayed.com"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Unswayed
                </Link>
                <Link
                  href="/products#dot"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  DOT
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg">Company</h3>
              <div className="space-y-2">
                <a
                  href="/about"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/team"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Team
                </a>
                <a
                  href="/contact"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
                <a
                  href="/privacy-policy"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-of-use"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </a>
             </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg">Connect</h3>
              <div className="space-y-2">
                <p className="text-primary-foreground/80">contact@rallitechnologies.online</p>
                <p className="text-primary-foreground/80">+1-888-832-7448</p>
                <p className="text-primary-foreground/80">Mon-Fri, 9AM-6PM EST</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80">© 2025 RALLi Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
