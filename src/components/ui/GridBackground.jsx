import React from 'react';

const GridBackground = () => (
  <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: 'linear-gradient(to right, #d4ff00 1px, transparent 1px), linear-gradient(to bottom, #d4ff00 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
  </div>
);

export default GridBackground;
