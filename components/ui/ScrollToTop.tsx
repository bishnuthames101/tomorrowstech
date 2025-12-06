'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
          style={{
            backgroundColor: '#1890ff',
            color: 'white',
            border: '2px solid #096dd9',
          }}
          aria-label="Scroll to top"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#096dd9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1890ff';
          }}
        >
          <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
        </button>
      )}
    </>
  );
}
