import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Axel Lorén</span>
            </h1>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Made with: </p>
        <p>Next.js, React.js, Material.ui</p>
      </footer>
    </div>
  );
}
