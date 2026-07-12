import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  "Home",
  "Services",
  "Work",
  "Process",
  "About",
  "Careers",
  "Contact",
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaXTwitter,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#111111]">
      <div className="mx-36 py-12">
        {/* Top */}
        <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={180}
              height={56}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-7">
            {navLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-lg font-medium text-neutral-200 transition duration-300 hover:text-lime-400"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-5 rounded-xl border border-neutral-800 px-4 py-4">
            <span className="text-lg font-medium text-neutral-200">
              Stay Connected
            </span>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="flex h-14 w-14 items-center justify-center rounded-lg border border-neutral-800 bg-gradient-to-b from-neutral-800 to-transparent transition duration-300 hover:border-lime-400 hover:bg-neutral-800"
                >
                  <Icon className="text-xl text-lime-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-neutral-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          {/* Contact */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Mail className="h-5 w-5 text-lime-400" />
              <span className="text-neutral-200">
                hello@squareup.com
              </span>
            </div>

            <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Phone className="h-5 w-5 text-lime-400" />
              <span className="text-neutral-200">
                +91 91813 23 2309
              </span>
            </div>

            <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
              <MapPin className="h-5 w-5 text-lime-400" />
              <span className="text-neutral-200">
                Somewhere in the World
              </span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-neutral-400">
            © 2023 SquareUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}