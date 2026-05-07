// animations/fade.ts

import gsap from "gsap";

export const fade = (
  element: string | Element,
  delay = 0
) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power3.out",
    }
  );
};

export const fadeOut = (
  element: string | Element,
  delay = 0
) => {
  gsap.to(element, {
    opacity: 0,
    y: 20,
    duration: 0.5,
    delay,
    ease: "power3.in",
  });
};