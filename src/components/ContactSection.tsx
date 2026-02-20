import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 font-hindi">
            हमसे मिलें
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kahan Milenge <span className="text-gradient-gold">Hum?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dehradun ke dil mein, Prem Nagar mein — aapka intezaar kar rahe hain pahalwan ji!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info Cards */}
          <div className="flex flex-col gap-5">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-card flex items-start gap-4 hover:shadow-warm transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Hamare Do Thikane</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong className="text-foreground">Location 1:</strong> Khere Gaon, Chakrata Road, Opposite Uttaranchal University, Prem Nagar, Dehradun
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  <strong className="text-foreground">Location 2:</strong> Near UPES Campus, Kandoli Road, Bidoli Road, Dehradun
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-card flex items-start gap-4 hover:shadow-warm transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Timing</h3>
                <p className="text-muted-foreground text-sm">
                  <span className="text-dhaba-green font-semibold">● Open 24 Hours, 7 Days a Week</span>
                </p>
                <p className="font-hindi text-muted-foreground text-sm mt-1">
                  चाहे रात हो या दिन — पराठा हमेशा गरम मिलेगा!
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-card flex items-start gap-4 hover:shadow-warm transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Contact</h3>
                <a href="tel:+918006048181" className="text-primary font-semibold text-lg hover:underline">
                  +91 80060 48181
                </a>
                <p className="text-muted-foreground text-sm mt-1">Zomato / Swiggy par bhi available</p>
                <div className="flex gap-2 mt-3">
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Zomato</span>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Swiggy</span>
                  <span className="bg-dhaba-green/10 text-dhaba-green text-xs font-semibold px-3 py-1 rounded-full">Dine-In</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Pahalwan+paratha+dhabha+../@30.3870178,77.8264618,12z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-lg shadow-warm hover:opacity-90 transition-all hover:scale-[1.02]"
            >
              <Navigation size={20} />
              Google Maps Par Dhundho
            </a>
          </div>

          {/* Map Embed */}
          <div className="rounded-3xl overflow-hidden shadow-warm border border-border h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55940.31!2d77.8264618!3d30.3870178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d561151fa52d%3A0x8b6ed11881316502!2sPahalwan%20paratha%20dhabha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pahalwan Paratha Dhabha Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
