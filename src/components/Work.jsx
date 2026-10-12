import { Link } from "react-router-dom";

import trailtype from "../assets/images/trail.avif";
import sparkSessions from "../assets/images/spark.avif";
import intoTheWild from "../assets/images/wild.avif";
import card4 from "../assets/images/card4.avif";
import card5 from "../assets/images/card5.avif";
import card6 from "../assets/images/card6.avif";

export const projects = [
  {
    slug: "trailtype",
    year: "2026",
    image: trailtype,
    title: "TrailType",
    cardText: "Modern design inspired by the great outdoors.",
    text: "TrailType brings typography and outdoor adventure together through creative fonts and design assets inspired by mountains, forests, and climbing.",
    description:
      "This project explores seasonal design collections featuring custom fonts, logo templates, and UI mockups inspired by nature.",
    details: [
      "Each collection includes design resources inspired by natural textures, mountain landscapes, and outdoor adventures.",
      "The project also includes workshops and practical guides to help designers use these resources in their own creative work.",
    ],
  },
  {
    slug: "spark-sessions",
    year: "2026",
    image: sparkSessions,
    title: "The Spark Sessions",
    cardText: "A podcast for creators chasing meaningful work.",
    text: "The Spark Sessions is a conversation series with artists, builders, and creative thinkers who share the ideas and experiences behind their work.",
    description:
      "Through podcast episodes and blog posts, the project explores creative routines, challenges, and meaningful breakthroughs.",
    details: [
      "Each session shares honest conversations, useful resources, recommendations, and practical lessons for people developing their creative ideas.",
      "The Spark Sessions combines inspiration with actionable insights to help creators keep moving forward.",
    ],
  },
  {
    slug: "into-the-wild",
    year: "2025",
    image: intoTheWild,
    title: "Into the Wild",
    cardText: "A raw journey through nature’s extremes.",
    text: "Into the Wild is a reflective expedition into remote landscapes - where the noise fades and the self sharpens. It’s about disappearing into the natural world to reconnect with something deeper.",
    description:
      "This project began as a solo trek through national parks and alpine ranges, but quickly evolved into a journal of transformation.",
    details: [
      "Through longform essays, analog photography, and field recordings, I document the tension between solitude and serenity - the moments of stillness, exhaustion, wonder, and clarity that only arrive when you're far from comfort. Each entry explores not just where I went, but what shifted inside me while I was there: shedding distractions, confronting fear, rediscovering focus.",
      "Into the Wild isn’t about conquering nature; it’s about letting it strip you back to your essentials. Trail maps, gear lists, and emotional check-ins accompany each story for anyone inspired to step off-grid - not just physically, but mentally.",
    ],
  },
  {
    slug: "voices-of-the-city",
    year: "2025",
    image: card4,
    title: "Voices of the City",
    cardText: "An audio-visual documentary of urban stories.",
    text: "Voices of the City captures human moments from streets, subways, rooftops, and cafés, exploring the rhythm and stories of urban life.",
    description:
      "This project combines field recordings, portrait photography, and spoken word to capture the emotional experience of city living.",
    details: [
      "Interviews and original reflections explore identity, struggle, resilience, and beauty across different communities.",
      "Each story combines sound, photography, and written reflections to create an immersive documentary experience.",
    ],
  },
  {
    slug: "climb-club",
    year: "2024",
    image: card5,
    title: "Climb Club",
    cardText: "Community through vertical movement.",
    text: "Climb Club brings together climbers, filmmakers, and writers through outdoor adventures, creative projects, and collaboration.",
    description:
      "The project hosts themed climbing events and creative expeditions that bring different communities together.",
    details: [
      "Mini-documentaries, gear reviews, interviews, and workshops share the experiences and skills of the community.",
      "The goal is to create a supportive network where members can learn from each other and develop new creative ideas.",
    ],
  },
  {
    slug: "frame-by-frame",
    year: "2024",
    image: card6,
    title: "Frame by Frame",
    cardText: "A visual journal through short-form storytelling.",
    text: "Frame by Frame explores short films that capture slices of life and imagination through concise visual storytelling.",
    description:
      "Each release combines evocative imagery with ambient sound or minimal dialogue, exploring lighting, color, and camera techniques.",
    details: [
      "Some films explore urban solitude, while others focus on natural details and everyday moments.",
      "Behind-the-scenes breakdowns share the creative process, from initial storyboards to the final edit.",
    ],
  },
];

