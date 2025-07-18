import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="mx-auto flex h-16 items-center gap-5 px-10">
        <Button
          className="text-xl font-bold"
          variant="ghost" >
          <Link href="/">VC Framework</Link>
        </Button>
        {/* <div className="text-xl font-bold">VC Framework</div> */}
        <nav className="flex gap-4 text-sm">
          <Button variant="ghost">
            <Link href="/">홈</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/about">소개</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}