import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <DefaultSeo {...SEO} />
        {children}
      </body>
    </html>
  );
} 