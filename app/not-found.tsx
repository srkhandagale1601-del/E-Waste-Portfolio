import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="container not-found-wrap">
        <p className="section-label">404</p>
        <h1>CONTENT NOT FOUND</h1>
        <p>The page you are looking for does not exist or is unavailable.</p>
        <Link href="/" className="btn primary">
          BACK TO PORTFOLIO
        </Link>
      </div>
    </main>
  );
}
