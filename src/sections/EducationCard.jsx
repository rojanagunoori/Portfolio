import { education } from "../constants";

const EducationCard = ({ institution, degree, date, grade }) => {
  return (
    <div className="relative w-full max-w-md p-6 rounded-xl border border-gray-50/[.1] bg-gradient-to-r from-indigo-900 to-storm hover:from-purple-800 hover:to-indigo-700 hover:scale-105 transition-transform duration-300">
      <h3 className="text-lg font-semibold text-white">{institution}</h3>
      <p className="text-sm text-gray-300">{degree}</p>
      <p className="text-xs text-gray-400 mt-1">{date}</p>
      <p className="mt-2 text-sm font-medium text-lavender">Grade: {grade}</p>
    </div>
  );
};

export default function Education() {
  return (
    <div className="items-start mt-20 md:mt-28 c-space">
      <h2 className="text-heading">My Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {education.map((edu, idx) => (
          <EducationCard key={idx} {...edu} />
        ))}
      </div>
    </div>
  );
}
