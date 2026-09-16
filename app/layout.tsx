import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { profile } from '@/src/data/profile';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-genaro.razak-faoma-1718.chatgpt.site'),
  title: `${profile.fullName} — ${profile.positioningTagline}`,
  description: profile.shortIntro,
  openGraph: { title: profile.fullName, description: profile.shortIntro, type: 'website' },
  twitter: { card: 'summary', title: profile.fullName, description: profile.shortIntro },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${geistMono.variable}`}>{children}</body></html>;
}
