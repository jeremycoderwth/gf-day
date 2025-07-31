import React from "react";
import { Heart } from 'lucide-react';

const MemoriesSection = () => {
  const memories = [
    "The first time na kumapit ka sa braso ko and sobrang kilig ko non tapos act cool lang kasi sa public, ramdam ko presence mo non sobra like its warm and the moment na naglalakad us",
    "The way you scrunch your nose even dati na pag nagpipicture tayo, yun una kong fave pose mo before dontidae and kiss. Isa pa, ang cute mo sobra and that's why lalo me naiinlove hehe (send pic baby pls)",
    "Yung nagluto tayo ng hotcake here sa house, honestly, i miss that and gusto ko ulit magcook tayo and sabay natin kakainin tapos watching movie",
    "Kinda weird pero diba insecure ko yung dede ko pero nung unang beses na hinawakan mo by trippings lang, di ako naano like nainsecure ganon HAHAHAH. Comfortable ako non kaya that's why lagi na me nakahubad sa call tapos normal nalang sakin na ipakita sayo, i mean pag inaano mo tapos tinatawanan ko nalang pag nagjojoke ka ron related HAHAHAHAHHA",
    "Kung pano mo ikwento sa ibang tao mga about sa'kin, like ano mga ayaw or gusto ko ganon or kaya naman mga achievements ko. Pati rin mga kaya ko or anong alam ko sa isang bagay, na parang you're proud na isali ako sa usapan tapos i feel involved pag ganon kasi naalala mo ko kahit na di naman ako kasali sa topic ganon HAHAAHAHA basta marami e pero in general it always happens",
    "Una mo kong sinabihan ng pogi, nagulat ka pa non as in real sabi mo e kasi diba nagsend ako pic w salamin tapos nagulat ka HAHAHAH parang di mo naprocess na nakita mo un pero kinilig me non and natuwa hehe kaya rin tumaas self-confidence ko until now and nabawasan pagka-insecure ko that time",
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-amber-800 mb-8 font-serif">
        Moments That Make My Heart Skip a Beat
      </h2>
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-200">
        <div className="space-y-4">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 transition-all duration-300"
            >
              <div className="bg-rose-200 rounded-full p-2 flex-shrink-0">
                <Heart className="w-4 h-4 text-rose-600" />
              </div>
              <p className="text-amber-700 font-medium">{memory}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoriesSection;
