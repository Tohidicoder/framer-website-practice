import { Link } from "react-router-dom";

export default function Blog({ darkMode = false }) {
  const posts = [
    {
      date: "Jul 2025",
      title: "How I built my Framer template empire",
      slug: "how-built-my-framer-template-empire",
    },
    {
      date: "Jun 2025",
      title: "My journey from $0 to $10K MRR",
      slug: "my-journey-from-0-to-10k-mrr",
    },
    {
      date: "Jun 2025",
      title: "Is vibe coding here to stay?",
      slug: "is-vibe-coding-here-to-stay",
    },
    {
      date: "May 2025",
      title: "Don't complain, create!",
      slug: "dont-complain-create-a-guide-to-doing-actual-work",
    },
    {
      date: "Apr 2025",
      title: "I'm going on a new adventure",
      slug: "i-m-going-on-a-new-adventure",
    },
  ];

  return (
    <section id="blog" className="pb-20 pt-10 md:pb-28">
      <div
        className={`flex items-end justify-between border-b pb-4 ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        {" "}
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Latest Posts{" "}
        </h2>
        <Link
          to="/blog"
          className="text-sm font-medium transition-colors hover:text-orange-500 md:text-base"
        >
          View all
        </Link>
      </div>

      <div>
        {posts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.slug}
            className={`group flex gap-5 border-b py-5 transition-colors sm:gap-8 ${
              darkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <p
              className={`w-[70px] shrink-0 text-sm transition-colors sm:w-20 sm:text-base ${
                darkMode ? "text-gray-400" : "text-gray-500"
              } group-hover:text-orange-500`}
            >
              {post.date}
            </p>

            <h3
              className={`text-lg font-medium leading-snug transition-colors md:text-xl ${
                darkMode ? "text-white" : "text-black"
              } group-hover:text-orange-500`}
            >
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
