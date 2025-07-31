import React from "react";
import { ArrowRight, Mail } from "lucide-react";

const LetterSection = ({letterVisible, setLetterVisible}) => {
  const letterContent = `My Dearest Lovelove,

    I am excited kasi tomorrow na 1st anniversary natin, OUR OFFICIAL ANNIVERSARY, and it makes me wonder na sa
    tagal natin is di natin namamalayan ang oras but papunta na tayo new chapter at year na magkasama.

    National GF day today and I know it's a special day sayo to and i dedicated this website rin for you, then bukas anniversary na and wala me ibang gusto and iniisip kundi makasama ikaw at maging memorable yung day na yon.

    Pasensya na about kagabi and sa nagawa ko, its my fault and i regret letting that happen and i'll work on that to protect your feelings and maipakita yung care ko sa'yo at willingness ko mag-adjust for you. 

    Thank you for being patient with me, for believing in us, and for making every ordinary moment feel extraordinary. You are not just my girlfriend; you are my best friend, my confidant, and my greatest blessing.
    Thank you for always providing for us and sa kindness mo sa'kin na walang katulad. 

    This letter serves everything and my endless love for you, wala me ibang gagawin kundi mahalin ka at magpatuloy everyday na kasama ka. I hope this month of August may be full of happiness and love also, mag-grow pa tayo and will become strong for new challenges for us if ever. Ikaw at ikaw pa rin.

    Happy National Girlfriend's Day, my so pretty baby. You deserve all the love in the world, and I'm so grateful I get to give you mine. I will treasure us and our love forerver, wherever I go.


    Forever yours,
    Bubba ❤️`;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-amber-800 mb-8 font-serif">
        A Letter Written Just for You
      </h2>
      <div className="text-center mb-6">
        <button
          onClick={() => setLetterVisible(!letterVisible)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <Mail className="w-5 h-5" />
          {letterVisible ? "Close Letter" : "Open My Heart"}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {letterVisible && (
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-rose-200">
          <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-8 font-serif">
            <div className="text-amber-800 leading-relaxed space-y-4">
              {letterContent.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-base text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LetterSection;
