import { Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Nadeer Bouzayen",
    instagram: "https://www.instagram.com/nadeer_bouzayen",
    initial: "N",
  },
  {
    name: "Wael Bouzayen",
    instagram: "https://www.instagram.com/wael.bouzayen",
    initial: "W",
  },
  {
    name: "Youssef Ben Aziza",
    instagram: "https://www.instagram.com/ben_aziza",
    initial: "Y",
  },
  {
    name: "Ahmed Aloui",
    instagram: "https://www.instagram.com/ahmedaloui19",
    initial: "A",
  },
  {
    name: "Oussama Azzi",
    instagram: "https://www.instagram.com/machi_fenane?igsh=Mjc0cjNwczJzc3Fn",
    initial: "O",
  },
  
  {
    name: "Foued Abidi",
    instagram: "https://www.instagram.com/fanshaaaaaaaaa?igsh=ZnJ1MGRuYXAxN3Ix",
    initial: "F",
  },
  
  {
    name: "Malek Toujeni",
    instagram: "https://www.instagram.com/malek_toujeni?igsh=YWoxdm96ZjBuNjQ=",
    initial: "M",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 ltr-text">
          Team Bouzayen
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 hover:scale-105">
                {/* Avatar */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 overflow-hidden">
                  <span className="text-3xl font-heading font-bold text-primary">
                    {member.initial}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-bold text-foreground mb-4">{member.name}</h3>

                {/* Follow Button */}
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:bg-primary-hover hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                  Follow
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
