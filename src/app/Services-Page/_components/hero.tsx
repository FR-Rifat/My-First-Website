export default function ServicesHero() {
  return (
    <section>
      <div className="mx-36">
        <div
  className="relative overflow-hidden border-x border-b border-neutral-800 bg-cover bg-center bg-no-repeat px-6 py-20 text-center md:px-16 md:py-24 xl:px-72 xl:py-28"
  style={{
    backgroundImage: "url('/image/page-hero-bg.png')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/65" />

  {/* Content */}
  <div className="relative z-10">
    <span className="inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.2em] text-lime-400">
      Our Services
    </span>

    <h1 className="mt-8 text-4xl font-semibold text-white md:text-5xl xl:text-6xl">
      Our Services
    </h1>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
      Transform your brand with our innovative digital solutions that
      captivate and engage your audience.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}