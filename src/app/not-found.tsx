import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-8 text-center bg-cream">
      <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
        404 Error
      </div>
      <h1 className="mb-6 font-serif text-[3rem] font-black text-earth md:text-[4rem]">
        Page not found
      </h1>
      <p className="mb-10 max-w-[500px] text-[1.1rem] leading-relaxed text-earth-mid">
        The page you are looking for doesn't exist or has been moved. 
        Please return to our homepage or explore our work.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button 
          render={<Link href="/" />}
          nativeButton={false}
          className="rounded-sm bg-terra px-8 py-6 text-[0.9rem] uppercase tracking-wider hover:bg-terra-light"
        >
          Back to Home
        </Button>
        <Button 
          variant="outline" 
          render={<Link href="/what-we-do" />}
          nativeButton={false}
          className="rounded-sm border-earth/20 bg-transparent px-8 py-6 text-[0.9rem] uppercase tracking-wider text-earth hover:border-earth"
        >
          Our Programs
        </Button>
      </div>
    </main>
  );
}
