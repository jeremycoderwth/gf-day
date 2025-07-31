import React from "react";
import { Smile, Heart, Sparkles, Gift, AudioLines, Flower } from 'lucide-react';

const ReasonsSection = () => {
  const reasons = [
    {
      icon: Smile,
      text: "Your smile lights up my entire world",
      color: "text-yellow-500",
    },
    {
      icon: Heart,
      text: "You make me want to be a better person every day",
      color: "text-rose-500",
    },
    {
      icon: AudioLines,
      text: "Your laugh is my favorite sound in the universe",
      color: "text-purple-400",
    },
    {
      icon: Flower,
      text: "You're just like a flower, so pretty and always bloom each day",
      color: "text-green-500",
    },
    {
      icon: Gift,
      text: "Your kindness and compassion towards me are inspiring",
      color: "text-blue-400",
    },
    {
      icon: Sparkles,
      text: "You believe in me always even when I don't believe in myself",
      color: "text-orange-400",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-amber-800 mb-8 font-serif">
        Here's Why You're Absolutely Amazing
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-full p-3 flex-shrink-0">
                <reason.icon className={`w-6 h-6 ${reason.color}`} />
              </div>
              <p className="text-amber-700 leading-relaxed font-medium">
                {reason.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsSection;
