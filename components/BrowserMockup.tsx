interface BrowserMockupProps {
  url?: string;
  title?: string;
  className?: string;
}

export default function BrowserMockup({
  url = 'localhost:3000',
  title = 'Project Preview',
  className = '',
}: BrowserMockupProps) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl border border-white/10 ${className}`}>
      {/* Browser chrome / title bar */}
      <div className="bg-[#1C1C1C] px-4 py-3 flex items-center gap-3">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Address bar */}
        <div className="flex-1 mx-2">
          <div className="bg-[#2A2A2A] rounded-md px-3 py-1 flex items-center gap-2">
            {/* Lock icon - pure CSS */}
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="1" y="5" width="8" height="7" rx="1" fill="#6B7280" />
              <path
                d="M3 5V3.5a2 2 0 0 1 4 0V5"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xs text-[#6B7280] truncate font-mono">{url}</span>
          </div>
        </div>
      </div>

      {/* Browser content area */}
      <div className="bg-[#141414] aspect-video relative overflow-hidden">
        {/* Simulated page content - abstract UI skeleton */}
        <div className="absolute inset-0 p-5 flex flex-col gap-3">
          {/* Nav bar skeleton */}
          <div className="flex items-center justify-between mb-2">
            <div className="h-3 w-20 rounded bg-white/10" />
            <div className="flex gap-3">
              <div className="h-2 w-10 rounded bg-white/10" />
              <div className="h-2 w-10 rounded bg-white/10" />
              <div className="h-2 w-10 rounded bg-white/10" />
              <div className="h-5 w-16 rounded bg-white/20" />
            </div>
          </div>

          {/* Hero text skeleton */}
          <div className="flex-1 flex flex-col justify-center gap-3 px-4">
            <div className="h-4 w-3/4 rounded bg-white/15" />
            <div className="h-4 w-1/2 rounded bg-white/15" />
            <div className="h-3 w-2/3 rounded bg-white/8 mt-1" />
            <div className="h-3 w-1/2 rounded bg-white/8" />
            <div className="flex gap-3 mt-3">
              <div className="h-7 w-24 rounded-lg bg-white/20" />
              <div className="h-7 w-24 rounded-lg bg-white/10 border border-white/10" />
            </div>
          </div>

          {/* Project cards skeleton row */}
          <div className="flex gap-3 mt-auto">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 bg-white/5 rounded-lg p-3 border border-white/5">
                <div className="h-2 w-1/2 rounded bg-white/10 mb-2" />
                <div className="h-3 w-3/4 rounded bg-white/15 mb-1" />
                <div className="h-2 w-full rounded bg-white/8" />
              </div>
            ))}
          </div>
        </div>

        {/* Subtle gradient overlay at bottom */}
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#141414]/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
