"use client";

import { ChildrenProps } from "@/types/common.types";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling(props: ChildrenProps) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.08, duration: 2, smoothTouch: true } as any}
    >
      {props.children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
