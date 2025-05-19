import './globals.css';
import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/600.css';
import '@fontsource/mulish/700.css';
import ThemeProvider from '../components/ThemeProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Removed duplicate dark/light mode button here */}
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 