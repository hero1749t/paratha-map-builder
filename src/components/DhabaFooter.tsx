import { Phone, MapPin, Star, Heart } from "lucide-react";

const DhabaFooter = () => {
  return (
    <footer className="bg-card border-t border-border text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-black text-primary mb-1">Pahalwan</h3>
            <p className="font-hindi text-cream/70 text-sm mb-4">पहलवान पराठा ढाबा — देहरादून</p>
            <p className="text-cream/60 text-sm leading-relaxed">
              Dehradun ka sabse mashoor paratha dhaba. 20+ saal ki mehnat, lakhon khushi, aur asla swad.
            </p>
            <div className="flex items-center gap-1 mt-4">
              {[1,2,3,4,5].map(s => (
                <Star key={s} size={14} className={s <= 4 ? "text-gold" : "text-cream/30"} fill={s <= 4 ? "currentColor" : "none"} />
              ))}
              <span className="text-cream/60 text-sm ml-2">3.9 / 5 · 30K+ Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-cream mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Menu", "Reviews", "Contact"].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-cream/60 hover:text-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-cream mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+918006048181" className="flex items-center gap-3 text-cream/70 hover:text-primary transition-colors text-sm">
                <Phone size={16} />
                +91 80060 48181
              </a>
              <div className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Prem Nagar, Chakrata Road, Opposite Uttaranchal University, Dehradun</span>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/30">Zomato</span>
                <span className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/30">Swiggy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm font-hindi">
            © 2024 पहलवान पराठा ढाबा। सर्वाधिकार सुरक्षित।
          </p>
          <p className="text-cream/40 text-sm flex items-center gap-1">
            Made with <Heart size={12} className="text-primary" fill="currentColor" /> in Dehradun
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DhabaFooter;
