import React from 'react';

const events = [
  {
    title: "Réveillon 2026 - El Mouradi Palace",
    date: "31 Dec 2025",
    location: "El Mouradi Palace",
    artists: "Kaso, Nour Chiba, Manel Amara, Raouf Maher, Aymen Lessigue",
    poster: "/el-mouradi-poster.jpg"  
  },
  {
    title: "Réveillon 2026 - RR",
    date: "31 Dec 2025",
    location: "RR",
    artists: "Kaso, Khnefes, Latifa Raafat, Faouzi Ben Gamra, Chirine Lajmi",
    poster: "/rr-poster.jpg"
  },
  {
    title: "BelAir Showcase",
    date: "12 Dec 2025",
    location: "BelAir",
    artists: "Kaso with Jawher Merdassi",
    poster: "/belair-poster.jpg"
  },
];

const EventsSection = () => (
  <section id="events" className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold">
          Events & Showcases
        </h2>
        <p className="text-xl text-primary font-heading mt-4">
          Catch Kaso live!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300"
          >
            <img
              src={event.poster}
              alt={event.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                {event.title}
              </h3>
              <p className="text-muted-foreground mb-1">{event.date}</p>
              <p className="text-muted-foreground mb-3">{event.location}</p>
              <p className="text-sm text-muted-foreground">{event.artists}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;
