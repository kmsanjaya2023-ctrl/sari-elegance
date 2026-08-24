"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-ivory shadow-card">
        <Image
          key={active}
          src={images[active]}
          alt={`${productName} — view ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="animate-fadeUp object-cover"
        />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            aria-current={active === i}
            className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-colors ${
              active === i ? "border-burgundy" : "border-transparent"
            }`}
          >
            <Image src={img} alt="" fill sizes="120px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
