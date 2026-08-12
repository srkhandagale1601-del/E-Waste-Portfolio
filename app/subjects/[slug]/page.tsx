import Link from 'next/link';
import { notFound } from 'next/navigation';
import { assignments } from '@/data/assignments';
import { subjects } from '@/data/subjects';

export default async function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const subject = subjects.find((item) => item.slug === slug);

  if (!subject) {
    notFound();
  }

  const relatedAssignments = assignments.filter((assignment) =>
    subject.relatedAssignments.includes(assignment.slug)
  );

  return (
    <main className="detail-page">
      <div className="container detail-shell">
        <div className="detail-header">
          <Link href="/#subjects" className="detail-kicker">
            ← BACK TO SUBJECTS
          </Link>
          <div className="detail-kicker detail-kicker--space">{subject.id} / SUBJECT</div>
          <h1>{subject.title}</h1>
          <p className="detail-intro">{subject.description}</p>
        </div>

        <div className="detail-hero-visual">
          <div className="detail-graphic" aria-hidden="true">
            <span>{subject.icon}</span>
          </div>
        </div>

        <div className="detail-grid">
          <section className="detail-block">
            <h2>Overview</h2>
            <p>{subject.overview}</p>
          </section>

          <section className="detail-block">
            <h2>Important Concepts</h2>
            <ul className="detail-list">
              {subject.concepts.map((concept) => (
                <li key={concept}>{concept}</li>
              ))}
            </ul>
          </section>

          <section className="detail-block">
            <h2>Learning Outcomes</h2>
            <ul className="detail-list">
              {subject.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </section>

          <section className="detail-block">
            <h2>Resources</h2>
            <ul className="detail-list">
              {subject.resources.map((resource) => (
                <li key={resource}>{resource}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="detail-section">
          <h2>Related Assignments</h2>
          {relatedAssignments.length ? (
            <div className="related-list">
              {relatedAssignments.map((assignment) => (
                <Link key={assignment.slug} href={`/assignments/${assignment.slug}`} className="related-item">
                  <span>{assignment.id}</span>
                  <strong>{assignment.title}</strong>
                  <em>VIEW →</em>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No linked assignments yet. Add related assignment slugs in the subject data to connect this topic to work.</p>
              <Link href="/#assignments" className="btn primary">
                VIEW ASSIGNMENTS
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

