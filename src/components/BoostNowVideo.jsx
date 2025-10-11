
import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import boostnowvid from "../assets/website/boostnowvid.mp4";

const BoostNowVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative flex items-center justify-center w-full py-20 overflow-hidden">
      {/* Rectangular container */}
      <div className="relative w-[90%] md:w-[75%] aspect-video bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,150,255,0.3)] border border-gray-800">
        <video
          ref={videoRef}
          src={boostnowvid}
          loop
          playsInline
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* Overlay gradient for visual smoothness */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>

        {/* Play/Pause button */}
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex items-center justify-center text-white z-20 transition-all duration-300 hover:scale-110"
        >
          {!isPlaying ? (
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20">
              <Play size={50} fill="#fff" />
            </div>
          ) : null}
        </button>

        {/* Bottom controls (mute/unmute) */}
        <div className="absolute bottom-4 right-4 z-30">
          <button
            onClick={toggleMute}
            className="text-white p-2 bg-black/50 rounded-full backdrop-blur-sm hover:bg-white/10 border border-white/10 transition-all"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoostNowVideo;
