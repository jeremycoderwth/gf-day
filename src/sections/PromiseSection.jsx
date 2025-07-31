import React from "react";
import { Heart, Star } from "lucide-react";

const PromiseSection = () => {
  return (
    <div className="text-center space-y-8">
      <h2 className="text-2xl font-bold text-amber-800 mb-8 font-serif">
        My Promise to You
      </h2>
      <div className="bg-gradient-to-br from-white/80 to-rose-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-rose-200">
        <div className="mb-6">
          <div className="bg-gradient-to-br from-rose-200 to-pink-200 rounded-full p-6 inline-block">
            <Heart className="w-12 h-12 text-rose-600 animate-pulse fill-rose-600" />
          </div>
        </div>
        <div className="text-amber-700 font-serif leading-relaxed space-y-4 text-lg">
          <p>
            I promise to love you of all my heart and in every part of our life. I will be your rock and no.1 
            supporter in your goals and dreams. I will always make sure to make you happy and smile. 
          </p>
          <p>
            I promise to be your bff always and kachikahan lagi kahit na may deperensya ako hehe 
            but di ako mawawala and I won't never change lalo na ang love ko. I promise na lagi 
            me sa tabi mo if you need me and lagi ko ikaw tutulungan on your challenges or problems in life.
          </p>
          <p className="font-bold text-rose-700">
            Most importantly, I promise that no matter how far apart we may be,
            you will always have my love, my whole heart. ❤️
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 text-yellow-400 animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromiseSection;
