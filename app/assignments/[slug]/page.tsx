import Link from 'next/link';
import { notFound } from 'next/navigation';
import ImageGallery from '@/components/ImageGallery';
import { assignments } from '@/data/assignments';

export default async function AssignmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const assignment = assignments.find((item) => item.slug === slug);

  if (!assignment) {
    notFound();
  }


  return (
    <main className="detail-page">
      <div className="container detail-shell">
        <div className="detail-header">
          <Link href="/#assignments" className="detail-kicker">
            ← BACK TO ASSIGNMENTS
          </Link>
          <div className="detail-kicker detail-kicker--space">{assignment.id} / ASSIGNMENT</div>
          <h1>{assignment.title}</h1>
          <p className="detail-intro">
             {assignment.date} · 
            <br />
          </p>
        </div>

        <div className="detail-grid">
          <section className="detail-block">
            <h2>Overview</h2>
            <p>{assignment.description}</p>
          </section>
        </div>

        <section className="detail-section">
          <h2>Images</h2>
          <ImageGallery images={assignment.images} />
        </section>

        <section className="detail-section compact">
          <h2>Learning Outcome</h2>
          <p>{assignment.learningOutcome}</p>
        </section>
        
      </div>
    </main>
  );
}