export default function Work({ darkMode }) {
  const headingColor = darkMode ? "text-white" : "text-gray-900";
  const bodyColor = darkMode ? "text-gray-300" : "text-gray-600";
  const borderColor = darkMode ? "border-gray-800" : "border-gray-200";

  return (
    <main className="w-full min-w-0 pb-12 pt-8 sm:pb-14 sm:pt-10 md:pt-12">
      <section className="mx-auto mb-10 max-w-5xl px-5 sm:mb-12 sm:px-8">
        <h1
          className={`mb-7 text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-tight tracking-tight sm:mb-8 ${headingColor}`}
        >
          My Work
        </h1>

        <div
          className={`max-w-[850px] space-y-4 text-base font-medium leading-[1.7] sm:text-lg sm:leading-[1.6] ${bodyColor}`}
        >
          <p>My work is driven by a passion for creativity and innovation.</p>

          <p>
            With a background in the entertainment industry, I specialise in
            crafting unique, impactful projects that tell compelling stories and
            connect people in meaningful ways. I thrive on exploring new ideas,
            pushing boundaries, and building solutions that not only engage but
            inspire.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className={`mb-5 border-b pb-3 ${borderColor}`}>
          <h2
            className={`text-xl font-semibold tracking-tight sm:text-2xl ${headingColor}`}
          >
            All Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-9">
          {projects.map((project) => (
            <article key={project.slug} className="group min-w-0">
              <Link
                to={`/work/${project.slug}`}
                aria-label={`View ${project.title}`}
                className="relative block overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-[1.6/1] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />

                <span className="pointer-events-none absolute inset-x-0 top-3 text-center text-3xl font-light tracking-wide text-white/60 sm:top-4 sm:text-4xl">
                  {project.year}
                </span>
              </Link>

              <div className="mt-3 flex items-center justify-between gap-3">
                <h3 className="min-w-0">
                  <Link
                    to={`/work/${project.slug}`}
                    className={`text-base font-semibold transition-colors duration-300 group-hover:text-orange-500 focus-visible:text-orange-500 sm:text-lg ${headingColor}`}
                  >
                    {project.title}
                  </Link>
                </h3>

                <Link
                  to={`/work/${project.slug}`}
                  aria-label={`Open ${project.title}`}
                  title={`Open ${project.title}`}
                  className="flex h-7 w-7 shrink-0 items-center justify-center border border-gray-300 text-gray-500 opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 dark:border-gray-700"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </Link>
              </div>

              <p
                className={`mt-1 max-w-sm text-sm font-normal leading-5 sm:leading-6 ${bodyColor}`}
              >
                {project.cardText}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`mx-auto mt-12 max-w-5xl border-t px-5 pt-7 sm:mt-14 sm:px-8 sm:pt-8 ${borderColor}`}
      >
        <div className="max-w-3xl space-y-4">
          <p
            className={`text-sm leading-6 sm:text-base sm:leading-7 ${bodyColor}`}
          >
            Whether it's in the world of media, production, or creative
            consulting, my focus is always on creating work that resonates —
            pushing the limits of what's possible while staying rooted in
            authenticity and purpose.
          </p>

          <p
            className={`text-sm leading-6 sm:text-base sm:leading-7 ${bodyColor}`}
          >
            If you'd like to connect for work queries or collaborations, please{" "}
            <Link
              to="/contact"
              className="font-medium text-orange-500 underline decoration-orange-500 underline-offset-4 transition-colors duration-300 hover:text-orange-600"
            >
              get in touch
            </Link>
            . I also write a weekly newsletter to share my experiences. Do join
            if you'd like to read more about my adventures.
          </p>
        </div>
      </section>
    </main>
  );
}
