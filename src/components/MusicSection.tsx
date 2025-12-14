import { useState, useEffect, useRef, useCallback } from "react";
import { Play, X, ChevronLeft, ChevronRight, Repeat } from "lucide-react";

// YouTube Player types
declare global {
  interface Window {
    YT: {
      Player: new (elementId: string, config: any) => any;
      PlayerState: {
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

type TrackType = "Single" | "Album" | "EP" | "Freestyle" | "Feat";

interface Track {
  id: string;
  title: string;
  year: string;
  type: TrackType;
  thumbnail: string;
  youtubeId: string;
}

const tracks: Track[] = [
  // 2019 
  { id: "1", title: "Yezzi", year: "2019", type: "Single", thumbnail: "https://img.youtube.com/vi/kfMIY8vRdDs/maxresdefault.jpg", youtubeId: "kfMIY8vRdDs" },
  { id: "2", title: "ALLO BABA", year: "2019", type: "Single", thumbnail: "https://img.youtube.com/vi/qrOR36FGO_Q/maxresdefault.jpg", youtubeId: "qrOR36FGO_Q" },
  { id: "3", title: "FREESTYLE #1", year: "2019", type: "Freestyle", thumbnail: "https://img.youtube.com/vi/beV3Rek3y2o/hqdefault.jpg", youtubeId: "beV3Rek3y2o" },
  { id: "4", title: "FREESTYLE #2", year: "2019", type: "Freestyle", thumbnail: "https://img.youtube.com/vi/9YBD2cLnBbk/maxresdefault.jpg", youtubeId: "9YBD2cLnBbk" },
  { id: "5", title: "BOUZAYEIN ( INTRO )", year: "2019", type: "EP", thumbnail: "https://img.youtube.com/vi/YJtaIwt_vio/maxresdefault.jpg", youtubeId: "YJtaIwt_vio" },
  { id: "6", title: "8 CHHOUR", year: "2019", type: "EP", thumbnail: "https://img.youtube.com/vi/HtAYFJw4QjQ/maxresdefault.jpg", youtubeId: "HtAYFJw4QjQ" },
  { id: "7", title: "DÉMISSION ", year: "2019", type: "EP", thumbnail: "https://img.youtube.com/vi/-hI1KVTmwNg/maxresdefault.jpg", youtubeId: "-hI1KVTmwNg" },
  { id: "8", title: "BTITE", year: "2019", type: "EP", thumbnail: "https://img.youtube.com/vi/ExnCRft0Xf4/maxresdefault.jpg", youtubeId: "ExnCRft0Xf4" },

  // 2020 
  { id: "9", title: "FOUNDOU ", year: "2020", type: "EP", thumbnail: "https://img.youtube.com/vi/Ads4crj9Td0/maxresdefault.jpg", youtubeId: "Ads4crj9Td0" },
  { id: "10", title: "MCHEW ", year: "2020", type: "EP", thumbnail: "https://img.youtube.com/vi/FXs3QcE_x9g/maxresdefault.jpg", youtubeId: "FXs3QcE_x9g" },
  { id: "11", title: "WA9TI ", year: "2020", type: "EP", thumbnail: "https://img.youtube.com/vi/PwS3jCIYikg/maxresdefault.jpg", youtubeId: "PwS3jCIYikg" },
  { id: "12", title: "KASO FT TESSTESS - BAKAW SAMIR (OUTRO)", year: "2020", type: "EP", thumbnail: "https://img.youtube.com/vi/fiai-R5uC-8/maxresdefault.jpg", youtubeId: "fiai-R5uC-8", feat: true },
  { id: "13", title: "AWEL MARRA (BONUS TRACK)", year: "2020", type: "Single", thumbnail: "https://img.youtube.com/vi/OQmm6a1P_CM/maxresdefault.jpg", youtubeId: "OQmm6a1P_CM" },
  { id: "14", title: "LABES ?", year: "2020", type: "Single", thumbnail: "https://img.youtube.com/vi/8Nr-cdMPlxU/maxresdefault.jpg", youtubeId: "8Nr-cdMPlxU" },
  { id: "15", title: "TAW NJIK", year: "2020", type: "Single", thumbnail: "https://img.youtube.com/vi/JQlHMvVCdK8/maxresdefault.jpg", youtubeId: "JQlHMvVCdK8" },
  { id: "16", title: "FREESTYLE #3", year: "2020", type: "Freestyle", thumbnail: "https://img.youtube.com/vi/1aqck_4NCbw/maxresdefault.jpg", youtubeId: "1aqck_4NCbw" },
  { id: "17", title: "FINHOM", year: "2020", type: "Single", thumbnail: "https://img.youtube.com/vi/gygpVjKBtdw/maxresdefault.jpg", youtubeId: "gygpVjKBtdw" },
  { id: "18", title: "Kont Ghalet", year: "2020", type: "Single", thumbnail: "https://img.youtube.com/vi/2_WlQlCzyB4/maxresdefault.jpg", youtubeId: "2_WlQlCzyB4" },
  { id: "19", title: "TRANQUILLE", year: "2020", type: "Single", thumbnail: "https://img.youtube.com/vi/_sHZEoVXTKE/maxresdefault.jpg", youtubeId: "_sHZEoVXTKE" },

  // 2021 
  { id: "20", title: "BIG STEP (GROW UP ALBUM)", year: "2021", type: "Single", thumbnail: "https://img.youtube.com/vi/gLSDweTDQTI/maxresdefault.jpg", youtubeId: "gLSDweTDQTI" },
  { id: "21", title: "GROW UP FREESTYLE", year: "2021", type: "Freestyle", thumbnail: "https://img.youtube.com/vi/gcquQsoVV58/maxresdefault.jpg", youtubeId: "gcquQsoVV58" },
  { id: "22", title: "MELLI SGHIR (INTRO)", year: "2021", type: "Album", thumbnail: "https://img.youtube.com/vi/P0aTafNpyDY/maxresdefault.jpg", youtubeId: "P0aTafNpyDY" },
  { id: "23", title: "MA3LIKESH ELLOUM", year: "2021", type: "Album", thumbnail: "https://img.youtube.com/vi/8kZnEoMVpXQ/maxresdefault.jpg", youtubeId: "8kZnEoMVpXQ" },
  { id: "24", title: " RICH FT ALA & EL CASTRO", year: "2021", type: "Album", thumbnail: "https://img.youtube.com/vi/XCJNHUDpt_g/maxresdefault.jpg", youtubeId: "XCJNHUDpt_g", feat: true },
  { id: "25", title: "NETFAKARNA SGHAR", year: "2021", type: "Album", thumbnail: "https://img.youtube.com/vi/-eaibsloPCc/maxresdefault.jpg", youtubeId: "-eaibsloPCc" },
  { id: "26", title: "B3IDA", year: "2021", type: "Album", thumbnail: "https://img.youtube.com/vi/OCkJjN2ryjM/maxresdefault.jpg", youtubeId: "OCkJjN2ryjM" },
  { id: "27", title: "MAFEHMOUNICH", year: "2021", type: "Album", thumbnail: "https://img.youtube.com/vi/6aD-xLATpms/maxresdefault.jpg", youtubeId: "6aD-xLATpms" },

  // 2022 
  { id: "28", title: "FREESTYLE #4", year: "2022", type: "Freestyle", thumbnail: "https://img.youtube.com/vi/d3gHaWQMIt4/maxresdefault.jpg", youtubeId: "d3gHaWQMIt4" },
  { id: "29", title: "T7arrek 9oum", year: "2022", type: "Album", thumbnail: "https://img.youtube.com/vi/4jg2R769PXo/maxresdefault.jpg", youtubeId: "4jg2R769PXo" },
  { id: "30", title: "Modda ", year: "2022", type: "Album", thumbnail: "https://img.youtube.com/vi/_4LpNAoa6JY/maxresdefault.jpg", youtubeId: "_4LpNAoa6JY" },
  { id: "31", title: " Grow Up Ft. KASOYAM", year: "2022", type: "Album", thumbnail: "https://img.youtube.com/vi/ENeGlWLu1H0/hqdefault.jpg", youtubeId: "ENeGlWLu1H0", feat: true },
  { id: "32", title: " Hani Maak", year: "2022", type: "Album", thumbnail: "https://img.youtube.com/vi/DwL6pw3s_bI/maxresdefault.jpg", youtubeId: "DwL6pw3s_bI" },
  { id: "33", title: "Nejri 3al Flouss", year: "2022", type: "Album", thumbnail: "https://img.youtube.com/vi/nk95MwQybJU/maxresdefault.jpg", youtubeId: "nk95MwQybJU" },
  { id: "34", title: "Lkolou Klem", year: "2022", type: "Album", thumbnail: "https://img.youtube.com/vi/DpuBTsxnZaM/maxresdefault.jpg", youtubeId: "DpuBTsxnZaM" },
  { id: "35", title: "Bye Bye Ft. ARTMASTA", year: "2022", type: "Album", thumbnail: "https://img.youtube.com/vi/3uwurfC8nIE/maxresdefault.jpg", youtubeId: "3uwurfC8nIE", feat: true },
  { id: "36", title: "Sghira Ft. TESSTESS", year: "2022", type: "Album", thumbnail: "https://img.youtube.com/vi/l3zxDnxgqB0/hqdefault.jpg", youtubeId: "l3zxDnxgqB0", feat: true },
  { id: "37", title: "KBERNA", year: "2022", type: "Single", thumbnail: "https://img.youtube.com/vi/ZNMHaKE_s44/maxresdefault.jpg", youtubeId: "ZNMHaKE_s44" },
  { id: "38", title: "KI NKHAMMEM FIK", year: "2022", type: "Single", thumbnail: "https://img.youtube.com/vi/Vq59mtskGiM/maxresdefault.jpg", youtubeId: "Vq59mtskGiM" },

  // 2023 
  { id: "39", title: "TA3BOUNI", year: "2023", type: "Single", thumbnail: "https://img.youtube.com/vi/aGZ6k8rQJVQ/maxresdefault.jpg", youtubeId: "aGZ6k8rQJVQ" },
  { id: "40", title: "MENGHIR SBAB", year: "2023", type: "Single", thumbnail: "https://img.youtube.com/vi/_tDB534_lf4/maxresdefault.jpg", youtubeId: "_tDB534_lf4" },
  { id: "41", title: "KHALINI (FALLUJAH OST )", year: "2023", type: "Single", thumbnail: "https://img.youtube.com/vi/kv_97RYh1PY/hqdefault.jpg", youtubeId: "kv_97RYh1PY" },
  { id: "42", title: "YAMMA", year: "2023", type: "Single", thumbnail: "https://img.youtube.com/vi/rxkteUJhLKs/maxresdefault.jpg", youtubeId: "rxkteUJhLKs" },
  { id: "43", title: "SADA9THA", year: "2023", type: "Single", thumbnail: "https://img.youtube.com/vi/4Ygu___c0dA/hqdefault.jpg", youtubeId: "4Ygu___c0dA" },
  { id: "44", title: "TMANIT ", year: "2023", type: "Single", thumbnail: "https://img.youtube.com/vi/rd-KaLtILCs/maxresdefault.jpg", youtubeId: "rd-KaLtILCs" },
  { id: "45", title: "RMIT WRAYA", year: "2023", type: "Single", thumbnail: "https://img.youtube.com/vi/qfkCxRSTBts/maxresdefault.jpg", youtubeId: "qfkCxRSTBts" },

  // 2024 
  { id: "46", title: "MESSYEBA (Intro)", year: "2024", type: "EP", thumbnail: "https://img.youtube.com/vi/glL4e1BZscM/maxresdefault.jpg", youtubeId: "glL4e1BZscM" },
  { id: "47", title: "KONT NKHAF 3LIK MEN NAAR", year: "2024", type: "EP", thumbnail: "https://img.youtube.com/vi/wk56oRtu9D0/maxresdefault.jpg", youtubeId: "wk56oRtu9D0" },
  { id: "48", title: "MELLI SAR", year: "2024", type: "EP", thumbnail: "https://img.youtube.com/vi/0zTv0G82Yp8/maxresdefault.jpg", youtubeId: "0zTv0G82Yp8" },
  { id: "49", title: "MAZELT SGHIR", year: "2024", type: "EP", thumbnail: "https://img.youtube.com/vi/-w8Y-8xzBho/maxresdefault.jpg", youtubeId: "-w8Y-8xzBho" },
  { id: "50", title: "MECHI W MKHOLI", year: "2024", type: "EP", thumbnail: "https://img.youtube.com/vi/HXawfpVtX6U/maxresdefault.jpg", youtubeId: "HXawfpVtX6U" },
  { id: "51", title: "9RIBA ", year: "2024", type: "EP", thumbnail: "https://img.youtube.com/vi/r-oL8Y0PYD0/maxresdefault.jpg", youtubeId: "r-oL8Y0PYD0" },
  { id: "52", title: "NE7LEF", year: "2024", type: "EP", thumbnail: "https://img.youtube.com/vi/NYzANnfqmOw/hqdefault.jpg", youtubeId: "NYzANnfqmOw" },
  { id: "53", title: "OUTRO", year: "2024", type: "EP", thumbnail: "https://img.youtube.com/vi/PvQCte31VYE/maxresdefault.jpg", youtubeId: "PvQCte31VYE" },
  { id: "54", title: "DIMA", year: "2024", type: "Single", thumbnail: "https://img.youtube.com/vi/Y-fe2kpe-hU/maxresdefault.jpg", youtubeId: "Y-fe2kpe-hU" },
  { id: "55", title: "FEELINGS (Full movie)", year: "2024", type: "EP", thumbnail: "https://img.youtube.com/vi/iD4ab4BncRc/maxresdefault.jpg", youtubeId: "iD4ab4BncRc" },

  // 2025 
  { id: "56", title: "THANNA", year: "2025", type: "EP", thumbnail: "https://img.youtube.com/vi/NqU0c8pmIO0/hqdefault.jpg", youtubeId: "NqU0c8pmIO0" },
  { id: "57", title: "EL BO3ED", year: "2025", type: "EP", thumbnail: "https://img.youtube.com/vi/aZ_Cpfe_9aw/maxresdefault.jpg", youtubeId: "aZ_Cpfe_9aw" },
  { id: "58", title: "AUTOROUTE", year: "2025", type: "EP", thumbnail: "https://img.youtube.com/vi/tZlig8B485U/maxresdefault.jpg", youtubeId: "tZlig8B485U" },
  { id: "59", title: "MEN BARRA", year: "2025", type: "EP", thumbnail: "https://img.youtube.com/vi/COdrRin8DCU/maxresdefault.jpg", youtubeId: "COdrRin8DCU" },
  { id: "60", title: "LOUMNI", year: "2025", type: "EP", thumbnail: "https://img.youtube.com/vi/5AvVv5AProE/maxresdefault.jpg", youtubeId: "5AvVv5AProE" },
  { id: "61", title: "ENNARD", year: "2025", type: "EP", thumbnail: "https://img.youtube.com/vi/150BYTHxbyY/maxresdefault.jpg", youtubeId: "150BYTHxbyY" },
  { id: "62", title: "Ghalet", year: "2025", type: "Single", thumbnail: "https://img.youtube.com/vi/p7vqVi7v2eU/maxresdefault.jpg", youtubeId: "p7vqVi7v2eU" },
  { id: "63", title: " Ya Baba", year: "2025", type: "Single", thumbnail: "https://img.youtube.com/vi/zZ7ulF-HZ0M/maxresdefault.jpg", youtubeId: "zZ7ulF-HZ0M" },
];
const years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
const types: TrackType[] = ["Single", "Album", "EP", "Freestyle"];

const MusicSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<TrackType | "All" | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const playerRef = useRef<any>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<boolean>(false);

  // Get available types for the selected year
  const availableTypes = selectedYear
    ? [...new Set(tracks.filter(t => t.year === selectedYear).map(t => t.type))]
    : [];

  // Filter tracks based on selections
  const filteredTracks = selectedYear && selectedType
    ? selectedType === "All"
      ? tracks.filter(track => track.year === selectedYear)
      : selectedType === "Feat"
        ? tracks.filter(track => track.year === selectedYear && track.feat === true)
        : tracks.filter(track => track.year === selectedYear && track.type === selectedType)
    : [];

  const openModal = (youtubeId: string) => {
    const trackIndex = filteredTracks.findIndex(t => t.youtubeId === youtubeId);
    setCurrentTrackIndex(trackIndex >= 0 ? trackIndex : 0);
    setSelectedVideo(youtubeId);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  const handleYearClick = (year: string) => {
    setSelectedYear(year);
    setSelectedType("All");
  };

  const playPrevious = () => {
    if (filteredTracks.length === 0) return;
    const newIndex = currentTrackIndex > 0 ? currentTrackIndex - 1 : filteredTracks.length - 1;
    setCurrentTrackIndex(newIndex);
    setSelectedVideo(filteredTracks[newIndex].youtubeId);
  };

  const playNextRef = useRef<() => void>(() => {});

  // Keep playNext function in ref to avoid stale closures
  playNextRef.current = useCallback(() => {
    if (filteredTracks.length === 0) return;
    const newIndex = currentTrackIndex < filteredTracks.length - 1 ? currentTrackIndex + 1 : 0;
    setCurrentTrackIndex(newIndex);
    const nextVideoId = filteredTracks[newIndex].youtubeId;
    setSelectedVideo(nextVideoId);
    if (playerRef.current && playerRef.current.loadVideoById) {
      playerRef.current.loadVideoById(nextVideoId);
    }
  }, [currentTrackIndex, filteredTracks]);

  const playNext = () => playNextRef.current();

  // Keep autoplay in ref so closure always has latest value
  useEffect(() => {
    autoplayRef.current = autoplay;
  }, [autoplay]);

  // Load YouTube IFrame API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }
  }, []);

  // Initialize YouTube player when modal opens
  useEffect(() => {
    if (!selectedVideo || !playerContainerRef.current) return;

    const initPlayer = () => {
      if (playerContainerRef.current) {
        playerContainerRef.current.innerHTML = '<div id="yt-player"></div>';
      }

      playerRef.current = new window.YT.Player("yt-player", {
        videoId: selectedVideo,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onStateChange: (event: any) => {
            // State 0 = ended, use ref to get latest autoplay value
            if (event.data === 0 && autoplayRef.current) {
              playNextRef.current();
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [selectedVideo]);

  const currentTrack = filteredTracks[currentTrackIndex];

  return (
    <section id="music" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 ltr-text">
          Music
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />

        {/* Year Filter - Always Visible */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground mb-6 text-lg">Select a year to explore</p>
          <div className="flex justify-center flex-wrap gap-3 md:gap-4">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearClick(year)}
                className={`w-14 h-14 md:w-[60px] md:h-[60px] rounded-full font-bold text-sm transition-all duration-300 hover:scale-110 flex-shrink-0
                  ${selectedYear === year
                    ? "bg-primary-hover text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.6)] scale-105"
                    : "bg-primary text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)]"
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Type Filter - Shows after year selected */}
        {selectedYear && (
          <div className="text-center animate-fade-in mb-8">
            <div className="flex justify-center flex-wrap gap-3 md:gap-4">
              {/* All Button */}
              <button
                onClick={() => setSelectedType("All")}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex-shrink-0
                  ${selectedType === "All"
                    ? "bg-primary-hover text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.6)] scale-105"
                    : "bg-primary text-primary-foreground hover:scale-110 hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)]"
                  }`}
              >
                All
              </button>
              {types.map((type) => {
                const isAvailable = availableTypes.includes(type);
                return (
                  <button
                    key={type}
                    onClick={() => isAvailable && setSelectedType(type)}
                    disabled={!isAvailable}
                    className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex-shrink-0
                      ${selectedType === type
                        ? "bg-primary-hover text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.6)] scale-105"
                        : isAvailable
                          ? "bg-primary text-primary-foreground hover:scale-110 hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)]"
                          : "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                      }`}
                  >
                    {type}
                  </button>
                );
              })}

              {/* Feat Button - خارج الـ map */}
              <button
                onClick={() => setSelectedType("Feat")}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex-shrink-0
                  ${selectedType === "Feat"
                    ? "bg-primary-hover text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.6)] scale-105"
                    : "bg-primary text-primary-foreground hover:scale-110 hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)]"
                  }`}
              >
                Feat
              </button>
            </div>
          </div>
        )}        
        

        {/* Songs Grid */}
        {selectedYear && selectedType && (
          <div className="animate-fade-in">

            {filteredTracks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredTracks.map((track, index) => (
                  <div
                    key={track.id}
                    className="group relative bg-card rounded-xl overflow-hidden border border-border/30 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_10px_40px_hsl(24_100%_50%/0.25)] hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={track.thumbnail}
                        alt={track.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                      
                      {/* Play Button */}
                      <button
                        onClick={() => openModal(track.youtubeId)}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-label={`Play ${track.title}`}
                      >
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_30px_hsl(24_100%_50%/0.7)]">
                          <Play className="w-7 h-7 text-primary-foreground fill-current ml-1" />
                        </div>
                      </button>

                      {/* Type Badge */}
                      <span className="absolute top-3 right-3 px-3 py-1 bg-primary rounded-full text-primary-foreground text-xs font-bold">
                        {track.type}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-xl text-foreground">
                        {track.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No {selectedType.toLowerCase()}s in {selectedYear}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* YouTube Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div
            className="relative w-full max-w-4xl mx-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Current Track Title */}
            {currentTrack && (
              <h3 className="text-foreground font-heading font-bold text-lg md:text-xl mb-4 text-center">
                {currentTrack.title}
              </h3>
            )}

            {/* Video Player */}
            <div 
              ref={playerContainerRef}
              className="w-full aspect-video rounded-lg overflow-hidden"
            >
              <div id="yt-player"></div>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              {/* Previous Button */}
              <button
                onClick={playPrevious}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)]"
                aria-label="Previous track"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>

              {/* Autoplay Toggle */}
              <button
                onClick={() => setAutoplay(!autoplay)}
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  autoplay
                    ? "bg-primary text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.6)]"
                    : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)]"
                }`}
                aria-label={autoplay ? "Disable autoplay" : "Enable autoplay"}
              >
                <Repeat className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={playNext}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)]"
                aria-label="Next track"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            </div>

            {/* Track Position Indicator */}
            <p className="text-muted-foreground text-sm mt-3">
              {currentTrackIndex + 1} / {filteredTracks.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MusicSection;
