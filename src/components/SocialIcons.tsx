type IconProps = { size?: number; className?: string };

export function FacebookIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 21v-8.2h2.7l.4-3.2h-3.1V7.5c0-.9.3-1.6 1.6-1.6h1.7V3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4v3.2h2.7V21h3.4Z" />
    </svg>
  );
}

export function TwitterIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6.6c-.6.3-1.3.5-2 .6.7-.4 1.3-1.2 1.5-2-.7.4-1.5.7-2.3.9a3.6 3.6 0 0 0-6.2 3.3A10.2 10.2 0 0 1 3.6 5a3.6 3.6 0 0 0 1.1 4.9c-.6 0-1.1-.2-1.6-.4v.1c0 1.8 1.3 3.2 3 3.6-.5.1-1.1.2-1.6.1.4 1.4 1.8 2.5 3.4 2.5A7.2 7.2 0 0 1 2.9 17.4 10.2 10.2 0 0 0 8.4 19c6.6 0 10.3-5.6 10.3-10.4v-.5c.7-.5 1.3-1.1 1.8-1.8Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.9 8.6H3.3V20H6.9V8.6ZM5.1 4c-1.2 0-2 .8-2 1.9 0 1 .8 1.9 2 1.9s2-.8 2-1.9c0-1.1-.8-1.9-2-1.9ZM20.7 20h-3.6v-6.1c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20h-3.6s.1-10.5 0-11.4h3.6v1.6c.5-.7 1.3-1.8 3.2-1.8 2.3 0 4.1 1.5 4.1 4.8V20Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm0 5.9a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6Zm4.6-6a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0ZM20 8.1c-.1-1-.3-1.9-1-2.6-.7-.7-1.6-.9-2.6-1-1.1-.1-4.5-.1-5.6 0-1 .1-1.9.3-2.6 1-.7.7-.9 1.6-1 2.6-.1 1.1-.1 4.7 0 5.8.1 1 .3 1.9 1 2.6.7.7 1.6.9 2.6 1 1.1.1 4.5.1 5.6 0 1-.1 1.9-.3 2.6-1 .7-.7.9-1.6 1-2.6.1-1.1.1-4.7 0-5.8Zm-1.5 7c-.2.6-.6 1-1.1 1.2-.8.3-2.7.2-3.4.2s-2.7.1-3.4-.2c-.6-.2-1-.6-1.2-1.2-.3-.8-.2-2.7-.2-3.4s-.1-2.7.2-3.4c.2-.6.6-1 1.2-1.2.8-.3 2.7-.2 3.4-.2s2.7-.1 3.4.2c.6.2 1 .6 1.2 1.2.3.8.2 2.7.2 3.4s.1 2.7-.2 3.4Z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.6 7.6a2.8 2.8 0 0 0-2-2C17.9 5.2 12 5.2 12 5.2s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29.7 29.7 0 0 0 2 12a29.7 29.7 0 0 0 .4 4.4 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29.7 29.7 0 0 0 22 12a29.7 29.7 0 0 0-.4-4.4ZM10 15.2V8.8L15.7 12 10 15.2Z" />
    </svg>
  );
}
