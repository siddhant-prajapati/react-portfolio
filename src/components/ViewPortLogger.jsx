import React, { useEffect, useState } from 'react';

export default function ViewportLogger() {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const newSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      console.log('Viewport changed:', newSize);
      setViewport(newSize);
    };

    window.addEventListener('resize', handleResize);

    // Log the initial size
    console.log('Initial viewport:', viewport);

    // Clean up on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Current Viewport Size:</h3>
      <p>Width: {viewport.width}px</p>
      <p>Height: {viewport.height}px</p>
    </div>
  );
}
