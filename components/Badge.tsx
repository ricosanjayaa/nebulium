export default function Badge({ children }: { children: React.ReactNode }) {
  return(
    <span className="py-1 px-2 bg-foreground/25 group-hover:bg-foreground/30 text-background font-medium text-xs sm:text-sm uppercase">{children}</span>
  );
}