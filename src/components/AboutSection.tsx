import { Calendar } from "lucide-react";
import { useEffect, useRef } from "react";

const timelineEvents = [
  {
    year: "2011",
    title: "البداية",
    description: "بداية المشوار تحت اسم Kasoyam",
  },
  {
    year: "2018",
    title: "الإنطلاقة الرسمية",
    description: "تحول للاسم الفني كاسو",
  },
  {
    year: "2019",
    title: "ألبوم Bouzayein",
    description: "إصدار أول ألبوم رسمي",
  },
  {
    year: "2021",
    title: "Grow Up Freestyle",
    description: "أول إصدار منفرد تحت اسم كاسو",
  },
  {
    year: "2022",
    title: "ألبوم Grow Up",
    description: "ألبوم كامل بـ16 أغنية عن النمو الشخصي",
  },
  {
    year: "2024",
    title: "فيلم FEELINGS",
    description: "إطلاق فيلم موسيقي كامل",
  },
  {
    year: "2025",
    title: "ألبوم Mode Avion",
    description: "إصدار ألبوم جديد مليان أغاني قوية",
  },
];

const AboutSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const cards = timelineRef.current.querySelectorAll(".timeline-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const scrollY = window.scrollY;
        const offset = (rect.top - window.innerHeight / 2) * 0.05;
        (card as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 ltr-text">
          About
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16" />

        <div className="max-w-4xl mx-auto">
          {/* Bio */}
          <div className="text-center mb-16">
            <p className="rtl-text text-xl md:text-2xl text-muted-foreground leading-relaxed">
              عبد الكريم بوزيان، اللي الكل يعرفو بـ<span className="text-primary font-bold"> Kaso</span>، 
              ولد 7 جويلية 1995 في حي التضامن. مغني راب تونسي صنع اسمه من الشارع. 
              كلماته تحكي قصص الواقع، ولحنه يلمس القلوب. من الأحياء الشعبية إلى المراحل الكبرى. 
              بدأ الراب 2011، ومن 2018 صار نجم تونسي بأغاني من القلب.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative" ref={timelineRef}>
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 shadow-[0_0_12px_hsl(24_100%_50%)]" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="timeline-card bg-card p-6 rounded-lg border border-border/50 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-primary font-bold text-2xl font-heading">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="rtl-text text-lg font-bold mb-2">
                      {event.title}
                    </h3>
                    <p className="rtl-text text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
