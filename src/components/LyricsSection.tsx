import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

interface LyricsSong {
  id: string;
  title: string;
  titleAr: string;
  lyrics: string;
}

const songs: LyricsSong[] = [
  {
    id: "1",
    title: "B3IDA",
    titleAr: "بعيدة",
    lyrics: `كايني پكاسو صورتك بإيديا

إيه، أنا كازو لي كتبتك بإيديا

مهدم الدنيا ومديت لك ثنيا

ماكنتش نمثل كي قتلك، كان ليا

قتلك عندك ناس، هات نقولهم

واللي مش عاجبهم نيك أمهم

أحنا تا نوليوا وهوما يسكروا فمهم

هات نقدوا الخير اللي غدوة يغمهم

جرينا على حاجات وحرقنا حاجات

برشا أمنيات لين ضلوعي حيات

برشا أحاسيس لين حياتي حلات

دعيت وحدي في السر ما تكونش أيامات

ما صدقتش آش عطيت، عشت معاك تريپ ما صارش

عشنا حاجات كثيرة، وشكون من اللي عرفنا ما غارش؟

نحكيوا غدوة بعيدة، تقولي، هذا ما يتقالش

أنا دايما معاك صعيب، كا نبعد وما نقدرش

أما أنتِ اليوم بعيدة، بعيدة، بعيدة لين ماعادش نراك

أما أنتِ اليوم بعيدة، بعيدة، بعيدة لين ماعادش نراك

ياي، وأبعد، وأبعد، بعيدة لين ما عادش نراك

وأبعد، وأبعد، بعيدة لين ما عادش نراك

قريب، اللي قريب لقلبي وعينيا

اللي مدلي المحبة كيما هِيَ، كيما جات، جات

اللي قسمها، مش قسّمها عليا

مش اللي حسبها معايا متاع هات، هات

وهاني اليوم قدمت ومنعت

وهاني اليوم أنا اللي ثنيتي صنعت

وهاني اليوم خليتك سمعت

غصيت وبلعت باش منعت كيّني تصنعت

أنا مش مسامح روحي فكلمتين

مش مسامح روحي فحلمتين

ضاع وقت وأنا سارح

ضاع وقت وأنا سارح

مش مسامح روحي فكلمتين

مش مسامح روحي فحلمتين

ضاع وقت وأنا سارح

ضاع وقت وأنا سارح

عشت معك نهاري كأنه سنين

واللي كان يسير بحاجات حبيتهم

ما كنتش نفرق نهاري من الليل

نعرف صباحاتي لو كان بِك بديتهم

حياتي معاك أنا علاش، مين، وفاش وفين؟

ما هوماش خايبين، أنا اللي حطيتهم

ما كناش واعيين كنمعنيوا بالعين

أنا ريتك فيهم أما أنتِ ريتهم

عطى قلبي معاك من اللي عندُه

بعِدنا عباد حبوا يقربوا

ديما أحنا زوز باللي نجربوا

جرينا وجارينا، ماناش صغار وهانا نخربوا

كنا واحد مش إثنين، كنا ماشيين فرد ثنية

مديت برشا مني، ما خديتيش علاش عليا؟

حاكيلك حاجات أنا ما نعرفهمش عليا

ما خسرتش القريب، وليت بعيد حتى بالنية

أما أنتِ اليوم بعيدة، بعيدة، بعيدة لين ماعادش نراك

أما أنتِ اليوم بعيدة، بعيدة، بعيدة لين ماعادش نراك

ياي، وأبعد، وأبعد، بعيدة لين ما عادش نراك

وأبعد، وأبعد، بعيدة لين ما عادش نراك

وأبعد، وأبعد، بعيدة لين ما عادش نراك

وأبعد، وأبعد، بعيدة لين ما عادش نراك`,
  },
  {
    id: "2",
    title: "KBERNA",
    titleAr: "كبرنا",
    lyrics: `كبرنا و جرينا على زهرنا
ربي يصبرنا
نظاف و ديما بقدرنا
كار ما تطيح في اللي غدرنا
كبرنا و جرينا على زهرنا
ربي يصبرنا
نظاف و ديما بقدرنا
كار ما تطيح في اللي غدرنا
بلي رماو اللوم ما تموتش فيك
العباد ديما تقول ما تحسش بيك
ما فيهمش بخوت يتباختو بيك
ضربتهم الحيوط حكاو عليك
رابط بيهم انتي فلوس أحلام و كلام
ربطو بيك دروس أوهام و ملام
تعبت معاهم تو سنين في سنين طوال
نتفكر بكان و كان و كان
حكيتلهم ما رات العين ما رات
حكيتلهم من ضيق في الليل مرّات
ولي لقاني قريب ما لقيتوش مرة
خليتهم و مشيت ما صاروش مرة
قلتلهم أنا أسرار حديث تجيني
حاسبهم قراب هدولي حيلي
قداش فيهم شر أنا ما راتش عيني
قداش فيهم شر أنا ما راتش عيني
كبرنا و جرينا على زهرنا
ربي يصبرنا
نظاف و ديما بقدرنا
كار ما تطيح في اللي غدرنا
كبرنا وجرينا على زهرنا
ربي يصبرنا
نظاف و ديما بقدرنا
كار ما تطيح في اللي غدرنا
شوف محلانا بقدرنا و بعاد خير
محلانا بقدرنا و بعد خير
جرينا في زهرنا الأصفار خير
لي باهم كبرنا كي صغار خير
حسبو معايا حديث في أوقات كيسان
أنا ماشي و نزيد في رزن ميزان
شوف انا فين و شنيا دام
و بقا كان حديث لي تقال كلام
و عطيتهم مني ما كفاوش
ما وراوش الخير ما هناوش
سميناهم الي ما يتسماوش
عطيت قدر أما الناس ما يسواوش
قالوا باش يديموا ما داموش
لا ماداموش
خير كي ما دامو
كبرنا و مزالو
كبرنا و جرينا على زهرنا
ربي يصبرنا
نظاف و ديما بقدرنا
كار ما تطيح في اللي غدرنا
كبرنا و جرينا على زهرنا
ربي يصبرنا
نظاف و ديما بقدرنا
كارما تطيح في اللي غدرنا
`,
  },
  {
    id: "3",
    title: "Bouzayein Intro",
    titleAr: "بوزيان - مقدمة",
    lyrics: `3adi brouhi msabah ena w khouya nal3eb fi gagnant
Traya7 pro el eta9s skhoun w hatin dabouza citron
Fja3na sout 7ess masma3toush m revolution
Kharej nal9a bou baba
Ched massa nheb définition
9ali nkasser darri wena 7or
Nhed w nkhali 7for
Bouk ki twafa makhalesh mléyen besh béhom toskon
Omi mtaysha mridha el wa9t chhar
Meli mét el kol
Tay7o sour edar wa9t a7na sghar w a3marna li tkor
Kalamt khali 3amel 3omra mfasarlou b tafsil lahkeya
Hké m3ah kallou marret weldek
W binto w bentek wléya
9allou makharjhom had
Ama ena 3andi awlédi
Wena taw nkhamem fi awéldi
W lé mosh fi awléd awlédi
Kalem weld salou7a ykhadem zmordaa
W yhez l athéth
Kalem weld lamini yhez lkhorda eli mé tetechrésh
Kalem khali l bara men milano besh ymed mefteh
Ghadhni ta3bi w farhi w 7enni leblassa mananséhesh
Man9emtesh walit fsal ama bet fi sala m3a edar
Dhahri tmasmer men noumet jréri w sbahet batal
Jirén tahki chkoun kharajhom
Ty wahadhom badlou edar
W nes tkanter bahkeya okhra mta3 hajou mel ham wel 3ar
Coin fih pc w jweb wsel mel lycée w houma mbadlin kouba
Kréw edar li f soghri klit feha traya7 kassaret
Annbouba sahbi
Ba3douni men dar mahish hiktar
Fi mokhi hiktaret
Ba3douni men rihet baba sahbi
W 9aloulna so9at
3am itala3 fi icha3at
W 3am itala3 fel a3ross fou9 biti
3am 3rodhni bel3o 9altli dhrabtli baba
W chadni men idi
3am yahki w mayrash
W 3am mrash
W 3am khirna fi krishou
W 3am yamel yamel fel 3ib
W foumou zdid yparfen yasma lichou
9assaer w ma3andish 7a9 nejbed leflous mel ma7ekma
Omi tkharej fel mataleb taxiet wel 7ala mbahedhla
Nhar w thnin sbitarat
W omi mordhet met 3rak
W ken majésh baba m7alafni nahshi fi 3ami myet zolat
Hdith fi 9hawi yet9leb
Wahna n3ishou fi fared houma
Kén majésh edam mel wéled
Taw na7ra bikom tahouna
Kif trani tbadel médda
W zid tahki f edhhar entouma
Nhara9 dami nhouto fi3inek
Wrassek yemchi fkarthouna
Dima tab3i seket manhebesh mechekel
Men skéti yezzi nejri wra bounouk
Mardhaw bounouk ken makléwi werth
Nemen bna3let bouk ki go3er kifek w tekel fel healthy
Khirek men khir baba
Wtrani tbadel wejhek w temchi
Jaloul jad ejarda ama jadi majadeseh 3liya
Sami li zayena smeh
Zorkot chamso toul dar aliya
9ayes eli warrineh
Kifesh temchi edenia athiya
Houwa zeda 3mal ki sabri w kif riadh berdo 3la wseya
W lé ywari sou2 loulidetkom
Ghir esou2 li tasma3 fih
Ismou 3imed w kalou 3am w echar mzaghlel fi 3inih
Manish nessi kol secounda menhar li t9abelna fih
Lahtha mak takhdem general hay la79i9a
W takhrali fih
Manranabesh kifkom rassi
W man3ishseh beklém enes
Okhti mleyka tasma3 fikom kebret 9atli malla nés
Khouya li ltawa yra fikom 9ali ghriba mayaswésh
W omi 9atli khsaret 3eshra ken moush bouk mankhalihesh
Nounznou dhhab mizén l3alem
Touznou tranet zdid lomma
W law ken fama kelma t3aber ghir kléb
Rahi ghomma
W kén majésh bakhaw bin 3ini
Wrahmet baba fardh w sonna
Mé nkatef rouhi besyoufa w nozdom lel mancher ba7souna
3andi omi okhti w khouya touselhom kelma nwafik
3andi wseya snin 3al 3ata9
Kif tmout 3omri manjik
Khoudh edar ki la7yout fél
Matanséch la3mor toufén
W yedkom famillia w jirén
Bbibén wel féla7 blél
SHIT`,
  },
];

const LyricsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.titleAr.includes(searchQuery) ||
      song.lyrics.includes(searchQuery)
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="lyrics" className="py-20 md:py-32 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 ltr-text">
          Lyrics
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search lyrics... / ابحث في الكلمات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border rounded-full py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Lyrics Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredSongs.map((song) => (
            <div
              key={song.id}
              className="bg-card rounded-xl border border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              <button
                onClick={() => toggleExpand(song.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div>
                  <h3 className="font-heading font-bold text-lg">
                    {song.title}
                  </h3>
                  <p className="rtl-text text-muted-foreground text-sm">
                    {song.titleAr}
                  </p>
                </div>
                {expandedId === song.id ? (
                  <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                )}
              </button>

              {expandedId === song.id && (
                <div className="px-5 pb-5 border-t border-border/50">
                  <pre className="rtl-text font-arabic text-foreground/90 whitespace-pre-wrap leading-relaxed pt-5">
                    {song.lyrics}
                  </pre>
                </div>
              )}
            </div>
          ))}

          {filteredSongs.length === 0 && (
            <p className="text-center text-muted-foreground py-8 rtl-text">
              لم يتم العثور على نتائج
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default LyricsSection;
