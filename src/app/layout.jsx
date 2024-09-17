import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../Components/Navbar/Navbar';
import AuthProvider from './../../context/AuthContext';
import Footer from '../Components/Footer/Footer';
import HeroSection from './../Components/HeroSection';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Premium Cars | Your Trusted Car Dealership",
  description: "Discover a wide range of premium cars at our dealership. New and used vehicles, financing options, and expert customer service.",
  keywords: "car dealership, premium cars, new cars, used cars, car financing, luxury vehicles",
  author: "Premium Cars Dealership",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Premium Cars | Your Trusted Car Dealership",
    description: "Discover a wide range of premium cars at our dealership. New and used vehicles, financing options, and expert customer service.",
    type: "website",
    url: "https://www.premiumcars.com",
    image: "https://www.premiumcars.com/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@premiumcars",
    title: "Premium Cars | Your Trusted Car Dealership",
    description: "Discover a wide range of premium cars at our dealership. New and used vehicles, financing options, and expert customer service.",
    image: "https://www.premiumcars.com/twitter-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.premiumcars.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <AuthProvider>
        <body className={inter.className}>
          <Navbar />
          <HeroSection />
          <main>{children}</main>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}