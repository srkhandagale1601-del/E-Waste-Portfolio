'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { assignments } from '@/data/assignments';
import { contact } from '@/data/contact';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { subjects } from '@/data/subjects';
import CustomCursor from './CustomCursor';
import MagneticButton from './MagneticButton';
import Navigation from './Navigation';
import Reveal from './Reveal';
import ScrollProgress from './ScrollProgress';

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      <CustomCursor />

      <main className="page-shell">
        <section id="home" className="hero section">
          <div className="hero-glow hero-glow--one" aria-hidden="true" />
          <div className="hero-glow hero-glow--two" aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <motion.div className="badge" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}>
                <span>✦</span>
                {profile.badge}
              </motion.div>

              <motion.h1 initial={{ clipPath: 'inset(100% 0 0 0)', y: 24 }} animate={{ clipPath: 'inset(0 0 0 0)', y: 0 }} transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}>
                {profile.title}
              </motion.h1>

              <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.48 }}>
                {profile.subtitle}
              </motion.p>

              <motion.div className="hero-info" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.62 }}>
                {[
                  ['STUDENT', profile.name],
                  ['DEPARTMENT', profile.department],
                  ['COLLEGE', profile.college],
                  ['ACADEMIC YEAR', profile.academicYear]
                ].map(([label, value]) => (
                  <div key={label} className="info-item">
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </div>
                ))}
              </motion.div>

              <motion.div className="quote" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.75 }}>
                “{profile.quote}”
                <em>— {profile.quoteAuthor}</em>
              </motion.div>

              <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }}>
                <MagneticButton className="primary" onClick={() => document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth' })}>
                  EXPLORE PORTFOLIO <ArrowRight size={15} />
                </MagneticButton>
                <MagneticButton className="secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                  VIEW ABOUT PROFILE <ArrowUpRight size={15} />
                </MagneticButton>
              </motion.div>
            </div>

            <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96, filter: 'blur(14px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 0.9, delay: 0.65 }}>
              <div className="visual-shell">
                <div className="visual-ring visual-ring--one" />
                <div className="visual-ring visual-ring--two" />
                <div className="visual-grid" />
                <div className="visual-node visual-node--one" />
                <div className="visual-node visual-node--two" />
                <div className="visual-node visual-node--three" />
                <div className="visual-label">
                  <span>Electronic waste</span>
                  <strong>Resource recovery</strong>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <Reveal>
              <div className="section-label">01 / ABOUT ME</div>
              <h2 className="section-title">ABOUT<br />ME</h2>
            </Reveal>

            <div className="about-grid">
              <Reveal>
                <div className="portrait-panel">
                  <div className="portrait-frame" aria-label="Profile portrait placeholder">
                    <div className="portrait-image">
                        <img src="/images/profile.png" alt="Sairaj Khandagale" />
                    </div>
                    <div className="portrait-meta">
                      <span>{profile.name}</span>
                      <small>{profile.department}</small>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="about-copy">
                  <p>{profile.about}</p>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div className="editorial-block">
                <div className="block-head">SELECTED WORK</div>
                <h3>PROJECTS</h3>

                <div className="project-list">
                  {projects.map((project) => (
                    <a
                      key={project.id}
                      href={project.github || project.live || '#'}
                      target={project.github || project.live ? '_blank' : undefined}
                      rel={project.github || project.live ? 'noopener noreferrer' : undefined}
                      className="project-row"
                    >
                      <div className="project-num">{project.id}</div>

                      <div className="project-copy">
                        <div className="project-heading">
                          <h4>{project.title}</h4>
                          <span className="project-link-line">
                            VIEW <ArrowUpRight size={14} />
                          </span>
                        </div>
                        <p>{project.description}</p>
                        <div className="project-tags">{project.technologies}</div>
                      </div>

                      <div className="project-meta">
                        <span>{project.category}</span>
                        <strong>{project.year}</strong>
                      </div>

                      {project.image ? (
                        <div className="project-preview" aria-hidden="true">
                          <img src={project.image} alt={project.title} />
                        </div>
                      ) : null}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="editorial-block objective-block">
                <div className="block-head">CAREER OBJECTIVE</div>
                <p>{profile.careerObjective}</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="editorial-block">
                <div className="block-head">CAPABILITIES</div>
                <h3>SKILLS</h3>

                <div className="skill-grid">
                  {Object.entries(profile.skills).map(([group, items]) => (
                    <div key={group} className="skill-group">
                      <h4>{group.toUpperCase()}</h4>
                      <div className="skill-list">
                        {items.map((skill) => (
                          <span key={skill} className="skill-pill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="subjects" className="section">
          <div className="container">
            <Reveal>
              <div className="section-label">02 / SUBJECT OVERVIEW</div>
              <h2 className="section-title">SUBJECT<br />OVERVIEW</h2>
              <p className="section-kicker">E-Waste & Environmental Management</p>
            </Reveal>

            <div className="subject-grid">
              {subjects.map((subject, index) => (
                <Reveal key={subject.slug} delay={index * 0.04}>
                  <Link href={`/subjects/${subject.slug}`} className="subject-card">
                    <div className="subject-card__meta">
                      <span>{subject.id}</span>
                      <span className="subject-card__icon">{subject.icon}</span>
                    </div>
                    <h3>{subject.title}</h3>
                    <p>{subject.description}</p>
                    <div className="subject-card__action">
                      EXPLORE <ArrowRight size={14} />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="assignments" className="section">
          <div className="container">
            <Reveal>
              <div className="section-label">03 / ASSIGNMENTS</div>
              <h2 className="section-title">MY WORK &<br />LEARNING ACTIVITIES</h2>
            </Reveal>

            <div className="assignment-list">
              {assignments.length ? (
                assignments.map((assignment, index) => (
                  <Reveal key={assignment.slug} delay={index * 0.05}>
                    <Link href={`/assignments/${assignment.slug}`} className="assignment-card">
                      <div className="assignment-card__index">ASSIGNMENT {assignment.id}</div>
                      <div className="assignment-card__main">
                        <h3>{assignment.title}</h3>
                        <div className="assignment-card__meta">
                          <span>{assignment.subject}</span>
                          <span>{assignment.date}</span>
                        </div>
                        <p>{assignment.description}</p>
                      </div>
                      <div className="assignment-card__status">{assignment.status}</div>
                      <div className="assignment-card__action">
                        VIEW ASSIGNMENT <ArrowRight size={14} />
                      </div>
                    </Link>
                  </Reveal>
                ))
              ) : (
                <div className="empty-state">
                  <p>No assignments yet. Add a new item to the array in the assignments data file to display it here.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section activity-panel">
          <div className="container">
            <Reveal>
              <div className="section-label">04 / ACADEMIC ACTIVITIES</div>
              <h2 className="section-title">ENVIRONMENTAL<br />LEARNING</h2>
            </Reveal>

            <div className="activity-grid">
              {['Awareness campaigns', 'Responsible disposal documentation', 'Material recovery exploration'].map((item, index) => (
                <Reveal key={item} delay={index * 0.05}>
                  <div className="activity-card">
                    <span>0{index + 1}</span>
                    <h3>{item}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <Reveal>
              <div className="section-label">05 / CONTACT</div>
              <h2 className="contact-title">LET'S<br /><span>CONNECT</span></h2>
            </Reveal>

            <div className="contact-list">
              {[
                { icon: <Mail size={18} />, label: 'EMAIL', value: contact.email, href: `mailto:${contact.email}` },
                { icon: <Linkedin size={18} />, label: 'LINKEDIN', value: contact.linkedinLabel, href: contact.linkedin },
                { icon: <Github size={18} />, label: 'GITHUB', value: contact.githubLabel, href: contact.github }
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="contact-row">
                  <div className="contact-label">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <div className="contact-value">{item.value}</div>
                  <ArrowUpRight size={20} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 {profile.name}</span>
          <span>E-Waste & Environmental Management</span>
          <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            BACK TO TOP ↑
          </button>
        </div>
      </footer>
    </>
  );
}

