export default function Journal({ title, shortDescription, creationDate }: { title: string, shortDescription: string, creationDate: string }) {
  return(
    <div className="p-4 cursor-pointer hover:bg-foreground/5 opacity-50 hover:opacity-100 flex flex-col">
      <p><span className="text-lg font-medium">{title}</span> — {shortDescription} </p>
      <p className="opacity-50">{creationDate}</p>
    </div>
  );
}