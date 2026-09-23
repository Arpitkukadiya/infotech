"use client";
import { TypeAnimation } from "react-type-animation";

export default function TypingTagline() {
  return (
    <TypeAnimation
      sequence={[
        "Smart Tech. Secure Future.",
        2000,
        "Your Trusted IT Partner.",
        2000,
        "CCTV & Gadget Experts.",
        2000,
        "Installation. Repair. Support.",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent"
    />
  );
}