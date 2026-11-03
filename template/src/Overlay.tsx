import React from 'react';
import {
  AbsoluteFill,
  OffthreadVideo,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {CaptionBox, Disclosure, captionFont} from './Caption';

export type CaptionItem = {from: number; to: number; text: string; emphasis?: boolean};

export type OverlayProps = {
  clip: string; // file name inside public/
  durationSec: number;
  disclosure: string;
  items: CaptionItem[];
  placeholder?: boolean;
  clipOffsetY?: number; // pushes a landscape recording down, clear of the caption box
};

const Timed: React.FC<{item: CaptionItem}> = ({item}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  if (t < item.from || t >= item.to) return null;
  const local = t - item.from;
  const opacity = interpolate(local, [0, 0.25], [0, 1], {extrapolateRight: 'clamp'});
  const translateY = interpolate(local, [0, 0.25], [24, 0], {extrapolateRight: 'clamp'});
  return <CaptionBox text={item.text} emphasis={item.emphasis} opacity={opacity} translateY={translateY} />;
};

export const Overlay: React.FC<OverlayProps> = ({clip, disclosure, items, placeholder, clipOffsetY = 0}) => (
  <AbsoluteFill style={{background: '#0c0e14'}}>
    {/* Blurred fill behind, so non-9:16 recordings still cover the frame */}
    <AbsoluteFill style={{filter: 'blur(40px) brightness(0.5)', transform: 'scale(1.15)'}}>
      <OffthreadVideo src={staticFile(clip)} muted style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    </AbsoluteFill>
    <AbsoluteFill style={{transform: `translateY(${clipOffsetY}px)`}}>
      {/* Muted: text-only format, music is added at publish time */}
      <OffthreadVideo src={staticFile(clip)} muted style={{width: '100%', height: '100%', objectFit: 'contain'}} />
    </AbsoluteFill>
    {/* Captions sit in the upper third, clear of TikTok/Reels UI at the bottom and right */}
    <AbsoluteFill style={{alignItems: 'center', paddingTop: 300}}>
      {items.map((it, i) => (
        <Timed key={i} item={it} />
      ))}
    </AbsoluteFill>
    <Disclosure text={disclosure} />
    {placeholder ? (
      <div
        style={{
          position: 'absolute',
          bottom: 520,
          width: '100%',
          textAlign: 'center',
          fontFamily: captionFont,
          fontWeight: 800,
          fontSize: 44,
          color: '#ffd400',
          textShadow: '0 2px 8px rgba(0,0,0,0.8)',
        }}
      >
        PLACEHOLDER — no es la app real
      </div>
    ) : null}
  </AbsoluteFill>
);

export const CaptionStill: React.FC<{text: string; emphasis?: boolean}> = ({text, emphasis}) => (
  <AbsoluteFill style={{alignItems: 'center', paddingTop: 300}}>
    <CaptionBox text={text} emphasis={emphasis} />
  </AbsoluteFill>
);
