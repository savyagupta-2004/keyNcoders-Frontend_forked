// TestimonialCard.js
export default function TestimonialCard({
  name,
  company,
  image,
  logo,
  testimony,
  customsize,
}) {
  return (
    <div className="max-w-xl mx-auto p-6 mb-10 md:mb-4 bg-white dark:bg-[#383232]  shadow-lg rounded-lg">
      <blockquote className="italic text-zinc-600 text-lg dark:text-gray-300">
        {testimony}
      </blockquote>
      <div className="flex justify-between items-center mt-4">
        <div>
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full mx-4 mr-4 border-slate-800 border-[3px]"
          />
          <div className=" text-zinc-700 dark:text-white">{name}</div>
        </div>
        <div className="">
          <div className="flex items-center mt-2">
            <img
              src={logo}
              alt={`${company} Logo`}
              className={`mr-2 w-10  ${customsize === "foribm" && "w-[80px]"} ${
                customsize === "foramazon" && "w-[80px]"
              } ${customsize === "formicrosoft" && "w-[110px]"}`}
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
