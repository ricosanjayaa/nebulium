import Badge from "@/components/Badge";

import Link from "next/link";

export default function Project({ title, description, badges, id }: { title: string, description: string, badges: string[], id: string }) {
  return (
    // <Link href={`/projects/${id}`} className="py-4 cursor-pointer hover:!opacity-100 group-hover:opacity-50 flex flex-col gap-1 group">
    <Link href="/" className="cursor-pointer hover:!opacity-100 group-hover:opacity-50 flex flex-col gap-1 group">
      <div className="flex flex-col">
        <p className="text-md sm:text-lg font-medium group-hover:underline underline-offset-2">{title}</p>
        <p className="opacity-50 text-sm sm:text-base">{description}</p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}