"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../../common/store/store";
import FormField from "../../__molecules/FormField/FormField";
import Button from "../../__atoms/btn/btn";
import BirthDatePicker from "../../__molecules/BirthDatePicker/BirthDatePicker";
import { useState } from "react";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const registerUser = useAuthStore((state) => state.register);
  const router = useRouter();

  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
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

    registerUser(data.email, data.password);
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4B3429] text-center">
            Register
          </h2>

          <FormField
            label="First Name"
            id="firstName"
            type="text"
            {...register("firstName")}
            className="..."
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}

          <FormField
            label="Last Name"
            id="lastName"
            type="text"
            {...register("lastName")}
            className="..."
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}

          <div>
            <label className="block mb-1 text-[#4B3429] font-semibold">
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
            {...register("email")}
            className="..."
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <FormField
            label="Password"
            id="password"
            type="password"
            {...register("password")}
            className="..."
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

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
