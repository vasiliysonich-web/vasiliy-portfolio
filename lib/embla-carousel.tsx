"use client";

import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { cn } from "@/lib/utils";

type CarouselProps = {
  opts?: EmblaOptionsType;
  plugins?: any[];
  children: React.ReactNode;
  className?: string;
};

export function Carousel({
  opts,
  plugins,
  children,
  className,
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel(opts, plugins);

  return (
    <div ref={emblaRef} className={cn("overflow-hidden", className)}>
      <div className="flex">{children}</div>
    </div>
  );
}

export function CarouselItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex-[0_0_100%] min-w-0 pl-4", className)}>
      {children}
    </div>
  );
}
