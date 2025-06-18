import React from 'react';

const DownloadButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://drive.google.com/file/d/1XWmFV-4KVdS2N_v3X0i-lyJ0x2W2T9Iv/view?usp=sharing', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="group relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-px overflow-hidden shadow-2xl"
    >
      <span className="absolute inset-0 rounded-xl overflow-hidden">
        <span className="inset-0 absolute pointer-events-none select-none">
          <span
            className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129), rgb(5, 150, 105))'
            }}
          />
        </span>
      </span>

      <span className="inset-0 absolute pointer-events-none select-none animate-border-glow-translate">
        <span
          className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-xl animate-border-glow-scale"
          style={{
            background: 'linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129), rgb(5, 150, 105))'
          }}
        />
      </span>

      <span className="flex items-center justify-center gap-2 relative z-[1] bg-black/60 backdrop-blur-md rounded-xl py-2 px-4 w-full border border-white/5">
        <span className="relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg] duration-500">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-80"
          >
            <path
              d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
              stroke="url(#paint0_linear_download)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 10L12 15L17 10"
              stroke="url(#paint1_linear_download)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15V3"
              stroke="url(#paint2_linear_download)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_download"
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#22C55E" />
                <stop offset="0.5" stopColor="#10B981" />
                <stop offset="1" stopColor="#059669" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_download"
                x1="7"
                y1="12.5"
                x2="17"
                y2="12.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#22C55E" />
                <stop offset="0.5" stopColor="#10B981" />
                <stop offset="1" stopColor="#059669" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_download"
                x1="12"
                y1="3"
                x2="12"
                y2="15"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#22C55E" />
                <stop offset="0.5" stopColor="#10B981" />
                <stop offset="1" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>
          <span
            className="rounded-full size-11 absolute opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg animate-star-shine"
            style={{
              background: 'linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129), rgb(5, 150, 105))'
            }}
          />
        </span>
        <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-sm font-medium text-transparent group-hover:scale-105 transition transform-gpu">
          Free Download
        </span>
      </span>
    </button>
  );
};

export default DownloadButton; 