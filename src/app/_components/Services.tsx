import { ArrowRight, Brush, Code2, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Design",
    description:
      "At SquareUp, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe great design is about creating seamless and intuitive user experiences.",
    icon: Brush,
  },
  {
    title: "Engineering",
    description:
      "Our engineering team combines technical expertise with innovation to build robust, scalable digital solutions using modern technologies and industry best practices.",
    icon: Code2,
  },
  {
    title: "Project Management",
    description:
      "Our experienced project management team ensures your projects are delivered on time, within budget, and according to your requirements while maintaining transparent communication.",
    icon: BriefcaseBusiness,
  },
];

export default function Services() {
  return (
    <section>
      <div className="mx-36">
        <div className="border-x border-b border-neutral-800">
          {/* Section Header */}
       <div
  className="relative overflow-hidden border-b border-neutral-800 bg-cover bg-center bg-no-repeat px-6 py-20 text-center md:px-20 xl:px-72"
  style={{
    backgroundImage: "url('/image/service-bg.png')",
  }}
>

  {/* Content */}
  <div className="relative z-10">
    <h2 className="text-4xl font-semibold text-white md:text-5xl">
      Our Services
    </h2>

    <p className="mx-auto mt-3 text-lg leading-7 text-neutral-300">
      Transform your brand with our innovative digital solutions that
      captivate and engage your audience.
    </p>
  </div>
</div>
          {/* Cards */}
          <div className="grid grid-cols-1 divide-y divide-neutral-800 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {services.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex flex-col justify-between p-8 xl:p-12"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-lg border border-neutral-800 bg-gradient-to-br from-lime-400/20 to-transparent">
                    <Icon className="h-8 w-8 text-lime-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-neutral-300">
                    {description}
                  </p>
                </div>

                {/* Button */}
                <Link
                  href="#"
                  className="mt-16 flex items-center justify-center gap-2 rounded-lg bg-neutral-800 px-6 py-4 text-lg font-medium text-white transition hover:bg-neutral-700"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}