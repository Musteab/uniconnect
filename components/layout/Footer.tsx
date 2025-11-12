export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="container-px max-w-7xl mx-auto py-8 text-sm text-dark/70 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Uni-Connect. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
            {/* Instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.25-.95a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9Z"/>
            </svg>
          </a>
          <a href="https://tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-accent transition-colors">
            {/* TikTok */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M14.5 3c.4 2.5 1.9 4.6 4.2 5.2.5.1 1 .2 1.6.2V11c-.9 0-1.9-.2-2.8-.6-.6-.3-1.1-.6-1.6-.9v6.1a5.8 5.8 0 1 1-5.9-5.8c.3 0 .6 0 .9.1v2.7a3.1 3.1 0 1 0 2.2 3V3h1.4Z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
