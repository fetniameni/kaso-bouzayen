import { Flame } from "lucide-react";

const teasers = [
  {
    title: "Anseni Live",
    video: "/anseni-live.mp4",
  },
  {
    title: "3adit Teaser",
    video: "/3adit-teaser.mp4",
  },
];

const ComingSoonSection = () => {
  return (
    <section id="coming-soon" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flame className="w-10 h-10 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Coming Soon
            </h2>
            <Flame className="w-10 h-10 text-primary animate-pulse" />
          </div>
          <p className="text-xl text-primary font-heading">
            New tracks soon انشاء الله 🙏...
          </p>
        </div>

        {/* Videos - Vertical Reels Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {teasers.map((teaser) => (
            <div
              key={teaser.title}
              className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300"
            >
              <div className="p-6 flex items-center gap-3">
                <span className="text-3xl">🔥</span>
                <h3 className="font-heading font-bold text-2xl text-foreground">
                  {teaser.title}
                </h3>
              </div>
              <div className="px-6 pb-6">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full rounded-xl shadow-lg aspect-[9/16] object-cover bg-black"
                >
                  <source src={teaser.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>

        {/* Stay Tuned */}
        <div className="text-center">
          <div className="inline-block bg-card border border-primary/50 rounded-full px-8 py-4 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300">
            <p className="text-lg font-heading font-bold">
              <span className="text-primary">Stay tuned!</span>
              <span className="text-muted-foreground ml-2">More heat coming your way 🔥</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
