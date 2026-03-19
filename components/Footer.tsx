"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-pitch border-t border-warm-gray/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-black tracking-wider text-gold mb-4">
              THE WORLD IN A CITY
            </h3>
            <p className="text-warm-gray text-sm leading-relaxed">
              A premium documentary exploring culture, identity, and belonging through the FIFA World Cup.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wide text-chalk mb-4 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#cities" className="text-warm-gray hover:text-gold transition-colors text-sm">Cities</a></li>
              <li><a href="#sponsors" className="text-warm-gray hover:text-gold transition-colors text-sm">Sponsors</a></li>
              <li><a href="#investors" className="text-warm-gray hover:text-gold transition-colors text-sm">Investors</a></li>
              <li><a href="#faq" className="text-warm-gray hover:text-gold transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wide text-chalk mb-4 uppercase">
              Contact
            </h4>
            <p className="text-warm-gray text-sm mb-2">
              <a href="mailto:hello@worldinacity.com" className="hover:text-gold transition-colors">
                hello@worldinacity.com
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-warm-gray/20 text-center">
          <p className="text-warm-gray text-sm">
            © {currentYear} Hilton Sports Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
