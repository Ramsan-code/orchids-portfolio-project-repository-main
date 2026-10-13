import { linearTiming, springTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { Fragment } from "react";
import { projects } from "../../src/data/portfolio";
import { Blank, Intro, Outro, ProjectScene, Proof, Stack } from "./scenes";

// Scene lengths in frames (30 fps).
const D = { intro: 90, stack: 105, project: 75, proof: 80, outro: 95, blank: 12 };
const T = { scene: 15, project: 12, loop: 10 };
const sceneTiming = springTiming({ config: { damping: 200 }, durationInFrames: T.scene });

export const SHOWREEL_DURATION =
  D.intro + D.stack + projects.length * D.project + D.proof + D.outro + D.blank
  - (T.scene * 4 + T.project * (projects.length - 1) + T.loop);

export function Showreel() {
  return <TransitionSeries>
    <TransitionSeries.Sequence durationInFrames={D.intro}><Intro /></TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={wipe({ direction: "from-bottom" })} timing={sceneTiming} />
    <TransitionSeries.Sequence durationInFrames={D.stack}><Stack /></TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={sceneTiming} />
    {projects.map((project, i) => <Fragment key={project.slug}>
      {i > 0 && <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: T.project })} />}
      <TransitionSeries.Sequence durationInFrames={D.project}><ProjectScene project={project} index={i} total={projects.length} /></TransitionSeries.Sequence>
    </Fragment>)}
    <TransitionSeries.Transition presentation={wipe({ direction: "from-left" })} timing={sceneTiming} />
    <TransitionSeries.Sequence durationInFrames={D.proof}><Proof /></TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={wipe({ direction: "from-bottom" })} timing={sceneTiming} />
    <TransitionSeries.Sequence durationInFrames={D.outro}><Outro /></TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T.loop })} />
    <TransitionSeries.Sequence durationInFrames={D.blank}><Blank /></TransitionSeries.Sequence>
  </TransitionSeries>;
}
