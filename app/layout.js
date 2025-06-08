import './styles/globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'DevJobs Web App',
  description: 'Find your next developer job',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}