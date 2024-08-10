export default function Badge({ children }: { children: React.ReactNode }) {
  return(
    <span className="py-1 px-2 bg-foreground/50 text-background font-medium text-sm uppercase">{children}</span>
  );
}