import { useId } from "react";

type Props = {
  size?: number;
};

export default function Logo({
  size = 26,
}: Props) {
  // 同じ画面にLogoが複数あっても、グラデーションのidが衝突しないようにする
  const gradientId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3567D6" />
          <stop offset="100%" stopColor="#2850AD" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="512" height="512" rx="112" fill={`url(#${gradientId})`} />

      <g stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="14" strokeLinecap="round">
        <line x1="160" y1="150" x2="256" y2="256" />
        <line x1="352" y1="150" x2="256" y2="256" />
        <line x1="150" y1="352" x2="256" y2="256" />
        <line x1="360" y1="356" x2="256" y2="256" />
      </g>

      <g fill="#FFFFFF">
        <circle cx="160" cy="150" r="34" />
        <circle cx="352" cy="150" r="34" />
        <circle cx="150" cy="352" r="34" />
        <circle cx="360" cy="356" r="34" />
      </g>

      <circle cx="256" cy="256" r="56" fill="#F6F5F2" />
    </svg>
  );
}
