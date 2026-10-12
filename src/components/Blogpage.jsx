import blogImage from "../assets/images/blog.webp";

export default function Blog({ darkMode = false }) {
  const posts = [
    {
      date: "Jul 2025",
      title: "How I built my Framer template empire",
      url: "https://prive.framer.website/blog/how-built-my-framer-template-empire",
    },
    {
      date: "Jun 2025",
      title: "My journey from $0 to $10K MRR",
      url: "https://prive.framer.website/blog/my-journey-from-0-to-10k-mrr",
    },
    {
      date: "Jun 2025",
      title: "Is vibe coding here to stay?",
      url: "https://prive.framer.website/blog/is-vibe-coding-here-to-stay",
    },
    {
      date: "May 2025",
      title: "Don't complain, create!",
      url: "https://prive.framer.website/blog/dont-complain-create-a-guide-to-doing-actual-work",
    },
    {
      date: "Apr 2025",
      title: "I'm going on a new adventure",
      url: "https://prive.framer.website/blog/i-m-going-on-a-new-adventure",
    },
  ];

  const headingColor = darkMode ? "text-white" : "text-gray-900";
  const bodyColor = darkMode ? "text-gray-300" : "text-gray-600";
  const borderColor = darkMode ? "border-gray-800" : "border-gray-200";

  return (
    <main
      className={`mx-auto w-full min-w-0 max-w-5xl px-5 pb-14 pt-12 sm:px-8 sm:pt-16 md:pb-20 md:pt-20 ${headingColor}`}
    >
      {/* Page heading */}
      <section className="mb-6 sm:mb-8">
        <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-tight tracking-tight">
          My Blog
        </h1>
      </section>

      {/* Introduction */}
      <section className={`mb-8 max-w-[850px] space-y-4 sm:mb-10 ${bodyColor}`}>
        <p className="text-base font-medium leading-[1.6] sm:text-lg">
          Welcome to my favourite little corner on this website.
        </p>

        <p className="text-base font-normal leading-[1.6] sm:text-lg">
          Here’s where I share stories from the road, reflections on creativity,
          and insights from the ever-evolving adventure of building, exploring,
          and growing. Whether it's lessons from the wild or thoughts sparked by
          late-night brainstorming sessions, this space captures the journey in
          motion.
        </p>
      </section>

      {/* Featured image */}
      <section className="mb-10 sm:mb-12">
        <div className="w-full overflow-hidden rounded-md">
          <img
            src={blogImage}
            alt="Creative inspiration and stories from my journey"
            loading="lazy"
            className="aspect-[2/1] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </section>

      {/* Latest posts */}
      <section aria-labelledby="latest-posts-heading">
        <div className={`border-b pb-3 ${borderColor}`}>
          <h2
            id="latest-posts-heading"
            className="text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Latest Posts
          </h2>
        </div>

        <div>
          {posts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${post.title} (opens in a new tab)`}
              className={`group flex min-w-0 items-start gap-3 border-b py-4 transition-colors duration-300 sm:gap-6 sm:py-5 ${borderColor}`}
            >
              {/* Publication date */}
              <span
                className={`w-[70px] shrink-0 pt-1 text-xs transition-colors duration-300 sm:w-20 sm:text-sm ${bodyColor} group-hover:text-orange-500`}
              >
                {post.date}
              </span>

              {/* Post title */}
              <h3
                className={`min-w-0 flex-1 text-sm font-medium leading-snug transition-colors duration-300 sm:text-base md:text-lg ${headingColor} group-hover:text-orange-500`}
              >
                {post.title}
              </h3>

              {/* External link arrow */}
              <span
                aria-hidden="true"
                className="shrink-0 pt-0.5 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
