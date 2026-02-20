import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-deep-brown shadow-warm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-display text-xl font-bold text-primary leading-tight">
            Pahalwan
          </span>
          <span className="font-hindi text-xs text-cream opacity-80 tracking-widest">
            पहलवान पराठा ढाबा
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+918006048181"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-warm"
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cream"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-deep-brown px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-cream hover:text-primary transition-colors font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+918006048181"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold w-fit"
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
