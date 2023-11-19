import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import {
  Plus_Jakarta_Sans as FontJakarta,
  Open_Sans as FontSans,
} from 'next/font/google';

export const fontJakarta = FontJakarta({
  subsets: ['latin'],
  variable: '--font-jakarta',
});
export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={cn(
        `min-h-screen  font-jakarta antialiased, ${fontJakarta.variable} ${fontSans.variable}`
      )}
    >
      <Component {...pageProps} />{' '}
    </main>
  );
}
