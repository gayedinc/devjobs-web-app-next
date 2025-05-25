import './styles/globals.css';

export const metadata = {
  title: 'DevJobs Web App',
  description: 'Find your next developer job',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}