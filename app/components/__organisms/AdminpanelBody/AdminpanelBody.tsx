"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "../../__molecules/Header/Header";
import Image from "next/image";
import { getCookie, deleteCookie } from "cookies-next";
import { axiosInstance } from "@/app/common/lib/axios-instance";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function AdminPanel() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    price: "",
    description: "",
    features: "",
    inTheBox: "",
    src: null as File | null,
    additionalImage1: null as File | null,
    additionalImage2: null as File | null,
    additionalImage3: null as File | null,
  });

  const fileRefs = {
    additionalImage1: useRef<HTMLInputElement>(null),
    additionalImage2: useRef<HTMLInputElement>(null),
    additionalImage3: useRef<HTMLInputElement>(null),
  };

  useEffect(() => {
    const checkAdmin = async () => {
      const token = getCookie("token");
      if (!token) {
        router.push("/");
        return;
      }

      try {
        const res = await axiosInstance.get("/auth/current-user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const user = res.data;
        if (user.role !== "admin") {
          router.push("/");
        }
      } catch (err) {
        console.log(err);

        deleteCookie("token");
        router.push("/");
      }
    };

    checkAdmin();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const triggerUpload = (field: keyof typeof fileRefs) => {
    fileRefs[field]?.current?.click();
  };

  const getImagePreview = (file: File | null): string | undefined =>
    file ? URL.createObjectURL(file) : undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = getCookie("token");
    if (!token) return;

    const boxItems = formData.inTheBox
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => {
        const match = item.match(/^(\d+)x\s+(.*)$/i);
        if (!match) return null;
        return {
          quantity: parseInt(match[1]),
          item: match[2],
        };
      })
      .filter(Boolean);

    const form = new FormData();
    form.append("category", formData.category);
    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("description", formData.description);
    form.append("features", formData.features);
    form.append("inTheBox", JSON.stringify(boxItems));
    form.append("images", formData.src as File);
    form.append("images", formData.additionalImage1 as File);
    form.append("images", formData.additionalImage2 as File);
    form.append("images", formData.additionalImage3 as File);

    try {
      await axiosInstance.post("/products", form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setFormData({
        category: "",
        title: "",
        price: "",
        description: "",
        features: "",
        inTheBox: "",
        src: null,
        additionalImage1: null,
        additionalImage2: null,
        additionalImage3: null,
      });
      toast.success("created successfully");
    } catch (err) {
      toast.error("failed");

      console.log(err);
    }
  };
  console.log("FORM DATA STATE:", formData);

  return (
    <>
      <div className="bg-black">
        <Header />
      </div>

      <div className="max-w-[960px] mb-[-100px] px-[20px] w-full mx-auto p-[24px] mt-[60px] shadow-xl rounded-2xl">
        <h2 className="text-[32px] font-bold text-center mb-[40px]">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <div>
              <label className="block text-sm font-semibold mb-[6px]">
                Category
              </label>
              <select
                name="category"
                onChange={handleChange}
                value={formData.category}
                className="w-full border border-gray-300 px-[16px] py-[12px] rounded-lg focus:ring-2 focus:ring-[#D87D4A] bg-white"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="headphones">Headphones</option>
                <option value="earphones">Earphones</option>
                <option value="speakers">Speakers</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-[6px]">
                Price (₾)
              </label>
              <input
                name="price"
                type="number"
                onChange={handleChange}
                value={formData.price}
                className="w-full border border-gray-300 px-[16px] py-[12px] rounded-lg focus:ring-2 focus:ring-[#D87D4A]"
                placeholder="1199"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-[6px]">
                Product Title
              </label>
              <input
                name="title"
                onChange={handleChange}
                value={formData.title}
                className="w-full border border-gray-300 px-[16px] py-[12px] rounded-lg focus:ring-2 focus:ring-[#D87D4A]"
                placeholder="ZX7 Bluetooth Speaker"
              />
            </div>
          </div>

          <div className="space-y-[20px]">
            <div>
              <label className="block text-sm font-semibold mb-[6px]">
                Description
              </label>
              <textarea
                name="description"
                rows={3}
                onChange={handleChange}
                value={formData.description}
                className="w-full border border-gray-300 px-[16px] py-[12px] rounded-lg focus:ring-2 focus:ring-[#D87D4A]"
                placeholder="Short product description..."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-[6px]">
                Features
              </label>
              <textarea
                name="features"
                rows={4}
                onChange={handleChange}
                value={formData.features}
                className="w-full border border-gray-300 px-[16px] py-[12px] rounded-lg focus:ring-2 focus:ring-[#D87D4A]"
                placeholder="Detailed features or specs..."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] items-start">
            <div>
              <label className="block text-sm font-semibold mb-[6px]">
                Main Product Image
              </label>
              <input
                type="file"
                name="src"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full file:bg-[#D87D4A] file:text-white file:font-semibold file:px-4 file:py-2 file:rounded-lg file:border-0 hover:file:opacity-80 border border-gray-300 rounded-lg"
              />
            </div>
            {formData.src && (
              <div className="w-full h-auto rounded-xl overflow-hidden border border-gray-200">
                <Image
                  src={getImagePreview(formData.src) as string}
                  alt="Preview"
                  width={400}
                  height={300}
                  className="object-cover w-full max-h-[400px]"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {["additionalImage1", "additionalImage2", "additionalImage3"].map(
              (field, index) => {
                const file = formData[
                  field as keyof typeof formData
                ] as File | null;
                const preview = getImagePreview(file);
                return (
                  <div key={field} className="space-y-[10px]">
                    <label className="block text-sm font-semibold">
                      Additional Photo {index + 1}
                    </label>
                    <div
                      onClick={() =>
                        triggerUpload(field as keyof typeof fileRefs)
                      }
                      className={`w-full h-[180px] flex items-center justify-center rounded-xl cursor-pointer transition overflow-hidden
                      ${
                        preview
                          ? ""
                          : "border-2 border-dashed border-[#D87D4A] hover:bg-[#fff5f0] text-[#D87D4A] flex-col"
                      }`}
                    >
                      {preview ? (
                        <Image
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          width={300}
                          height={180}
                          className="object-cover w-full h-full rounded-xl"
                        />
                      ) : (
                        <>
                          <div className="text-[32px] font-bold">+</div>
                          <div className="text-sm mt-1 opacity-70">
                            Click to upload
                          </div>
                        </>
                      )}
                    </div>
                    <input
                      type="file"
                      ref={fileRefs[field as keyof typeof fileRefs]}
                      name={field}
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                );
              }
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-[6px]">
              What&apos;s in the box{" "}
            </label>
            <input
              name="inTheBox"
              onChange={handleChange}
              value={formData.inTheBox}
              className="w-full border border-gray-300 px-[16px] py-[12px] rounded-lg focus:ring-2 focus:ring-[#D87D4A]"
              placeholder="Speaker, Cable, Manual"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full h-[50px] text-white bg-[#D87D4A] rounded-xl font-semibold tracking-wider hover:opacity-80 transition"
            >
              ADD PRODUCT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
