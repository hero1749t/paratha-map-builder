import alooImg from "@/assets/aloo-paratha.jpg";
import paneerImg from "@/assets/paneer-paratha.jpg";
import vegImg from "@/assets/veg-paratha.jpg";
import lassiImg from "@/assets/lassi.jpg";
import { Leaf, Star } from "lucide-react";

const menuItems = [
  {
    name: "Aloo Paratha",
    hindiName: "आलू पराठा",
    price: "₹60",
    desc: "Classic stuffed potato paratha with butter, served with homemade achaar and creamy raita.",
    img: alooImg,
    tag: "Bestseller",
    veg: true,
  },
  {
    name: "Paneer Paratha",
    hindiName: "पनीर पराठा",
    price: "₹90",
    desc: "Fresh cottage cheese stuffing with spices, crispy golden crust, white butter on top.",
    img: paneerImg,
    tag: "Most Loved",
    veg: true,
  },
  {
    name: "Mix Veg Paratha",
    hindiName: "मिक्स वेज पराठा",
    price: "₹80",
    desc: "Seasonal vegetables stuffed paratha — healthy, tasty, filling. Served with dal and chutney.",
    img: vegImg,
    tag: "Healthy",
    veg: true,
  },
  {
    name: "Sweet Lassi",
    hindiName: "मीठी लस्सी",
    price: "₹50",
    desc: "Thick, chilled Punjabi lassi made from fresh dahi. The perfect companion to any paratha.",
    img: lassiImg,
    tag: "Must Try",
    veg: true,
  },
];

const extraItems = [
  { name: "Methi Paratha", hindiName: "मेथी पराठा", price: "₹70" },
  { name: "Gobi Paratha", hindiName: "गोभी पराठा", price: "₹70" },
  { name: "Mooli Paratha", hindiName: "मूली पराठा", price: "₹65" },
  { name: "Keema Paratha", hindiName: "कीमा पराठा", price: "₹120" },
  { name: "Egg Paratha", hindiName: "अंडा पराठा", price: "₹80" },
  { name: "Butter Roti", hindiName: "बटर रोटी", price: "₹20" },
  { name: "Dal Makhani", hindiName: "दाल मखनी", price: "₹80" },
  { name: "Masala Chai", hindiName: "मसाला चाय", price: "₹25" },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 font-hindi">
            हमारा मेनू
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Signature</span> Dishes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Har dish mein hai hamare pahalwan ji ka dil — bhari hua makkhan se, prem se, aur asli masalon se
          </p>
        </div>

        {/* Featured Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border border-border group"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={10} fill="currentColor" />
                    {item.tag}
                  </span>
                </div>
                {item.veg && (
                  <div className="absolute top-3 right-3 w-6 h-6 border-2 border-dhaba-green rounded-sm bg-card flex items-center justify-center">
                    <div className="w-3 h-3 bg-dhaba-green rounded-full" />
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg">{item.name}</h3>
                    <p className="font-hindi text-muted-foreground text-sm">{item.hindiName}</p>
                  </div>
                  <span className="font-display font-black text-primary text-xl">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Menu Grid */}
        <div className="bg-secondary rounded-3xl p-8 border border-border">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Aur Bhi Bahut Kuch — <span className="text-primary">Full Menu</span>
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {extraItems.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center bg-card rounded-xl px-4 py-3 border border-border hover:border-primary/40 transition-colors"
              >
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.name}</p>
                  <p className="font-hindi text-muted-foreground text-xs">{item.hindiName}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf size={12} className="text-dhaba-green" />
                  <span className="font-bold text-primary text-sm">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6 font-hindi">
            * दाम बदल सकते हैं — अधिक जानकारी के लिए कॉल करें
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
