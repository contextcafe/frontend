import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div>
        <div className="footer-logo">
          <span className="footer-logo-circle">
            <Image src="/logo.svg" alt="ContextCafe" width={30} height={30} />
          </span>
          Context<span className="footer-logo-accent">Cafe</span>
        </div>
        <div className="footer-tagline">Legal Intelligence, Reimagined</div>
      </div>

      <div className="social-links">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jatinsangwan-webdev/"
          className="social-btn"
          title="LinkedIn"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          id="social-linkedin"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span className="social-label">LinkedIn</span>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/contextcafe_?igsh=dXJyODJ5ZXd0Zjcz"
          className="social-btn"
          title="Instagram"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          id="social-instagram"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          <span className="social-label">Instagram</span>
        </a>
      </div>

      <div className="footer-copy">
        © 2025 ContextCafe<br />
        All rights reserved
      </div>
    </footer>
  );
}
