import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    img: "/deepseek_wordmark.svg",
  },
  {
    id: 2,
    img: "/deepseek_wordmark.svg",
  },
  {
    id: 3,
    img: "/deepseek_wordmark.svg",
  },
  {
    id: 4,
    img: "/deepseek_wordmark.svg",
  },
  {
    id: 5,
    img: "/deepseek_wordmark.svg",
  },
  {
    id: 6,
    img: "/deepseek_wordmark.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  id,
  img,
}: {
  id: number;
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-48 cursor-pointer overflow-hidden",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image width="128" height="128" alt="" src={img} />
      </div>
    </figure>
  );
};

export function MarqueeMarcas() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
        <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
