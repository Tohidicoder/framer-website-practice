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

  return (
    <section id="blog" className="pb-20 pt-10 md:pb-28">
      <div
        className={`flex items-end justify-between border-b pb-4 ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Latest Posts
        </h2>

        <a
          href="https://prive.framer.website/blog"
          className="text-sm transition-colors hover:text-orange-500 md:text-base"
        >
          View all
        </a>
      </div>

      <div>
        {posts.map((post) => (
          <a
            href={post.url}
            key={post.url}
            className={`group flex gap-5 border-b py-5 transition-colors sm:gap-8 ${
              darkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <p
              className={`w-[70px] shrink-0 text-sm sm:w-20 sm:text-base ${
                darkMode ? "text-gray-400" : "text-gray-500"
              } group-hover:text-orange-500`}
            >
              {post.date}
            </p>

            <h3
              className={`text-lg font-medium leading-snug md:text-xl ${
                darkMode ? "text-white" : "text-black"
              } group-hover:text-orange-500`}
            >
              {post.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
