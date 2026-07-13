import ServiceCategory from "./ServiceCategory";
import { uxItems, uiItems, brandingItems } from "./data";

export default function ServiceDetails() {
  return (
    <section className="mx-36">
      <div className="border border-neutral-800 pt-28">
        <div className="space-y-12 px-12">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-semibold text-white">Design</h2>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              At Squareup, our design team is passionate about creating stunning,
              user-centric designs that captivate your audience and elevate your
              brand. We believe that great design is not just about aesthetics;
              it&apos;s about creating seamless and intuitive user experiences.
            </p>
          </div>

          <div className="inline-flex rounded-lg bg-neutral-800 px-4 py-3 text-xl text-white">
            Our design services include:
          </div>
        </div>

        <div className="space-y-16">
          <ServiceCategory title="User Experience (UX) Design" items={uxItems} />
          <ServiceCategory title="User Interface (UI) Design" items={uiItems} />
          <ServiceCategory title="Branding and Identity" items={brandingItems} />
        </div>
      </div>
    </section>
  );
}