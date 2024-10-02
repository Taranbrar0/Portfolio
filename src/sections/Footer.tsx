import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none"></div>
      <div className="container">
        <div className="border-t border-white/50 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 z-10">
            <a
              href="https://www.instagram.com/taran_brar_/"
              className="inline-flex items-center gap-1.5 hover:underline"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Prevent security issues
            >
              <span className="font-semibold">Instagram</span>
              <ArrowUpRightIcon className="size-4" />
            </a>

            <a
              href="https://twitter.com/TaranBrar20" // 
              className="inline-flex items-center gap-1.5 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-semibold">Twitter</span>
              <ArrowUpRightIcon className="size-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/taran-brar/"
              className="inline-flex items-center gap-1.5 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-semibold">LinkedIn</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
