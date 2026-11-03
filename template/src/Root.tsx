import React from 'react';
import {Composition} from 'remotion';
import {CaptionStill, Overlay, OverlayProps} from './Overlay';
import {Story} from './Story';
import demo from '../captions/demo-placeholder.json';

const FPS = 30;

export const Root: React.FC = () => (
  <>
    <Composition
      id="Overlay"
      component={Overlay}
      fps={FPS}
      width={1080}
      height={1920}
      durationInFrames={Math.round(demo.durationSec * FPS)}
      defaultProps={demo as OverlayProps}
      calculateMetadata={({props}) => ({durationInFrames: Math.round(props.durationSec * FPS)})}
    />
    <Composition id="Story" component={Story} fps={FPS} width={1080} height={1920} durationInFrames={41 * FPS} />
    <Composition
      id="CaptionStill"
      component={CaptionStill}
      fps={FPS}
      width={1080}
      height={1920}
      durationInFrames={1}
      defaultProps={{text: 'Texto de ejemplo', emphasis: false}}
    />
  </>
);
