import Link from "next/link";

import { Icons } from "@/components/icons";
import { Shell } from "@/components/shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { type getGithubStars } from "@/lib/actions/github";

import { ContentSection } from "@/components/content-section";
import { Technologies } from "@/components/technologies";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { MoveRight, PhoneCall } from "lucide-react";

interface MainProps {
  githubStarsPromise: ReturnType<typeof getGithubStars>;
}

export async function Main({ githubStarsPromise }: MainProps) {
  // See the "Parallel data fetching" docs: https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching
  const githubStars = Promise.resolve(githubStarsPromise);

  return (
    <Shell className="max-w-8xl">
      <section className="mx-auto flex w-full flex-col items-center justify-center gap-4 text-center">
        <div className="lg:grid gap-8 items-center lg:grid-cols-2 w-full flex flex-col-reverse">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-4 flex-col font-serif">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                This is the start of something!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
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
      </section>

      <ContentSection
        title="Technologies"
        description="This template comes pre-configured with the latest technologies"
        linkText="View all technologies"
        className="pt-8 md:py-10 lg:py-12"
        href="/tech"
        asChild
      >
        <Technologies />
      </ContentSection>
    </Shell>
  );
}
