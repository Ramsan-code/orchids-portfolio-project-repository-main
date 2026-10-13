import { Composition } from "remotion";
import { Intro } from "./scenes";
import { SHOWREEL_DURATION, Showreel } from "./Showreel";
import { FPS, HEIGHT, WIDTH } from "./theme";

export function Root() {
  return <>
    <Composition id="Showreel" component={Showreel} durationInFrames={SHOWREEL_DURATION} fps={FPS} width={WIDTH} height={HEIGHT} />
    {/* Poster image: the intro once the name and role have animated in. */}
    <Composition id="Poster" component={Intro} durationInFrames={90} fps={FPS} width={WIDTH} height={HEIGHT} />
  </>;
}
