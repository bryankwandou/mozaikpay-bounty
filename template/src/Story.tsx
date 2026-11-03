import React from 'react';
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {Disclosure, captionFont} from './Caption';

const ORANGE = '#f05a0a';
const FPS = 30;

const Rise: React.FC<{delay?: number; children: React.ReactNode; style?: React.CSSProperties}> = ({
  delay = 0,
  children,
  style,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = spring({frame: frame - delay, fps, config: {damping: 16, stiffness: 120}});
  return (
    <div style={{opacity: p, transform: `translateY(${(1 - p) * 60}px)`, ...style}}>{children}</div>
  );
};

const Big: React.FC<{children: React.ReactNode; size?: number; color?: string}> = ({
  children,
  size = 92,
  color = '#fff',
}) => (
  <div style={{fontFamily: captionFont, fontWeight: 800, fontSize: size, lineHeight: 1.12, color, textWrap: 'balance'}}>
    {children}
  </div>
);

const Scene: React.FC<{dur: number; children: React.ReactNode}> = ({dur, children}) => {
  const frame = useCurrentFrame();
  const total = dur * FPS;
  const opacity = interpolate(frame, [0, 8, total - 8, total], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return <AbsoluteFill style={{opacity}}>{children}</AbsoluteFill>;
};

// Real, masked screenshot in a tablet frame. Highlight coordinates are fractions of the screenshot.
const Screen: React.FC<{
  src: string;
  dur: number;
  focus: [number, number];
  zoom: [number, number];
  highlight?: {x: number; y: number; w: number; h: number};
  top?: number;
}> = ({src, dur, focus, zoom, highlight, top = 760}) => {
  const frame = useCurrentFrame();
  const z = interpolate(frame, [0, dur * FPS], zoom, {extrapolateRight: 'clamp'});
  const pulse = 0.55 + 0.45 * Math.sin(frame / 7);
  return (
    <div
      style={{
        position: 'absolute',
        left: 40,
        top,
        width: 1000,
        height: 625,
        borderRadius: 34,
        overflow: 'hidden',
        border: '10px solid #2b2d34',
        boxShadow: '0 40px 90px rgba(0,0,0,0.6)',
        background: '#000',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `scale(${z})`,
          transformOrigin: `${focus[0] * 100}% ${focus[1] * 100}%`,
        }}
      >
        <Img src={staticFile(src)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        {highlight ? (
          <div
            style={{
              position: 'absolute',
              left: `${highlight.x * 100}%`,
              top: `${highlight.y * 100}%`,
              width: `${highlight.w * 100}%`,
              height: `${highlight.h * 100}%`,
              borderRadius: 12,
              border: `5px solid rgba(255,255,255,${pulse})`,
              boxShadow: `0 0 34px rgba(240,90,10,${pulse})`,
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

const TextBlock: React.FC<{children: React.ReactNode; top?: number}> = ({children, top = 230}) => (
  <div style={{position: 'absolute', left: 70, right: 70, top}}>{children}</div>
);

const Check: React.FC<{delay: number; text: string}> = ({delay, text}) => (
  <Rise delay={delay} style={{display: 'flex', alignItems: 'center', gap: 34, marginBottom: 54}}>
    <svg width="74" height="74" viewBox="0 0 74 74">
      <rect width="74" height="74" rx="18" fill={ORANGE} />
      <path d="M20 38 L32 50 L55 25" stroke="#fff" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <Big size={76}>{text}</Big>
  </Rise>
);

const T = 'shots/T.png';
const U = 'shots/U.png';

export const Story: React.FC = () => (
  <AbsoluteFill style={{background: 'linear-gradient(170deg, #17120f 0%, #0b0c10 55%, #0b0c10 100%)'}}>
    <Sequence from={0} durationInFrames={Math.round(5.0 * FPS)}>
      <Scene dur={5}>
        <TextBlock top={360}>
          <Rise><Big size={78}>Trabajo con freelancers en</Big></Rise>
          <Rise delay={12}><Big size={150} color={ORANGE}>Santiago</Big></Rise>
          <Rise delay={22}><Big size={150} color={ORANGE}>y Bogotá</Big></Rise>
          <Rise delay={70} style={{marginTop: 70}}><Big size={68}>Cada semana hay facturas que pagar.</Big></Rise>
        </TextBlock>
      </Scene>
    </Sequence>

    <Sequence from={Math.round(5.0 * FPS)} durationInFrames={Math.round(5.6 * FPS)}>
      <Scene dur={5.6}>
        <TextBlock top={360}>
          <Rise><Big size={68}>Por transferencia internacional, el pago tardaba</Big></Rise>
          <Rise delay={30} style={{marginTop: 30}}><Big size={190} color={ORANGE}>3 a 5</Big></Rise>
          <Rise delay={38}><Big size={96}>días hábiles.</Big></Rise>
          <Rise delay={110} style={{marginTop: 70}}><Big size={92}>Me reclamaban.</Big></Rise>
        </TextBlock>
      </Scene>
    </Sequence>

    <Sequence from={Math.round(10.6 * FPS)} durationInFrames={Math.round(3.6 * FPS)}>
      <Scene dur={3.6}>
        <TextBlock>
          <Rise><Big size={70}>Mi cuenta:</Big></Rise>
          <Rise delay={8}><Big size={96} color={ORANGE}>@nayrbryangaming</Big></Rise>
        </TextBlock>
        <Screen src={U} dur={3.6} focus={[0.5, 0.2]} zoom={[1.5, 1.8]} top={620} />
      </Scene>
    </Sequence>

    <Sequence from={Math.round(14.2 * FPS)} durationInFrames={Math.round(4.6 * FPS)}>
      <Scene dur={4.6}>
        <TextBlock>
          <Rise><Big size={92}>Pongo el monto de la factura</Big></Rise>
        </TextBlock>
        <Screen
          src={T}
          dur={4.6}
          focus={[0.5, 0.3]}
          zoom={[1.15, 1.45]}
          highlight={{x: 0.44, y: 0.15, w: 0.12, h: 0.12}}
          top={620}
        />
      </Scene>
    </Sequence>

    <Sequence from={Math.round(18.8 * FPS)} durationInFrames={Math.round(4.6 * FPS)}>
      <Scene dur={4.6}>
        <TextBlock>
          <Rise><Big size={70}>No tiene la app, así que le genero</Big></Rise>
          <Rise delay={10}><Big size={104} color={ORANGE}>un enlace de pago</Big></Rise>
        </TextBlock>
        <Screen
          src={T}
          dur={4.6}
          focus={[0.25, 0.8]}
          zoom={[1.2, 1.6]}
          highlight={{x: 0.015, y: 0.765, w: 0.48, h: 0.075}}
          top={680}
        />
      </Scene>
    </Sequence>

    <Sequence from={Math.round(23.4 * FPS)} durationInFrames={Math.round(6.1 * FPS)}>
      <Scene dur={6.1}>
        <TextBlock top={480}>
          <Check delay={4} text="La nota de la factura" />
          <Check delay={40} text="Cuándo vence" />
          <Check delay={80} text="Confirmo" />
        </TextBlock>
      </Scene>
    </Sequence>

    <Sequence from={Math.round(29.5 * FPS)} durationInFrames={Math.round(5.5 * FPS)}>
      <Scene dur={5.5}>
        <TextBlock top={480}>
          <Rise><Big size={120} color={ORANGE}>Se lo mando por chat.</Big></Rise>
          <Rise delay={45} style={{marginTop: 70}}><Big size={84}>Instala la app y lo reclama.</Big></Rise>
        </TextBlock>
      </Scene>
    </Sequence>

    <Sequence from={Math.round(35 * FPS)} durationInFrames={Math.round(6 * FPS)}>
      <Scene dur={6}>
        <TextBlock>
          <Rise><Big size={72}>Si no lo reclama, la plata vuelve sola a mi billetera.</Big></Rise>
          <Rise delay={110} style={{marginTop: 34}}><Big size={84} color={ORANGE}>¿Preguntas? Te leo.</Big></Rise>
        </TextBlock>
        <Screen src={U} dur={6} focus={[0.5, 0.3]} zoom={[1, 1.1]} top={780} />
      </Scene>
    </Sequence>

    <Disclosure text="#publicidad" />
  </AbsoluteFill>
);
