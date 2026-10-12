import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stickman Video Studio',
  description: 'Turn a topic into a storyboard-ready stickman video plan.',
  applicationName: 'Stickman Video Studio',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#101114' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
