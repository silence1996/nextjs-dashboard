import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'NextJs练习',
  title: {
    template: '%s | NextJs',
    default: 'NextJs练习',
  },
  description: '一个简单的NextJs练习',
  keywords: ['nextjs', 'typescript', 'react'],
  openGraph: {
    images: '/logo.png',
  },
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'), // 用处未知
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
