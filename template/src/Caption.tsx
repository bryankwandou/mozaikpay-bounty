import React from 'react';

// Shared caption look: plain rounded rectangle, white text on dark glass.
// No pill shape, no status dot (house rule).
export const captionFont =
  '"Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif';

export const CaptionBox: React.FC<{
  text: string;
  emphasis?: boolean;
  opacity?: number;
  translateY?: number;
}> = ({text, emphasis, opacity = 1, translateY = 0}) => (
  <div
    style={{
      maxWidth: 900,
      padding: '28px 40px',
      borderRadius: 18,
      background: emphasis ? 'rgba(255,255,255,0.96)' : 'rgba(12,14,20,0.82)',
      color: emphasis ? '#0c0e14' : '#ffffff',
      fontFamily: captionFont,
      fontWeight: 700,
      fontSize: 58,
      lineHeight: 1.18,
      letterSpacing: -0.5,
      textAlign: 'center',
      textWrap: 'balance',
      boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
      opacity,
      transform: `translateY(${translateY}px)`,
    }}
  >
    {text}
  </div>
);

// Small fixed disclosure line, top-left, always visible.
export const Disclosure: React.FC<{text: string}> = ({text}) => (
  <div
    style={{
      position: 'absolute',
      top: 70,
      left: 60,
      fontFamily: captionFont,
      fontWeight: 600,
      fontSize: 34,
      color: '#ffffff',
      textShadow: '0 2px 8px rgba(0,0,0,0.6)',
    }}
  >
    {text}
  </div>
);
