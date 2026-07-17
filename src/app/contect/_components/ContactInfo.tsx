"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-12">
      <div className="mx-36">
        <div className="flex flex-col items-center justify-center gap-7 lg:flex-row">
          {/* Email */}
          <div className="flex items-center gap-4 rounded-lg bg-neutral-800 px-6 py-4">
            <Mail className="h-7 w-7 text-lime-400" />
            <p
              className="text-xl font-medium leading-8 text-neutral-200"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              hello@squareup.com
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 rounded-lg bg-neutral-800 px-6 py-4">
            <Phone className="h-7 w-7 text-lime-400" />
            <p
              className="text-xl font-medium leading-8 text-neutral-200"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              +91 91813 23 2309
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 rounded-lg bg-neutral-800 px-6 py-4">
            <MapPin className="h-7 w-7 text-lime-400" />
            <p
              className="text-xl font-medium leading-8 text-neutral-200"
              style={{ fontFamily: "Barlow, sans-serif" }}
            >
              Get Location
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}