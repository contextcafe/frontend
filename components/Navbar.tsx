import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <a href="/" className="nav-logo" id="nav-logo">
        <span className="nav-logo-circle">
          <Image
            src="/logo.svg"
            alt="ContextCafe Logo"
            width={32}
            height={32}
            className="nav-logo-img"
            priority
          />
        </span>
        Context<span className="nav-logo-accent">Cafe</span>
      </a>
    </nav>
  );
}
