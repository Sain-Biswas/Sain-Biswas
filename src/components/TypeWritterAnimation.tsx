"use client";

import React from "react";
import Typed from "typed.js";

interface TypeWritterAnimationProps {
  strings: string[];
  className: string;
}

export default function TypeWritterAnimation({
  strings,
  className,
}: TypeWritterAnimationProps) {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 30,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={className}>
      <span ref={el} />
    </div>
  );
}
