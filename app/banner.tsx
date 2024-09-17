"use client";

import { Element } from "react-scroll";
import { GlobeDemo } from "./globe-snippet";

export function Banner() {
  return (
    <div>
      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <GlobeDemo></GlobeDemo>
        </main>
      </Element>
    </div>
  );
}
