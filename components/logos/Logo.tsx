import type { SVGAttributes } from "react";

export type SunglassesLogoProps = SVGAttributes<SVGSVGElement>;

export default function Logo(props: SunglassesLogoProps) {
  return (
    <svg
      width="106"
      height="25"
      viewBox="0 0 106 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Left lens */}
      <ellipse
        cx="30"
        cy="13"
        rx="18"
        ry="10"
        fill="#222"
        stroke="#111"
        strokeWidth="2"
      />
      {/* Right lens */}
      <ellipse
        cx="76"
        cy="13"
        rx="18"
        ry="10"
        fill="#222"
        stroke="#111"
        strokeWidth="2"
      />
      {/* Bridge */}
      <rect
        x="48"
        y="10"
        width="10"
        height="6"
        rx="3"
        fill="#111"
      />
      {/* Left highlight */}
      <ellipse
        cx="24"
        cy="9"
        rx="4"
        ry="2"
        fill="#fff"
        fillOpacity="0.15"
      />
      {/* Right highlight */}
      <ellipse
        cx="70"
        cy="9"
        rx="4"
        ry="2"
        fill="#fff"
        fillOpacity="0.15"
      />
    </svg>
  );
}
