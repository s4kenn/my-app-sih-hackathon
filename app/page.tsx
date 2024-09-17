"use-client";

import { BackgroundLinesDemo } from "./background-lines-snippet";
import { TypewriterEffectSmoothDemo } from "./type-writter-snippet";
import { CardHoverEffectDemo } from "./card-hover-effect-snippet";
import { CoverDemo } from "./sparkles-snippet";
import FAQS from "./faq";
import { FloatingNavDemo } from "./floating-navbar-snippet";
import { HeroScrollDemo } from "./container-scroll-animation-snippet";

export default function Home() {
  return (
    <div>
      <FloatingNavDemo></FloatingNavDemo>
      <BackgroundLinesDemo></BackgroundLinesDemo>
      <HeroScrollDemo></HeroScrollDemo>
      <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
      <CoverDemo></CoverDemo>
      <CardHoverEffectDemo></CardHoverEffectDemo>
      <FAQS></FAQS>
    </div>
  );
}
