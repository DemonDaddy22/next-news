import type { Metadata } from 'next';
import './globals.css';
import NavHeader from '@/components/NavHeader';
import { FONTS } from '@/constants/fonts';

export const metadata: Metadata = {
  title: 'Next News',
  description: 'Stay updated with the latest news from around the world, all in one place.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${FONTS.IBS} h-full antialiased`}>
      <body className='font-normal font-body min-h-full flex flex-col flex-1 items-center p-4 bg-zinc-50 dark:bg-black'>
        <NavHeader />
        <main className='py-10'>{children}</main>
      </body>
    </html>
  );
}
