import './styles/globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'DevJobs Web App',
  description: 'Find your next developer job',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}