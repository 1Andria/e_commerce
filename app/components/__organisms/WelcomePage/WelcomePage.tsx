"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import firstPagePhoto from "../../../common/images/firstPage.jpg";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={firstPagePhoto}
        alt="Welcome Background"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="absolute inset-0 -z-10"
      />

      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black/30 px-4 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to Our Platform
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
          Join us to explore a world of opportunities and connect with
          like-minded individuals. Your journey starts here!
        </p>
        <button
          onClick={() => router.push("/login")}
          className="bg-gradient-to-r from-[#B78552] to-[#E2B16B] hover:from-[#A76A3E] hover:to-[#D5A54F] 
                     text-white font-bold py-4 px-16 rounded-xl shadow-lg transition text-2xl md:text-3xl"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
