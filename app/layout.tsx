import './globals.css';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next Js Movies App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-32 my-12`}>{children}</body>
    </html>
  );
}
