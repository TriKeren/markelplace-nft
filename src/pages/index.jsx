import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HotNft from "@/components/hotNft";
import Collections from "@/components/collections";
import TrendingCategories from "@/components/trendingCategories";
import Tutorials from "@/components/tutorials";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" bg-[url('/bg.png')] bg-top bg-no-repeat">
      <div className="w-full backdrop-blur-sm sticky top-0 left-0 z-50 ">
        <div className="max-w-screen-xl mx-auto w-full lg:px-0 px-6">
          <Navbar />
        </div>
      </div>
      <div className={`w-full max-w-screen-xl mx-auto flex flex-col gap-16 lg:px-0 px-6 ${inter.className} -z-10`}>
        <Hero />
        <HotNft />
        <Collections />
        <TrendingCategories />
        <Tutorials />
      </div>
      <div className="w-full bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="max-w-screen-xl mx-auto w-full lg:px-0 px-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}
