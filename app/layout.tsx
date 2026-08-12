import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Sairaj Khandagale — E-Waste & Environmental Management',
    template: '%s | Sairaj Khandagale'
  },
  description:
    'Academic e-portfolio presenting Sairaj Khandagale’s work, subject overview, assignments, and environmental learning journey in E-Waste & Environmental Management.',
  keywords: ['e-waste portfolio', 'environmental management', 'academic portfolio', 'VIT Mumbai', 'Sairaj Khandagale'],
  openGraph: {
    title: 'Sairaj Khandagale — E-Waste & Environmental Management',
    description:
      'Interactive academic portfolio exploring e-waste awareness, sustainability, and student learning outcomes.',
    type: 'website',
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sairaj Khandagale — E-Waste & Environmental Management',
    description: 'Academic portfolio and interactive exhibition on e-waste and environmental management.'
  },
  icons: {
    icon: '/images/favicon.svg',
    shortcut: '/images/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
