import React from "react";
import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import BubbyPicture1 from '/bubby-pic-1.jpg';
import BubbyPicture2 from '/bubby-pic-2.jpg';
import BubbyPicture3 from "/bubby-pic-3.jpg";
import BubbyPicture4 from '/bubby-pic-4.jpg';
import BubbyPicture5 from '/bubby-pic-5.jpg';
import BubbyPicture6 from '/bubby-pic-6.jpg';
 
const GallerySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      id: 1,
      src: BubbyPicture2,
      title: "Your Radiant Smile",
      description:
        "You know this photo pero like i always say and feel about this, its a completely example of how I love your smile. Ang ganda mo sobra, my love, like 3x e na maganda ka na tapos sobra pa pag nakasmile and it melts me inside. Your smile gives me warmth and ang gaan sa pakiramdam talaga na to the point matik smile rin ako kasi i won't never trade or change that smile sa kung anoman sa world na to kasi that's enough for me to treasure and maging inspiration ko sa araw-araw.",
    },
    {
      id: 2,
      src: BubbyPicture1,
      title: "Natural Beauty",
      description:
        "You look absolutely stunning in this photo. Your natural beauty shines through, and I love how genuine and carefree you look here. Yes, you look so good and pretty when you have make-up but honestly, this kind picture of yours talaga ako naiinlove even more kasi i love your natural you also. Like, its even more genuine and real you kasi maganda ka na on what you are. I understand naman why you love make up and it's a way para mas ipakita sarili mo at maging proud sa self mo and I appreciate your beauty as always.",
    },
    {
      id: 3,
      src: BubbyPicture3,
      title: "That Cutie I Only Adore",
      description:
        "Ganyang kacute lang gusto kong mahalin and mamahalin for the rest of my life, kaya minsan napapaisip ako if ano ba ginawa ko sa past life pero ang importante is nandyan ka na. Grabe lagi akong kuha sa pagkaganda at cute mo bubby and i am grateful kasi your cuteness and smile ay isa sa mga rason ko para magpatuloy and motivation ko para sa mga bagay na makakahelp satin. That's mine, all mine hehe and di ko na yan papakawalan love youuuuu!",
    },
    {
      id: 4,
      src: BubbyPicture4,
      title: "Your Thoughtful Moment",
      description:
        "Candid photo mo and that time is happy ako na kasama kita kasi date day tapos we're simple buying lang ng pang-gift kay mama but i feel namimili na parang namimili tayo for us kasi we talked about din ano mga gusto mo or ano wallet na bagay diba and it was special kaya i want us to have that kind of bonding again and again lalo na sa future natin. I appreciate this din kasi nageffort ikaw bilhan si mama ng gift and its her first time sa bday niya kaya happy din ako that time",
    },
    {
      id: 5,
      src: BubbyPicture5,
      title: "Simply Perfect",
      description:
        "This photo is perfect because it shows the real you - beautiful, confident, and absolutely amazing. You're perfect just the way you are. Wala na me ibang masasabi kundi ang ganda mo and lagi me panalo kasi nasa iyo na lahat. Nasa sayo na ung pinakamagandang smile, yung ganda na naiiba, yung confidence, strong, empowered, bold, and lovely. Kulang yung words pero everytime na nakikita ko ikaw, wag mo na tanungin bakit ako nakangiti kasi you're the only one reason why I always smile happily & genuinely",
    },
    {
      id: 6,
      src: BubbyPicture6,
      title: "Your Sweet Expression",
      description:
        "Actually, nakita ko to ulit sa gallery ko and i remembered this is our first lugaw date after mo magpa-nails tapos naka uniform pa me kasi galing school. That's one of many moments na tini-treasure ko and memories na talagang i wont forget at gusto kong ulit-ulitin at kasama ka. It's simple and gentle but the experience and the moments we shared, that means so much to me and yung memories na we can keep until sa next ganyan ulit natin na para bang first time nangyari (i remembered pa yung panis na lumpiang toge & your masarap na timpla sa tokwat baboy)",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-amber-800 mb-8 font-serif">
        A Gallery of Your Beautiful Moments
      </h2>
      <p className="text-center text-amber-700 mb-8 max-w-2xl mx-auto">
        Every photo of you tells a story, and each one reminds me why I fall in
        love with you more every day. Here are some of my favorite captures of
        your beautiful soul.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="group cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-4 shadow-lg border border-rose-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-4 h-4 text-rose-500" />
                    <span className="text-sm font-medium text-amber-800">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-amber-800 text-lg font-serif">
                  {photo.title}
                </h3>
                <p className="text-amber-700 text-sm line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl border border-rose-200">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-rose-500 animate-pulse" />
                  <h3 className="text-2xl font-bold text-amber-800 font-serif">
                    {selectedPhoto.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="text-amber-600 hover:text-amber-800 transition-colors p-2 hover:bg-rose-100 rounded-full cursor-pointer"
                  title = "Close"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-80 object-contain"
                />
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6">
                <p className="text-amber-700 leading-relaxed font-medium text-lg">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="flex items-center gap-2 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full px-6 py-3">
                  <Sparkles className="w-5 h-5 text-rose-600" />
                  <span className="text-rose-700 font-semibold">
                    You're absolutely beautiful
                  </span>
                  <Sparkles className="w-5 h-5 text-rose-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
