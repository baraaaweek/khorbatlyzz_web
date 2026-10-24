import type { SVGProps } from "react";
import { cn } from "@/utils/cn";

export type IconName = keyof typeof PATHS;

const PATHS = {
  home: <path d="M3 9.75 12 3l9 6.75V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />,
  book: (
    <>
      <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
      <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
    </>
  ),
  pill: (
    <>
      <path d="M10.4 3.6 3.6 10.4a4.95 4.95 0 1 0 7 7l6.8-6.8a4.95 4.95 0 0 0-7-7z" />
      <path d="M7.5 7.5 16.5 16.5" />
    </>
  ),
  utensils: (
    <>
      <path d="M7 3v7a2 2 0 0 0 4 0V3" />
      <path d="M9 12v9" />
      <path d="M17.5 3c-1.8 1.2-2.5 3.4-2.5 5.5s.7 3.4 2.5 4.5v8" />
    </>
  ),
  whatsapp: (
    <path
      d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.84 9.84 0 0 0 4.68 1.19h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.02-5.1-2.88-6.96A9.78 9.78 0 0 0 12.04 2Zm0 1.8c2.15 0 4.17.84 5.69 2.36a7.99 7.99 0 0 1 2.36 5.69c0 4.44-3.61 8.04-8.05 8.04a8.1 8.1 0 0 1-4.1-1.12l-.29-.17-3.05.8.82-2.98-.19-.3a8.02 8.02 0 0 1-1.23-4.27c0-4.44 3.61-8.05 8.04-8.05Zm-3.7 4.1c-.18 0-.47.07-.72.34-.24.27-.93.9-.93 2.2s.95 2.56 1.08 2.73c.14.18 1.86 2.98 4.55 4.06 2.24.9 2.7.72 3.19.67.48-.04 1.56-.63 1.78-1.25.22-.61.22-1.14.16-1.25-.07-.11-.25-.18-.52-.31-.27-.14-1.56-.77-1.8-.86-.25-.09-.43-.13-.61.14-.18.27-.7.9-.86 1.08-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.6-1.47-.83-2-.19-.45-.39-.4-.54-.4l-.49-.01Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 21h16" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  star: (
    <path
      d="m12 2.6 2.9 6.06 6.6.87-4.83 4.6 1.2 6.57L12 17.6l-5.87 3.1 1.2-6.57L2.5 9.53l6.6-.87z"
      fill="currentColor"
      stroke="none"
    />
  ),
  quote: (
    <path
      d="M9.6 5.5H6.2A3.2 3.2 0 0 0 3 8.7v3.1a3.2 3.2 0 0 0 3.2 3.2h1.4v.6a3 3 0 0 1-3 3v1.9a4.9 4.9 0 0 0 4.9-4.9V5.5zm10.4 0h-3.4a3.2 3.2 0 0 0-3.2 3.2v3.1a3.2 3.2 0 0 0 3.2 3.2h1.4v.6a3 3 0 0 1-3 3v1.9a4.9 4.9 0 0 0 4.9-4.9V5.5z"
      fill="currentColor"
      stroke="none"
    />
  ),
  mail: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  menu: (
    <>
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6z" />,
  shield: <path d="M12 3 4 6v6c0 4.6 3.3 7.9 8 9 4.7-1.1 8-4.4 8-9V6z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V11" />
      <path d="M10 20V4" />
      <path d="M16 20v-6" />
      <path d="M22 20H2" />
    </>
  ),
  heart: (
    <path d="M12 20.3s-7.4-4.5-7.4-9.6A4 4 0 0 1 12 8.4a4 4 0 0 1 7.4 2.3c0 5.1-7.4 9.6-7.4 9.6z" />
  ),
  leaf: (
    <>
      <path d="M4 20c0-9.4 6.2-14.4 16-14.4 0 10.4-5.4 15.4-13.4 15.4" />
      <path d="M4 20c3-4.2 6.2-6.4 10.4-7.6" />
    </>
  ),
  ruler: (
    <>
      <rect x="2" y="8" width="20" height="8" rx="1.5" />
      <path d="M6 8v3M10 8v3M14 8v3M18 8v3" />
    </>
  ),
  dumbbell: (
    <>
      <path d="M6.5 6.5v11" />
      <path d="M3.5 9v5" />
      <path d="M17.5 6.5v11" />
      <path d="M20.5 9v5" />
      <path d="M6.5 12h11" />
    </>
  ),
  crown: (
    <>
      <path d="M3 19h18" />
      <path d="m4 17-1.5-9.5 5.2 3.8L12 4l4.3 7.3 5.2-3.8L20 17z" />
    </>
  ),
  fire: (
    <path d="M12 2.5s4.2 3.7 4.2 7.3a4.2 4.2 0 0 1-8.4 0c0-1.5.8-2.7.8-2.7S5.7 9 5.7 12.8a6.3 6.3 0 0 0 12.6 0c0-5.3-6.3-10.3-6.3-10.3z" />
  ),
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  sparkle: (
    <path d="M12 3l1.9 5.3L19 10l-5.1 1.7L12 17l-1.9-5.3L5 10l5.1-1.7z" />
  ),
  mailOpen: (
    <>
      <path d="M3 9.5 12 4l9 5.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="m3 10 9 6 9-6" />
    </>
  ),
  truck: (
    <>
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h4l3 3v3h-7z" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
} as const;

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 20, className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
