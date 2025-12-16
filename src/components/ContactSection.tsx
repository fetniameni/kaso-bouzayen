import { Instagram, Facebook, Youtube, Twitter, ExternalLink } from "lucide-react";
const socialLinks = [{
  name: "Instagram",
  icon: Instagram,
  url: "https://instagram.com/karim_kaso",
  color: "hover:text-pink-500"
}, {
  name: "Facebook",
  icon: Facebook,
  url: "https://facebook.com/KARIMKASO1",
  color: "hover:text-blue-500"
}, {
  name: "YouTube",
  icon: Youtube,
  url: "https://youtube.com/@KASOKARIM",
  color: "hover:text-red-500"
}, {
  name: "X",
  icon: Twitter,
  url: "https://x.com/karim_kaso",
  color: "hover:text-foreground"
}];
const musicPlatforms = [{
  name: "YouTube",
  url: "https://www.youtube.com/@KASOKARIM",
  color: "#FF0000",
  icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
}, {
  name: "Apple Music",
  url: "https://music.apple.com/artist/kaso/1565264840",
  color: "#FA243C",
  icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81.84-.553 1.472-1.287 1.88-2.208.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.785-.455-2.105-1.245-.38-.94.093-2.04 1.083-2.48.324-.145.67-.225 1.018-.29.44-.082.89-.112 1.332-.192.274-.05.517-.168.652-.45.062-.13.1-.27.1-.414.003-1.18 0-2.36 0-3.54v-.203l-5.82 1.318v6.283c0 .21-.02.423-.064.63-.2.97-.94 1.6-1.882 1.71-.475.054-.942.017-1.388-.18-.682-.3-1.07-.807-1.15-1.55-.078-.752.17-1.382.796-1.843.352-.26.762-.4 1.19-.48.453-.084.91-.132 1.36-.222.303-.06.584-.172.78-.44.108-.15.16-.32.16-.5V7.217c0-.303.065-.58.29-.8.19-.185.425-.272.685-.32.376-.07.757-.122 1.136-.178l3.19-.472c.65-.097 1.3-.19 1.947-.29.32-.05.645-.083.945.08.36.194.515.54.515.946z" />
      </svg>
}, {
  name: "Anghami",
  url: "https://open.anghami.com/JmkuVFs54Yb",
  color: "#7B2EFF",
  icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.703c-.185.296-.592.388-.888.203-2.443-1.495-5.52-1.834-9.142-1.005-.349.08-.697-.14-.777-.488-.08-.35.14-.697.488-.778 3.963-.907 7.364-.517 10.116 1.18.296.186.388.592.203.888zm1.571-3.61c-.233.372-.727.49-1.1.256-2.797-1.718-7.061-2.216-10.372-1.213-.422.128-.868-.11-.996-.532-.127-.422.11-.868.532-.996 3.784-1.148 8.487-.592 11.68 1.386.372.233.49.727.256 1.1zm.135-3.757c-3.354-1.992-8.887-2.176-12.089-1.203-.51.155-1.05-.13-1.206-.64-.155-.51.13-1.05.64-1.206 3.68-1.117 9.8-.902 13.673 1.392.458.272.61.863.338 1.32-.272.458-.863.61-1.32.338z" />
      </svg>
}, {
  name: "Deezer",
  url: "https://www.deezer.com/artist/341290",
  color: "#00C7F2",
  icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38h-5.19zm12.54 0v3.027H24V8.38h-5.19zM0 12.59v3.027h5.19V12.59H0zm6.27 0v3.027h5.189V12.59h-5.19zm6.27 0v3.027h5.19V12.59h-5.19zm6.27 0v3.027H24V12.59h-5.19zM0 16.81v3.03h5.19v-3.03H0zm6.27 0v3.03h5.189v-3.03h-5.19zm6.27 0v3.03h5.19v-3.03h-5.19zm6.27 0v3.03H24v-3.03h-5.19z" />
      </svg>
}, {
  name: "Spotify",
  url: "https://open.spotify.com/artist/1Brdq29oq6t0jyJeeLLMx0?si=jfuQML3ZSrav5ryWMmWRVw",
  color: "#1DB954",
  icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
}];
const ContactSection = () => {
  return <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 ltr-text">
          Contact
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />

        <p className="rtl-text text-center text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
          تابعني على مواقع التواصل الاجتماعي
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {socialLinks.map(social => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`group flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_hsl(24_100%_50%/0.15)]`} aria-label={social.name}>
              <social.icon className={`w-12 h-12 text-muted-foreground transition-colors duration-300 ${social.color}`} />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {social.name}
              </span>
            </a>)}
        </div>

        {/* Bouzairies Exclusive */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-6">
            Behind the scenes, exclusive news & more
          </p>
          <a href="https://www.instagram.com/bouzairies" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
            <Instagram className="w-6 h-6" />
            Follow @bouzairies
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Music Platforms */}
        <div className="mb-16">
          <p className="rtl-text text-center text-lg text-muted-foreground mb-8">
            اسمعني على منصات الموسيقى
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {musicPlatforms.map(platform => <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110" aria-label={platform.name}>
                <div className="w-[60px] h-[60px] rounded-full bg-card border border-border/50 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(24_100%_50%/0.5)] group-hover:border-primary/50" style={{
              color: platform.color
            }}>
                  {platform.icon}
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {platform.name}
                </span>
              </a>)}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 pt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="rtl-text text-muted-foreground">Copyright © 2025 KASO.  All Rights Reserved</p>
          <p className="rtl-text text-sm text-muted-foreground/60 mt-2">
              🧡 ​Designed by AmeNy
          </p>
          <img src="/assets/ameny-logo.png" alt="AmeNy Logo" className="mx-auto mt-4 h-32 w-auto opacity-80 hover:opacity-100 transition-opacity" />
        </div>
      </footer>
    </section>;
};
export default ContactSection;
