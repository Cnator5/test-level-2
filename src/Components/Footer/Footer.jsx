"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Footer.module.css";

const SocialIcon = ({ href, Icon }) => (
  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
    <Link href={href} className={styles.socialIcon}>
      <Icon className={styles.icon} />
    </Link>
  </motion.div>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} className={styles.footerLink}>
      <motion.span whileHover={{ x: 5 }} className={styles.linkText}>
        {children}
      </motion.span>
    </Link>
  </li>
);

const FooterSection = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={styles.footerSection}
  >
    <h4 className={styles.sectionTitle}>{title}</h4>
    {children}
  </motion.div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <FooterSection title="About Us">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.companyName}
            >
              MODRINO
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={styles.companyDescription}
            >
              Driving innovation in the automotive industry. At MODRINO, we are dedicated to delivering high-quality cars that enhance your driving experience and lifestyle.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={styles.socialIcons}
            >
              <SocialIcon href="https://facebook.com/modrino" Icon={FaFacebookF} />
              <SocialIcon href="https://twitter.com/modrino" Icon={FaTwitter} />
              <SocialIcon href="https://instagram.com/modrino" Icon={FaInstagram} />
              <SocialIcon href="https://linkedin.com/company/modrino" Icon={FaLinkedinIn} />
            </motion.div>
          </FooterSection>

          <FooterSection title="Quick Links">
            <ul className={styles.linkList}>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/models">Car Models</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
            </ul>
          </FooterSection>

          <FooterSection title="Our Models">
            <ul className={styles.linkList}>
              <FooterLink href="/models/sedan">Sedans</FooterLink>
              <FooterLink href="/models/suv">SUVs</FooterLink>
              <FooterLink href="/models/electric">Electric Cars</FooterLink>
              <FooterLink href="/models/hybrid">Hybrid Cars</FooterLink>
              <FooterLink href="/models/sports">Sports Cars</FooterLink>
              <FooterLink href="/models/luxury">Luxury Cars</FooterLink>
            </ul>
          </FooterSection>

          <FooterSection title="Contact Us">
            <ul className={styles.contactList}>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={styles.contactItem}
              >
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>237 Car Avenue, Innovation District, Akwa, Douala</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={styles.contactItem}
              >
                <FaPhone className={styles.contactIcon} />
                <span>+237 (681) 326 315</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={styles.contactItem}
              >
                <FaEnvelope className={styles.contactIcon} />
                <span>sales@modrino.com</span>
              </motion.li>
            </ul>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.quoteButton}
              >
                Request a Quote
              </motion.button>
            </Link>
          </FooterSection>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={styles.bottomBar}
        >
          <p>&copy; {currentYear} MODRINO. All rights reserved.</p>
          <p className={styles.bottomLinks}>
            Designed with ❤️ by MODRINO Team | 
            <Link href="/privacy-policy" className={styles.bottomLink}>
              Privacy Policy
            </Link> | 
            <Link href="/terms-of-service" className={styles.bottomLink}>
              Terms of Service
            </Link>
          </p>
        </motion.div>
      </div>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className={styles.scrollTopButton}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}