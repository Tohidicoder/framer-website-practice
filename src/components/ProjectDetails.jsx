import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "./Work";
import Newsletter from "../components/Newsletter";

export default function ProjectDetails({ darkMode = false }) {
  const { slug } = useParams();

  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];

  if (!project) return <Navigate to="/work" replace />;

  const previousProject = projects[index - 1];
  const nextProject = projects[index + 1];

  //   const bg = darkMode ? "bg-[#0c0c0c]" : "bg-white";
  const bg = "bg-white";
  const heading = darkMode ? "text-[#f5f5f5]" : "text-[#171717]";
  const text = darkMode ? "text-[#bdbdbd]" : "text-[#555]";
  const muted = darkMode ? "text-[#999]" : "text-[#777]";
  const border = darkMode ? "border-[#303030]" : "border-[#dedede]";

  const footerLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Work", "/work"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];

  return (
    <main
      //       className={`min-h-screen w-full min-w-0 transition-colors duration-300 ${bg}`}
      className={`min-h-screen w-full min-w-0 transition-colors duration-300 ${bg}`}
    >
      <div className="mx-auto w-full max-w-5xl px-5 pb-6 pt-7 sm:px-8 sm:pt-9 lg:px-10">
        {/* Breadcrumb and year */}
        <div className="mb-5 flex items-center justify-between gap-3 text-sm sm:text-base">
          <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
            <Link
              to="/work"
              className={`font-semibold transition-colors hover:text-orange-500 ${text}`}
            >
              All Projects
            </Link>

            <span className={muted}>›</span>

            <span className="break-words font-medium text-orange-500">
              {project.title}
            </span>
          </div>

          <span className={`shrink-0 font-medium ${muted}`}>
            🇺🇸 {project.year}
          </span>
        </div>

        {/* Project title */}
        <header className="mb-6 sm:mb-7">
          <h1
            className={`break-words text-5xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-6xl md:text-7xl ${heading}`}
          >
            {project.title}
          </h1>

          {project.text && (
            <p
              className={`mt-5 max-w-3xl text-sm font-medium leading-7 sm:mt-6 sm:text-base sm:leading-8 ${text}`}
            >
              {project.text}
            </p>
          )}
        </header>

        {/* Main image */}
        <div className="mb-6 aspect-[1.85/1] w-full overflow-hidden rounded-[3px] sm:mb-7">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Full project description */}
        <section className="max-w-3xl space-y-4">
          {project.description && (
            <p
              className={`text-sm leading-7 sm:text-base sm:leading-8 ${text}`}
            >
              {project.description}
            </p>
          )}

          {project.details?.map((detail, i) => (
            <p
              key={`${project.slug}-${i}`}
              className={`text-sm leading-7 sm:text-base sm:leading-8 ${text}`}
            >
              {detail}
            </p>
          ))}
        </section>

        {/* Previous / next projects */}
        <nav
          aria-label="Project navigation"
          // className={`mt-8 flex items-center justify-between gap-4 border-t pt-5 text-sm sm:mt-9 sm:pt-6 sm:text-base ${border}`}
          className={`mt-8 flex items-center justify-between gap-4 pt-5 text-sm sm:mt-9 sm:pt-6 sm:text-base ${text}`}
        >
          {previousProject ? (
            <Link
              to={`/work/${previousProject.slug}`}
              className={`font-semibold transition-colors hover:text-orange-500 sm:text-lg ${text}`}
            >
              ‹ {previousProject.title}
            </Link>
          ) : (
            <span />
          )}

          {nextProject && (
            <Link
              to={`/work/${nextProject.slug}`}
              className={`ml-auto text-right font-semibold transition-colors hover:text-orange-500 sm:text-lg ${text}`}
            >
              {nextProject.title} ›
            </Link>
          )}
        </nav>

        {/* Shared newsletter */}
        <div className="mt-9">
          <Newsletter darkMode={darkMode} />
        </div>
      </div>
    </main>
  );
}
