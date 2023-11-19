import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Plus_Jakarta_Sans as FontJakarta } from 'next/font/google';

export const fontJakarta = FontJakarta({
  subsets: ['latin'],
  variable: '--font-jakarta',
});
export default function App({ Component, pageProps }) {
  return (
    <main
      className={cn(
        'min-h-screen  font-jakarta antialiased',
        fontJakarta.variable
      )}
    >
      <Component {...pageProps} />{' '}
    </main>
  );
}
