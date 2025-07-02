"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Image from "next/image";
import FormField from "../../__molecules/FormField/FormField";
import Button from "../../__atoms/btn/btn";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { axiosInstance } from "@/app/common/lib/axios-instance";
import { setCookie } from "cookies-next";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const resp = await axiosInstance.post("/auth/sign-in", {
        email: data.email,
        password: data.password,
      });
      if (resp.status === 201) {
        setCookie("token", resp.data.token, { maxAge: 60 * 60 });
        router.push("/");
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 font-sans">
      <div className="relative hidden md:flex items-center justify-center bg-gradient-to-tr from-[#D8A47F] via-[#F4E3D2] to-[#B78552] p-10 rounded-tr-[3rem] rounded-br-[3rem] overflow-hidden shadow-lg">
        <Image
          src="/img.jpg"
          alt="Welcome Illustration"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="rounded-tr-[3rem] rounded-br-[3rem]"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center px-8">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Welcome Back
          </h1>
          <p className="mt-5 text-lg text-white max-w-md text-center leading-relaxed opacity-90">
            Dive into a world of exclusive sound experiences made just for you.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-[#FDF8F2] px-12 py-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg space-y-8"
        >
          <h2 className="text-4xl font-extrabold text-[#4B3429] text-center">
            Sign In
          </h2>

          <div className="space-y-6">
            <div>
              <FormField
                label="Email"
                id="email"
                type="email"
                {...register("email")}
                className="w-full bg-white border border-[#D7C3B3] rounded-xl py-4 px-6 text-lg text-[#4B3429] placeholder-[#C9B59F] focus:outline-none focus:ring-4 focus:ring-[#D8A47F] transition"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <FormField
                label="Password"
                id="password"
                type="password"
                {...register("password")}
                className="w-full bg-white border border-[#D7C3B3] rounded-xl min-h-[64px] px-6 text-xl text-[#4B3429] placeholder-[#C9B59F] focus:outline-none focus:ring-4 focus:ring-[#D8A47F] transition"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between text-sm text-[#8B6E58]">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#D8A47F]" /> Remember
                me
              </label>
              <a href="#" className="text-[#D8A47F] hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#B78552] to-[#E2B16B] hover:from-[#A76A3E] hover:to-[#D5A54F] shadow-lg transition"
            >
              Sign In
            </Button>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-[#D7C3B3]" />
              <span className="px-4 text-[#C4B39B] text-sm">
                Or continue with
              </span>
              <div className="flex-grow border-t border-[#D7C3B3]" />
            </div>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-3 py-3 rounded-xl border border-[#D7C3B3] bg-white text-[#4B3429] hover:shadow-md transition">
                <FaGoogle size={20} className="text-[#DB4437]" />
                Google
              </button>
              <button className="flex-1 flex items-center justify-center gap-3 py-3 rounded-xl border border-[#D7C3B3] bg-white text-[#4B3429] hover:shadow-md transition">
                <FaFacebook size={20} className="text-[#4267B2]" />
                Facebook
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-[#8B6E58]">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-[#D8A47F] font-semibold hover:text-[#A4762B] underline"
            >
              Create one
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
