export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-start gap-[5px] ${className}`}>
      <svg className="h-8 w-auto md:h-[42px]" viewBox="0 0 39 43" fill="none" aria-hidden="true">
        <path
          d="M31.38 3.76C28.03 1.16 23.34-.66 17.32.23 9.51 1.37 6 4.64 4.25 8.16 3.36 9.95 2.9 11.85 2.62 13.66c-.1.67-.19 1.32-.27 1.95.17-.05.34-.08.52-.09.54-.03 1.07.12 1.51.29l.07.03v-2.07c0-.4.31-.73.71-.75l21.05-.94c.2-.01.4.07.55.21.15.14.23.34.23.55v3.5c3.35.23 5.37 2.01 6.62 3.76.57.79.98 1.58 1.29 2.2.04-.2.08-.42.12-.65.11-.58.23-1.22.37-1.82.23-.99.55-2.06 1.04-2.75.25-.35.62-.71 1.14-.81.2-.04.39-.04.57 0-.25-1.7-.52-3.28-.74-4.01-.67-2.23-2.7-5.63-6.08-8.25Z"
          fill="#351500"
        />
        <g stroke="#351500" strokeWidth="1.5">
          <circle cx="9.1" cy="26.2" r="2.6" />
          <circle cx="24.5" cy="26.5" r="2.5" />
        </g>
        <path
          d="M14.9 35.9c.56-.5 1.1-.63 1.9-.58l-.8 4.8c-.39-.15-.73-.37-1.07-.7-.6-.6-.87-1.24-.88-1.81 0-.56.23-1.16.85-1.71Zm2.57 4.5.81-4.9c1.28.14 2.65.14 3.8.05l.4 4.8c-1.28.22-2.48.25-4.1.12-.33-.03-.64-.05-.9-.07Zm6.5-.3-.4-4.7c1.24-.17 2.3-.26 3.07-.08.38.09.6.23.74.38.13.15.25.4.25.86 0 1.58-1 2.75-2.63 3.22-.37.1-.73.2-1.03.3Z"
          fill="#E1E1E1"
          stroke="#351500"
          strokeWidth="1.5"
        />
      </svg>
      <div className="relative font-display text-[22px] font-extrabold leading-[1.15] tracking-[-0.5px] text-ink md:text-[28px]">
        modalaiso
        <svg className="absolute left-0 top-[1.07em] h-auto w-[4.85em]" viewBox="0 0 136 8" fill="none" aria-hidden="true">
          <path d="M2 5c30-3 70-3.5 130-1.5" stroke="#351500" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}