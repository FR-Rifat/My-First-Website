"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="border border-neutral-800 p-10 lg:p-20 mx-36">
      <div className="flex flex-col gap-12">
        {/* Top Content */}
        <div className="flex flex-col items-start gap-10 lg:flex-row">
          {/* Logo */}
          <div className="flex h-36 w-36 items-center justify-center rounded-[20px] bg-lime-400 shadow-[inset_0px_0px_23px_16px_rgba(255,255,255,0.5)]">
            <span className="text-6xl font-bold text-zinc-900">S</span>
          </div>

          {/* Text */}
          <div className="flex flex-1 flex-col gap-5">
            <h2 className="text-2xl font-medium text-neutral-400 lg:text-3xl">
              Today, Tyrand Continues to Thrive as a Leading Digital Product
              Agency.....
            </h2>

            <p className="text-base leading-7 text-neutral-400 lg:text-lg">
              Combining the power of design, engineering, and project
              management to create transformative digital experiences. They
              invite you to join them on their journey and discover how they
              can help bring your digital ideas to life.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col gap-6 rounded-xl border border-neutral-800 bg-neutral-800/20 p-6 backdrop-blur-md lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center">
            <h3 className="text-xl text-neutral-400">
              Welcome to Tyrand
            </h3>

            <div className="rounded-lg bg-neutral-800 px-5 py-4">
              <p className="text-base leading-7 text-white lg:text-lg">
                Where collaboration, expertise, and client-centricity
                intersect to shape the future of digital innovation.
              </p>
            </div>
          </div>

          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-8 py-4 text-lg font-medium text-zinc-900 transition duration-300 hover:opacity-90"
          >
            Start Project
          </Link>
        </div>
      </div>
    </section>
  );
}