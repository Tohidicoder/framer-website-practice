// import trailtype from "../assets/images/trail.avif";
// import sparkSessions from "../assets/images/spark.avif";
// import intoTheWild from "../assets/images/wild.avif";

// export default function Projects() {
//   const projects = [
//     {
//       year: "2026",
//       image: trailtype,
//       title: "TrailType",
//       text: "Modern design inspired by the great outdoors.",
//       url: "https://prive.framer.website/work/trailtype",
//     },
//     {
//       year: "2026",
//       image: sparkSessions,
//       title: "The Spark Sessions",
//       text: "A podcast for creators chasing meaningful work.",
//       url: "https://prive.framer.website/work/spark-sessions",
//     },
//     {
//       year: "2025",
//       image: intoTheWild,
//       title: "Into the Wild",
//       text: "A raw journey through nature’s extremes.",
//       url: "https://prive.framer.website/work/into-the-wild",
//     },
//   ];

//   return (
//     <section id="work" className="pb-20 md:pb-28">
//       {/* Section Header */}
//       <div className="flex items-end justify-between border-b border-black pb-4">
//         <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
//           Latest Projects
//         </h2>

//         <a
//           href="/work"
//           className="text-sm font-medium transition-colors duration-200 hover:text-orange-500 md:text-base"
//         >
//           View all
//         </a>
//       </div>

//       {/* Projects */}
//       <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project) => (
//           <a
//             href={project.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             key={project.title}
//             aria-label={`${project.title} - Open project in a new tab`}
//             className="group block"
//           >
//             {/* Image */}
//             <div className="relative overflow-hidden rounded-lg">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 loading="lazy"
//                 className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//               />

//               {/* Year */}
//               <span className="absolute left-3 top-2 text-5xl font-light text-white/70 transition-colors duration-300 group-hover:text-white">
//                 {project.year}
//               </span>
//             </div>

//             {/* Title */}
//             <h3 className="mt-4 text-xl font-bold transition-colors duration-200 group-hover:text-orange-500 md:text-2xl">
//               {project.title}
//             </h3>

//             {/* Description */}
//             <p className="mt-2 text-base leading-relaxed text-gray-600 md:text-lg">
//               {project.text}
//             </p>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";

import trailtype from "../assets/images/trail.avif";
import sparkSessions from "../assets/images/spark.avif";
import intoTheWild from "../assets/images/wild.avif";

export default function Projects() {
  const projects = [
    {
      year: "2026",
      image: trailtype,
      title: "TrailType",
      text: "Modern design inspired by the great outdoors.",
      slug: "trailtype",
    },
    {
      year: "2026",
      image: sparkSessions,
      title: "The Spark Sessions",
      text: "A podcast for creators chasing meaningful work.",
      slug: "spark-sessions",
    },
    {
      year: "2025",
      image: intoTheWild,
      title: "Into the Wild",
      text: "A raw journey through nature’s extremes.",
      slug: "into-the-wild",
    },
  ];

  return (
    <section id="work" className="pb-20 md:pb-28">
      {/* Section Header */}
      <div className="flex items-end justify-between border-b border-black pb-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Latest Projects
        </h2>

        <Link
          to="/work"
          className="text-sm font-medium transition-colors duration-200 hover:text-orange-500 md:text-base"
        >
          View all
        </Link>
      </div>

      {/* Projects */}
      <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            to={`/work/${project.slug}`}
            key={project.slug}
            aria-label={`View ${project.title} project details`}
            className="group block"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Year */}
              <span className="absolute left-3 top-2 text-5xl font-light text-white/70 transition-colors duration-300 group-hover:text-white">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-bold transition-colors duration-200 group-hover:text-orange-500 md:text-2xl">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-base leading-relaxed text-gray-600 md:text-lg">
              {project.text}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
