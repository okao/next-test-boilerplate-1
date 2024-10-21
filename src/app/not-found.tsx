import Image from "next/image";
import Link from "next/link";
import RocketCrashed from "../../public/_static/illustrations/rocket-crashed.svg";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <Image
        src={RocketCrashed}
        alt="404"
        width={400}
        height={400}
        className="pointer-events-none mb-5 mt-6 dark:invert"
      />
      <p className="text-balance px-4 text-center text-2xl font-medium">
        Page not found. Back to{" "}
        <Link
          href="/"
          className="text-muted-foreground underline underline-offset-4 hover:text-blue-500"
        >
          Homepage
        </Link>
        .
      </p>
    </div>
  );
}
