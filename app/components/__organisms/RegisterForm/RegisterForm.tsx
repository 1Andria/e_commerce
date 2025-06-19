"use client";

import { useState } from "react";
import Image from "next/image";
import { useAuthStore } from "../../../common/store/store";
import FormField from "../../__molecules/FormField/FormField";
import Button from "../../__atoms/btn/btn";
import { useRouter } from "next/navigation";
import BirthDatePicker from "../../__molecules/BirthDatePicker/BirthDatePicker";

export default function RegisterPage() {
  const register = useAuthStore((state) => state.register);
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all required fields");
      return;
    }

    if (birthYear || birthMonth || birthDay) {
      if (!(birthYear && birthMonth && birthDay)) {
        alert("Please select full birth date or leave all empty");
        return;
      }
      const birthDate = new Date(+birthYear, +birthMonth - 1, +birthDay);
      if (birthDate > new Date()) {
        alert("Birth date cannot be in the future");
        return;
      }
    }

    register(email, password);
    router.push("/login");
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 font-sans">
      <div className="relative hidden md:flex items-center justify-center bg-gradient-to-tr from-[#D8A47F] via-[#F4E3D2] to-[#B78552] p-6 rounded-tr-[2rem] rounded-br-[2rem] overflow-hidden shadow-lg">
        <Image
          src="/img.jpg"
          alt="Welcome Illustration"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="rounded-tr-[2rem] rounded-br-[2rem]"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Welcome!
          </h1>
          <p className="mt-3 text-base md:text-lg text-white max-w-sm text-center leading-relaxed opacity-90">
            Join us today and dive into exclusive sound experiences made just
            for you.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-[#FDF8F2] px-8 py-10 md:px-12 md:py-16">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4B3429] text-center">
            Register
          </h2>

          <FormField
            label="First Name"
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full bg-white border border-[#D7C3B3] rounded-xl min-h-[50px] px-4 md:px-6 text-lg md:text-xl text-[#4B3429] placeholder-[#C9B59F]
                       focus:outline-none focus:ring-4 focus:ring-[#D8A47F] transition flex items-center"
          />

          <FormField
            label="Last Name"
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full bg-white border border-[#D7C3B3] rounded-xl min-h-[50px] px-4 md:px-6 text-lg md:text-xl text-[#4B3429] placeholder-[#C9B59F]
                       focus:outline-none focus:ring-4 focus:ring-[#D8A47F] transition flex items-center"
          />

          <div>
            <label className="block mb-1 md:mb-2 text-[#4B3429] font-semibold text-md md:text-lg">
              Birth Date (optional)
            </label>
            <BirthDatePicker
              year={birthYear}
              month={birthMonth}
              day={birthDay}
              onYearChange={setBirthYear}
              onMonthChange={setBirthMonth}
              onDayChange={setBirthDay}
            />
          </div>

          <FormField
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white border border-[#D7C3B3] rounded-xl min-h-[50px] px-4 md:px-6 text-lg md:text-xl text-[#4B3429] placeholder-[#C9B59F] 
                       focus:outline-none focus:ring-4 focus:ring-[#D8A47F] transition flex items-center"
          />

          <FormField
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white border border-[#D7C3B3] rounded-xl min-h-[50px] px-4 md:px-6 text-lg md:text-xl text-[#4B3429] placeholder-[#C9B59F] 
                       focus:outline-none focus:ring-4 focus:ring-[#D8A47F] transition flex items-center"
          />

          <Button
            type="submit"
            className="w-full py-3 md:py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#B78552] to-[#E2B16B] 
                       hover:from-[#A76A3E] hover:to-[#D5A54F] shadow-lg transition"
          >
            Register
          </Button>

          <p className="mt-6 text-center text-sm text-[#8B6E58]">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="text-[#D8A47F] font-semibold hover:text-[#A4762B] underline"
            >
              Log in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
