import Image from "next/image";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="relative h-screen">
        {/* Blurry Background Image */}
        <div className="absolute inset-0 bg-[url('/images/jk.avif')] bg-cover bg-center bg-no-repeat filter blur-md"></div>

        {/* Foreground Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
          {/* Profile Image */}
          <Image
            src="/images/jk.avif"
            alt="Women Empowerment"
            width={300}
            height={300}
            className="rounded-full border-4 border-white shadow-lg"
          />
          <div className="space-y-4">
            <h1
              className={`text-5xl font-bold text-white mb-4 ${playfair.className}`}
            >
              She Is Someone
            </h1>
            <h2 className="text-3xl text-white mb-8">
              Every Woman Has a Story. Share Yours or Be Inspired by Others.
            </h2>
            <p className="text-xl text-white">
              Your Voice Matters. Your Story Inspires.
            </p>
          </div>
          <Link href="/blog-stories">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
