"use client";

import {
  Users,
  LayoutTemplate,
  MousePointerClick,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "User Research and Persona Development",
    icon: Users,
  },
  {
    title: "Information Architecture and Wireframing",
    icon: LayoutTemplate,
  },
  {
    title: "Interactive Prototyping and User Testing",
    icon: MousePointerClick,
  },
  {
    title: "UI Design and Visual Branding",
    icon: Palette,
  },
  {
    title: "Design Systems & Components",
    icon: Palette,
  },
  {
    title: "Responsive Web Design",
    icon: LayoutTemplate,
  },
  {
    title: "Mobile App Interface Design",
    icon: MousePointerClick,
  },
  {
    title: "Brand Identity & Guidelines",
    icon: Users,
  },
];

export default function DesignServices() {
  return (
    <section className="mx-36 border border-neutral-800 pt-28">
      {/* Heading */}
      <div className="space-y-12 px-12">
        <div className="max-w-5xl space-y-4">
          <h2 className="text-5xl font-semibold text-white">
            Design
          </h2>

          <p className="text-lg leading-7 text-neutral-200">
            At Tyrand, our design team is passionate about creating
            stunning, user-centric designs that captivate your audience
            and elevate your brand. We believe that great design is not
            just about aesthetics; it is about creating seamless and
            intuitive user experiences.
          </p>
        </div>

        <div className="inline-flex rounded-lg bg-neutral-800 px-4 py-3">
          <p className="text-xl text-white">
            Our design services include:
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="mt-12 border-t border-neutral-800">
        <div className="space-y-12 pt-12">
          <h3 className="px-12 text-3xl font-medium text-neutral-400">
            User Experience (UX) Design
          </h3>

          <div className="grid grid-cols-1 border-y border-neutral-800 lg:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
                  group
                  relative
                  overflow-hidden
                  border-b border-neutral-800
                  p-12
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:bg-neutral-900
                  hover:shadow-[0_0_20px_rgba(163,230,53,0.08)]
                  xl:border-r
                  last:border-r-0
                "
                >
                  {/* Glow Effect */}
                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-lime-400/5
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                  />

                  {/* Icon */}
                  <div
                    className="
                    relative
                    mb-7
                    inline-flex
                    rounded-xl
                    border border-neutral-800
                    bg-gradient-to-br
                    from-lime-400/20
                    to-transparent
                    p-3
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                    group-hover:border-lime-400/50
                  "
                  >
                    <Icon
                      className="
                      h-10 w-10
                      text-lime-400
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                    />
                  </div>

                  {/* Title */}
                  <h4
                    className="
                    relative
                    text-xl
                    font-medium
                    leading-8
                    text-neutral-200
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                  >
                    {service.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}