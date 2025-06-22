"use client";
import React, { useState } from "react";

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState<"e-Money" | "Cash">(
    "e-Money"
  );

  return (
    <form className="max-w-[730px] max-[1100px]:max-w-full w-full p-8 bg-white shadow-md rounded-lg space-y-8">
      <h2 className="text-2xl font-bold">CHECKOUT</h2>

      <div>
        <h3 className="text-[#D87D4A] font-semibold tracking-widest text-sm mb-4">
          BILLING DETAILS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold block mb-1">Name</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Alexei Ward"
            />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="alexei@mail.com"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-semibold block mb-1">
              Phone Number
            </label>
            <input
              type="number"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="+1 202-555-0136"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[#D87D4A] font-semibold tracking-widest text-sm mb-4">
          SHIPPING INFO
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="text-sm font-semibold block mb-1">Address</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-1">ZIP Code</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="10001"
            />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-1">City</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="New York"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-semibold block mb-1">Country</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="United States"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[#D87D4A] font-semibold tracking-widest text-sm mb-4">
          PAYMENT DETAILS
        </h3>
        <div className="space-y-4">
          <label className="text-sm font-semibold block mb-1">
            Payment Method
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 border rounded-md px-4 py-2 w-full cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "e-Money"}
                onChange={() => setPaymentMethod("e-Money")}
              />
              e-Money
            </label>
            <label className="flex items-center gap-2 border rounded-md px-4 py-2 w-full cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "Cash"}
                onChange={() => setPaymentMethod("Cash")}
              />
              Cash on Delivery
            </label>
          </div>

          {paymentMethod === "e-Money" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="text-sm font-semibold block mb-1">
                  e-Money Number
                </label>
                <input
                  type="text"
                  className="w-full border px-4 py-2 rounded-md"
                  placeholder="238521993"
                />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">
                  e-Money PIN
                </label>
                <input
                  type="password"
                  className="w-full border px-4 py-2 rounded-md"
                  placeholder="6891"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
