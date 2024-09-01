// TestimonialCard.js
export default function StudentsReviewCard({
  name,
  company,
  image,
  logo,
  testimony,
}) {
  return (
    <div className="max-w-xl mx-auto p-6 mb-10 md:mb-4 bg-white dark:bg-[#383232]  shadow-lg rounded-lg">
      <blockquote className="italic text-zinc-600 text-lg dark:text-gray-300">
        {testimony}
      </blockquote>
      <div className="flex items-center mt-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-16 rounded-full mr-4 border-slate-800 border-[3px]"
        />
        <div>
          <div className="ml-1 text-zinc-700 dark:text-white">{name}</div>
          <div className="flex items-center">
            <img
              src={logo}
              alt={`${company} Logo`}
              className="mr-2 w-10 rounded-full"
            />
            <span className="text-zinc-900 dark:text-white font-semibold">
              {company}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
