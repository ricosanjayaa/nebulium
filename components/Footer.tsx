import Link from "next/link";

export default function Footer() {
  return(
    <footer className="flex flex-col gap-12">
      <p className="text-md sm:text-xl"><span className="opacity-50">I am looking forward on your next project. </span><Link href="mailto:ricosanjayasan@gmail.com" className="underline underline-offset-2 opacity-50 hover:opacity-100">ricosanjayasan@gmail.com</Link></p>
      <p className="text-sm sm:text-base"><span className="opacity-50">@ {new Date().getFullYear()} </span><Link href="/" className="hover:underline underline-offset-2 opacity-50 hover:opacity-100">Rico Sanjaya</Link><span className="opacity-50">, all rights reserved.</span></p>
    </footer>
  );
}