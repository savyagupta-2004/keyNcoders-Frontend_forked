import React from "react";

const projects = [
  {
    title: "To-do List App",
    description:
      "An easy project to implement CRUD operations and understand data structures such as arrays and lists.",
    image: "/images/todolist.webp", // Replace with actual image path
  },
  {
    title: "Sorting Visualizer",
    description:
      "This project helps to understand various sorting algorithms by visualizing them in real-time.",
    image: "/images/sorting.webp", // Replace with actual image path
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="bg-black min-h-screen p-10">
      <h1 className="text-4xl text-orange-500 font-bold text-center mb-10">
        Project Ideas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#161b22] rounded-lg shadow-md p-4 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl text-orange-500 font-bold mt-4">
              {project.title}
            </h2>
            <p className="text-white mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
