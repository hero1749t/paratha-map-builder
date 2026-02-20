import { Flame, Heart, Clock, Users } from "lucide-react";

const features = [
  { icon: Flame, title: "Tawa Fresh", desc: "Har paratha seedha tawa se, garam garam" },
  { icon: Heart, title: "Pure Desi Ghee", desc: "Asli makkhan aur ghee, koi milawat nahi" },
  { icon: Clock, title: "24 Ghante Khula", desc: "Raat ho ya din, hum hamesha tayyar hain" },
  { icon: Users, title: "20+ Saal Ka Anubhav", desc: "Dehradun ki pehchan, parantho ka raja" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 font-hindi">
              हमारे बारे में
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Dehradun Ka Sabse{" "}
              <span className="text-gradient-gold">Mashoor Dhaba</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Pahalwan Paratha Dhabha is Dehradun's most beloved dhaba, serving
              authentic North Indian parathas with a wrestler's heart — strong,
              generous, and full of flavour. Started by Pahalwan Ji in 2005, we
              have served lakhs of hungry souls with our legendary stuffed parathas.
            </p>
            <p className="font-hindi text-foreground/80 text-base leading-relaxed">
              हर पराठा बनता है पूरे दिल से, अपने हाथों से, असली मसालों के साथ। यहाँ आकर आपको
              अपने गाँव का स्वाद याद आ जाएगा।
            </p>

            <div className="flex gap-8 mt-8">
              <div>
                <p className="font-display text-4xl font-black text-primary">20+</p>
                <p className="text-muted-foreground text-sm">Years Serving</p>
              </div>
              <div>
                <p className="font-display text-4xl font-black text-primary">30K+</p>
                <p className="text-muted-foreground text-sm">Happy Customers</p>
              </div>
              <div>
                <p className="font-display text-4xl font-black text-primary">50+</p>
                <p className="text-muted-foreground text-sm">Paratha Varieties</p>
              </div>
            </div>
          </div>

          {/* Right features grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
