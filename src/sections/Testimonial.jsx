import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
import { education } from "../constants";
const firstRow = education.slice(0, education.length / 2);
const secondRow = education.slice(education.length / 2);

const EducationCard = ({ institution, degree, date, grade }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r from-indigo-900 to-storm hover:from-purple-800 hover:to-indigo-700 hover-animation"
      )}
    >
      <div className="flex flex-col">
        <figcaption className="text-base font-semibold text-white">
          {institution}
        </figcaption>
        <p className="text-sm text-gray-300">{degree}</p>
        <p className="text-xs text-gray-400">{date}</p>
        <blockquote className="mt-2 text-sm text-lavender">
          Grade: {grade}
        </blockquote>
      </div>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">My Education</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((edu, idx) => (
            <EducationCard key={idx} {...edu} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((edu, idx) => (
            <EducationCard key={idx} {...edu} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
