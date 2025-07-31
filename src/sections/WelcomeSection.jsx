import React from 'react';
import { Gift, Heart } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <div className="text-center space-y-8 animate-fade-in">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-200">
        <div className="mb-6">
          <Gift className="w-16 h-16 text-rose-400 mx-auto mb-4 animate-bounce" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4 font-serif">
          You're the Most Special Person in My World
        </h2>
        <p className="text-lg text-amber-700 leading-relaxed mb-6">
          Today is <span className='font-bold'>National Girlfriend's Day</span>, but honestly, every day with you feels like a celebration. 
          I created this little space on the internet just for you, bubby, filled with all the love I have in my heart.
        </p>
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-rose-200 to-pink-200 rounded-full p-4">
            <Heart className="w-8 h-8 text-rose-600 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection