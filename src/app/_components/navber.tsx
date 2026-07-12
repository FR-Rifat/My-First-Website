import Image from "next/image";

export default function Navbar() {
   
    
  const navLinks = [
    "Home",
    "Services",
    "Work",
    "Process",
    "About",
    "Careers",
  ];

  return (
    <header className="border-b border-neutral-800 bg-[#0F0F0F]">
      <div className="mx-36 flex h-24 items-center justify-between px-6 lg:px-20">
       

        {/* Logo */}
        <div className="flex items-center">
        <Image
        src="/images/logo.png"
        alt="Marvix Logo"
        width={180}
        height={56}
        priority
        className="h-14 w-auto object-contain"
        />
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className={`rounded-lg px-7 py-3 text-lg transition ${
                item === "Home"
                  ? "bg-neutral-800 font-semibold text-white"
                  : "font-medium text-neutral-200 hover:text-lime-400"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button className="rounded-lg bg-lime-400 px-6 py-3 text-lg font-medium text-neutral-900 transition hover:bg-lime-300">
          Contact Us
        </button>
      </div>
    </header>
  );
}