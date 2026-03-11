import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const VideoPlayer = ({ isOpen, onClose, videoSrc }) => {
  const modalRef = useRef(null);
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Animation when opening
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        ".video-wrapper",
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, delay: 0.1, ease: "back.out(1.2)" }
      );
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      onClick={onClose}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-10 text-white/60 transition-all duration-300 hover:text-white hover:scale-110 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 hover:border-purple-500/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-purple-500/40 rounded-tl-lg"></div>
      <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-purple-500/40 rounded-tr-lg"></div>
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-purple-500/40 rounded-bl-lg"></div>
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-purple-500/40 rounded-br-lg"></div>

      {/* Video container */}
      <div
        className="relative w-full max-w-4xl mx-6 aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video wrapper */}
        <div className="video-wrapper relative w-full h-full rounded-xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3),0_0_100px_rgba(59,130,246,0.15)] border border-white/10 bg-black">
          {/* Scanlines overlay */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(0,0,0,0.05)_1px,rgba(0,0,0,0.05)_2px)] pointer-events-none z-10"></div>
          
          {/* Loading spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-purple-500/20 rounded-full"></div>
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-purple-500 rounded-full border-t-transparent animate-spin"></div>
              </div>
            </div>
          )}
          
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full object-contain"
            onLoadedData={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Now Playing label */}
        <div className="absolute -bottom-12 left-0 right-0 flex flex-col items-center gap-2">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <span className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase">
            Now Playing
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
