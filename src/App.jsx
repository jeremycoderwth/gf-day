import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import WelcomeSection from './sections/WelcomeSection';
import ReasonsSection from './sections/ReasonsSection';
import MemoriesSection from './sections/MemoriesSection';
import GallerySection from './sections/GallerySection';
import LetterSection from './sections/LetterSection';
import PromiseSection from './sections/PromiseSection';

const GirlfriendDayWebsite = () => {
  const [currentSection, setCurrentSection] = useState('welcome');
  const [letterVisible, setLetterVisible] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [typewriterText, setTypewriterText] = useState('');
  const [showSparkles, setShowSparkles] = useState(false);

  const fullText = "Happy National Girlfriend's Day, My Love! 💕";

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setShowSparkles(true);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Floating hearts animation
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2
      };
      setFloatingHearts(prev => [...prev, newHeart]);
      
      setTimeout(() => {
        setFloatingHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, 6000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const sections = {
    welcome: {
      title: "Welcome to Your Special Day",
      component: <WelcomeSection />
    },
    reasons: {
      title: "Reasons Why You're Amazing",
      component: <ReasonsSection />
    },
    memories: {
      title: "Our Beautiful Memories",
      component: <MemoriesSection />
    },
    gallery: {
      title: "Your Beautiful Gallery",
      component: <GallerySection />
    },
    letter: {
      title: "A Letter From My Heart",
      component: <LetterSection letterVisible={letterVisible} setLetterVisible={setLetterVisible} />
    },
    promise: {
      title: "My Promise to You",
      component: <PromiseSection />
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50 relative overflow-hidden'>
      {floatingHearts.map(heart => (
        <div
          key={heart.id}
          className="fixed pointer-events-none z-10"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`
          }}
        >
          <Heart className="text-pink-300 w-4 h-4 animate-bounce opacity-70" 
                 style={{
                   animation: `float 6s ease-in-out infinite ${heart.delay}s`,
                   transform: 'translateY(100vh)'
                 }} />
        </div>
      ))}

      <header className="relative z-20 text-center py-8 px-4">
        <div className="inline-flex items-center gap-2 mb-4">
          {showSparkles && <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />}
          <h1 className="text-3xl md:text-4xl font-bold text-amber-800 font-serif">
            {typewriterText}
          </h1>
          {showSparkles && <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />}
        </div>
      </header>

      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-rose-200 mb-8">
        <div className="flex justify-center overflow-x-auto">
          <div className="flex gap-1 p-2">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setCurrentSection(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  currentSection === key
                    ? 'bg-rose-200 text-rose-800 shadow-sm'
                    : 'text-amber-700 hover:bg-rose-100 hover:text-rose-700'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pb-12 relative z-20">
        <div className="max-w-4xl mx-auto">
          {sections[currentSection].component}
        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
} 

export default GirlfriendDayWebsite;