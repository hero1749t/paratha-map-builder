import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Dehradun",
    rating: 5,
    text: "Yaar, ek baar aloo paratha khaya toh life badal gayi! Makkhan itna zyada tha ki bheeg gaya hatheli. Aisa swad kabhi nahi bhulega!",
    date: "2 days ago",
  },
  {
    name: "Priya Negi",
    location: "Haridwar",
    rating: 5,
    text: "24 ghante khule hain — raat 2 baje bhi gaya, fresh paratha mila. Paneer paratha literally best tha. Service bhi bahut achhi thi!",
    date: "1 week ago",
  },
  {
    name: "Amit Kumar",
    location: "Dehradun",
    rating: 4,
    text: "College ke time se aa raha hoon. Aaj bhi wahi swad hai jo pehle tha. Lassi peena mat bhoolna — ekdum thanda aur mota!",
    date: "2 weeks ago",
  },
  {
    name: "Sunita Rawat",
    location: "Rishikesh",
    rating: 5,
    text: "Prem Nagar mein best dhaba without a doubt. Dosa, paratha, chai — sab kuch amazing. Family ke saath aate hain hamesha.",
    date: "3 weeks ago",
  },
  {
    name: "Vikram Singh",
    location: "Mussoorie",
    rating: 5,
    text: "Ek baar iska gobi paratha khao, phir kisi ki parwah mat karo. Desi ghee mein bana, crispy and full of masala. Outstanding!",
    date: "1 month ago",
  },
  {
    name: "Deepak Thakur",
    location: "Dehradun",
    rating: 4,
    text: "Very affordable and filling. Ek paratha hi kafi hai for a full meal. Students ka favorite spot — budget-friendly and delicious.",
    date: "1 month ago",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 font-hindi">
            ग्राहकों की राय
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Log Kya <span className="text-gradient-gold">Kehte Hain</span>
          </h2>

          {/* Overall Rating */}
          <div className="inline-flex items-center gap-3 bg-card rounded-2xl px-6 py-4 shadow-card border border-border mt-4">
            <div className="text-center">
              <p className="font-display text-5xl font-black text-primary">3.9</p>
              <div className="flex gap-1 justify-center mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    className={s <= 4 ? "text-gold" : "text-muted"}
                    fill={s <= 4 ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-left">
              <p className="font-bold text-foreground">30,000+</p>
              <p className="text-muted-foreground text-sm">Delivery Ratings</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-left">
              <p className="font-bold text-foreground">463</p>
              <p className="text-muted-foreground text-sm">Dining Reviews</p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border relative"
            >
              <Quote
                size={32}
                className="text-primary/20 absolute top-4 right-4"
                fill="currentColor"
              />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    className={s <= review.rating ? "text-gold" : "text-muted"}
                    fill={s <= review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-5 font-hindi">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs">{review.location}</p>
                </div>
                <span className="text-muted-foreground text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
