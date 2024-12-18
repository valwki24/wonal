"use client";

import { Layout } from "@/components/Layout";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className={`text-4xl font-bold text-center mb-8 ${playfair.className}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About She Is Someone
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              At She Is Someone, we believe in the power of shared stories to
              inspire, empower, and connect women from all walks of life. Our
              platform is more than just a blog; it's a vibrant community where
              every voice matters and every story has the potential to change
              lives.
            </p>
            <p>
              We're dedicated to creating a safe, inclusive space where women
              can express themselves freely, find support, and celebrate each
              other's triumphs. Through our collective experiences, we aim to
              foster understanding, build resilience, and ignite positive change
              in the world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="mb-4">
              Whether you're here to share your own journey, draw inspiration
              from others, or simply connect with like-minded individuals, She
              Is Someone welcomes you with open arms. Our diverse community
              spans across cultures, professions, and experiences, united by the
              common thread of womanhood and the desire to lift each other up.
            </p>
            <p>
              Together, we're rewriting the narrative of what it means to be a
              woman in today's world. Every story shared, every comment of
              support, and every connection made contributes to our collective
              strength and empowerment.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
