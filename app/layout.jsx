export const metadata = {
  title: {
    default: 'EverGreen ? Artificial Plants for Effortless Beauty',
    template: '%s ? EverGreen'
  },
  description: 'Premium artificial plants that bring lasting greenery to any space.',
};

import './globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen grid grid-rows-[auto,1fr,auto]">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
