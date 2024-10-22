import Link from "next/link";

import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { TechnologyCardSkeleton } from "./technology-card-skeleton";

export function MainSkeleton() {
  return (
    <Shell className="max-w-6xl">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <div className="w-full  py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
              <div className="flex gap-4 flex-col">
                <div>
                  <Badge variant="outline">We&apos;re live!</Badge>
                </div>
                <div className="flex gap-4 flex-col">
                  <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                    This is the start of something!
                  </h1>
                  <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                    Managing a small business today is already tough. Avoid
                    further complications by ditching outdated, tedious trade
                    methods. Our goal is to streamline SMB trade, making it
                    easier and faster than ever.
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <Button size="lg" className="gap-4" variant="outline">
                    Jump on a call <PhoneCall className="w-4 h-4" />
                  </Button>
                  <Button size="lg" className="gap-4">
                    Sign up here <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-muted rounded-md aspect-square"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <TechnologyCardSkeleton key={i} />
        ))}
      </section>
    </Shell>
  );
}
