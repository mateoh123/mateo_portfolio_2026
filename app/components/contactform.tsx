"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const onSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("access_key", "b65d71c9-8c80-4efe-8350-eeb7cb1b4f05");
    formData.append("name", `${form.firstName} ${form.lastName}`);
    formData.append("email", form.email);
    formData.append("message", form.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Sent!");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } else {
      setResult("Something went wrong, try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="isolate bg-black w-full ">
      <div className="mx-auto max-w-2xl text-left">
        <h2 className="font-semibold tracking-tight text-gray-100 font-archivo scale-y-[3] text-[6vw] xs:text-[6vw] ipad:text-[3vw] md:text-[2.5vw] lg:text-[2vw]">
          Lets work together!
        </h2>
      </div>

      <div className="mx-auto mt-[10vw] w-full max-w-xl sm:mt-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-100 scale-y-[2]">
              First name
            </label>
            <div className="mt-4">
              <input
                type="text"
                required
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className="block w-full bg-white px-3.5 py-2 text-sm text-gray-900 outline outline-1 outline-gray-100 placeholder:text-gray-400 focus:outline-2 focus:outline-black"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-100 scale-y-[2]">
              Last name
            </label>
            <div className="mt-4">
              <input
                type="text"
                required
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="block w-full bg-white px-3.5 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-black"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-100 scale-y-[2]">
              Email
            </label>
            <div className="mt-4">
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="block w-full bg-white px-3.5 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-black"
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-100 scale-y-[2]">
              Message
            </label>
            <div className="mt-4">
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="block w-full bg-white px-3.5 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-black"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full bg-white px-3.5  text-center text-sm font-semibold text-black hover:text-white hover:bg-red-600 transition-colors duration-200 scale-y-[2]"
          >
            {result || "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}
