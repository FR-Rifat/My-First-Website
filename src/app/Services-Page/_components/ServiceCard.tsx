import Image from "next/image";
import React from "react";

export default function ServiceCard({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="border-r border-neutral-800 p-12 last:border-r-0">
      <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-xl border border-neutral-800 bg-gradient-to-br from-lime-400/20 to-transparent">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>

      <h4 className="text-xl font-medium leading-8 text-neutral-200">{title}</h4>
    </div>
  );
}
