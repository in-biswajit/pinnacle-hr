export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md border-2 border-brand-coral px-2 text-brand-coral">
      {children}
    </span>
  );
}
