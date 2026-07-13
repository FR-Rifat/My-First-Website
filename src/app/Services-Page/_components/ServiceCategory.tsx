import React from 'react'
import ServiceCard from './ServiceCard'

export default function ServiceCategory({ title, items }: { title: string; items: any[] }) {
  return (
    <div>
      <div className="border-t border-neutral-800 pt-12">
    <h3 className="px-12 text-3xl font-medium text-neutral-400">
        {title}
    </h3>

    <div className="mt-12 grid border-y border-neutral-800 lg:grid-cols-4">
        {items.map((item) => (
            <ServiceCard key={item.title} {...item} />
        ))}
    </div>
</div>
    </div>
  )
}
