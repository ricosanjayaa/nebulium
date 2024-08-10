export default function Section({ label, children }: { label: string, children: React.ReactNode }) {
  return(
    <section id={label} className="flex flex-col gap-2">
      <h1 className="uppercase text-sm font-medium opacity-50">{label}</h1>
      {children}
    </section>
  );
}