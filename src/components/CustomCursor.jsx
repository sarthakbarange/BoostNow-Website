import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    // Dynamically load the TubesCursor library from CDN
    const initCursor = async () => {
      try {
        // Check if already loaded
        if (window.TubesCursor) {
          initTubesCursor();
          return;
        }

        // Load the script dynamically
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js';
          script.onload = () => {
            initTubesCursor();
            resolve();
          };
          script.onerror = () => reject(new Error('Failed to load TubesCursor'));
          document.head.appendChild(script);
        });
      } catch (error) {
        console.error('Error loading TubesCursor:', error);
      }
    };

    const initTubesCursor = () => {
      try {
        const TubesCursor = window.TubesCursor;
        
        appRef.current = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#f967fb", "#53bc28", "#6958d5"],
            lights: {
              intensity: 200,
              colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
            }
          }
        });

        const handleClick = () => {
          const colors = randomColors(3);
          const lightsColors = randomColors(4);
          appRef.current.tubes.setColors(colors);
          appRef.current.tubes.setLightsColors(lightsColors);
        };

        document.body.addEventListener('click', handleClick);

        // Cleanup function
        return () => {
          document.body.removeEventListener('click', handleClick);
          if (appRef.current && appRef.current.destroy) {
            appRef.current.destroy();
          }
        };
      } catch (error) {
        console.error('Error loading TubesCursor:', error);
      }
    };

    // Initialize cursor
    initCursor();

    // Handle window resize
    const handleResize = () => {
      if (appRef.current && canvasRef.current) {
        appRef.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (appRef.current && appRef.current.destroy) {
        appRef.current.destroy();
      }
    };
  }, []);

  const randomColors = (count) => {
    return new Array(count)
      .fill(0)
      .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
  };

  // Add these styles to ensure the cursor is always visible and follows the mouse
  const canvasStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 9999,
    opacity: 1,
    transition: 'opacity 0.3s ease',
  };

  // Hide the default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={canvasStyle}
    />
  );
};

export default CustomCursor;
