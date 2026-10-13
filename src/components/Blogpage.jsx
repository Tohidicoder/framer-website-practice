import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import blogImage1 from "../assets/images/blog.webp";
import blogImage2 from "../assets/images/blog2.avif";
import blogImage3 from "../assets/images/blog3.avif";
import blogImage4 from "../assets/images/blog4.avif";
import blogImage5 from "../assets/images/blog5.avif";

import Newsletter from "../components/Newsletter";

const posts = [
  {
    slug: "how-built-my-framer-template-empire",
    date: "Jul 2025",
    fullDate: "Jul 12, 2025",
    title: "How I built my Framer template empire",
    description:
      "It started as a weekend experiment — a single landing page template I built for fun. Now, it's a growing collection of design tools for creators and startups.",
    image: blogImage1,
    content: [
      {
        type: "p",
        text: "It started as a weekend experiment — a single landing page template I built for fun. Now, it's a growing collection of design tools for creators, startups, and independent makers.",
      },
      {
        type: "p",
        text: "I wasn't planning to start an empire. I just wanted a clean, fast, and flexible site for a side project. Framer felt like the perfect canvas, so I built something small and launched it.",
      },
      { type: "h", text: "Step 1: Focus on Design" },
      {
        type: "p",
        text: "I focused on clean layouts, smooth animations, and genuinely useful user experiences. I treated every template like a real product, not just a collection of pretty pages.",
      },
      { type: "h", text: "Step 2: Build in Public" },
      {
        type: "p",
        text: "I shared my process online, including early sketches, prototypes, feedback, and the decisions behind my designs. Sharing the journey helped me connect with other creators.",
      },
      { type: "h", text: "Step 3: Create More Value" },
      {
        type: "p",
        text: "I improved the documentation, demos, setup instructions, and examples so customers could understand and customize each template with confidence.",
      },
      { type: "h", text: "Lessons Learned" },
      {
        type: "list",
        items: [
          "Focus on quality before quantity.",
          "Share your process and learn from feedback.",
          "Make the customer experience part of the product.",
          "Keep improving what you have already built.",
        ],
      },
      {
        type: "p",
        text: "What starts as a side project can become a sustainable system. Keep showing up, keep improving, and give your work time to grow.",
      },
    ],
  },

  {
    slug: "my-journey-from-0-to-10k-mrr",
    date: "Jun 2025",
    fullDate: "Jun 11, 2025",
    title: "My journey from $0 to $10K MRR",
    description:
      "Hitting $10K in monthly recurring revenue was never about the money — it was about proving I could build something real, from scratch. Here's how it happened, step by step.",
    image: blogImage2,
    content: [
      {
        type: "p",
        text: "When I started this journey, I had no roadmap — just a vague idea, a laptop, and a strong desire to stop trading hours for dollars. I wanted to build something sustainable, valuable, and mine.",
      },
      { type: "h", text: "Phase 1: $0 – $100/month (The Idea Phase)" },
      {
        type: "p",
        text: "The hardest part was starting. I had a hundred ideas and no traction. What broke the cycle was picking one small problem and solving it for someone real.",
      },
      {
        type: "p",
        text: "My first product was a simple downloadable toolkit for freelancers, based on things I'd created for myself. I made $37 the first week. It felt like I'd struck gold.",
      },
      {
        type: "h",
        text: "Phase 2: $100 – $1,000/month (Finding Real Users)",
      },
      {
        type: "p",
        text: "With validation came motivation. I doubled down on feedback, emailed buyers, improved the product, and added useful templates and tutorials.",
      },
      {
        type: "p",
        text: "I tested pricing, rewrote copy, built a small landing page, and started growing an email list. I also began sharing progress online consistently.",
      },
      {
        type: "h",
        text: "Phase 3: $1,000 – $5,000/month (Building Systems)",
      },
      {
        type: "p",
        text: "I created a subscription version with monthly updates and a members-only content library. I improved onboarding, automated repetitive tasks, and focused on making the business more repeatable.",
      },
      {
        type: "h",
        text: "Phase 4: $5,000 – $10,000/month (Letting Go of Control)",
      },
      {
        type: "p",
        text: "Growth demanded delegation. I documented processes, improved customer support, and invested in better hosting, analytics, and customer experience.",
      },
      {
        type: "p",
        text: "What pushed me across the $10K mark wasn't a marketing hack. It was consistency: showing up, improving the product, and serving the same audience with clarity and care.",
      },
      { type: "h", text: "Lessons Learned" },
      {
        type: "list",
        items: [
          "Start simple and solve one problem well.",
          "Talk to your users and listen to their feedback.",
          "Build a sustainable process instead of chasing every new idea.",
          "Measure progress and keep learning.",
          "Consistency matters more than hype.",
        ],
      },
      {
        type: "p",
        text: "I'm not done. $10K/month is a milestone, not a finish line. You don't need a perfect plan. You need motion, feedback, and time.",
      },
      {
        type: "p",
        text: "Build small. Build honest. Build daily.",
      },
    ],
  },

  {
    slug: "is-vibe-coding-here-to-stay",
    date: "Jun 2025",
    fullDate: "Jun 18, 2025",
    title: "Is vibe coding here to stay?",
    description:
      "AI-assisted development is changing how we build websites, products, and digital experiences. But is it just a trend, or is it here to stay?",
    image: blogImage3,
    content: [
      {
        type: "p",
        text: "The way we build software is changing quickly. AI tools can turn a simple description into a working prototype, making it easier than ever to experiment with new ideas.",
      },
      { type: "h", text: "What Is Vibe Coding?" },
      {
        type: "p",
        text: "Vibe coding is a development workflow where you describe what you want in natural language and use AI tools to help generate or modify code.",
      },
      { type: "h", text: "Speed Is Only Part of the Story" },
      {
        type: "p",
        text: "A working demo is not always a reliable product. Accessibility, performance, security, maintainability, and testing still matter. Generated code needs to be reviewed and understood.",
      },
      { type: "h", text: "The Developer's Role Is Changing" },
      {
        type: "p",
        text: "Developers still need to understand the fundamentals. Clear thinking, debugging, good architecture, and the ability to evaluate solutions are more important than ever.",
      },
      { type: "h", text: "Is It Here to Stay?" },
      {
        type: "p",
        text: "AI-assisted coding is likely to remain part of modern development. The best approach is to use it as a tool while continuing to learn and take responsibility for the final product.",
      },
      { type: "h", text: "Lessons Learned" },
      {
        type: "list",
        items: [
          "Use AI to accelerate experimentation.",
          "Understand the code you ship.",
          "Test the result before publishing.",
          "Keep learning the fundamentals.",
        ],
      },
    ],
  },

  {
    slug: "dont-complain-create-a-guide-to-doing-actual-work",
    date: "May 2025",
    fullDate: "May 20, 2025",
    title: "Don't complain, create!",
    description:
      "Turn frustration into action, make something useful, and learn through the process of building.",
    image: blogImage4,
    content: [
      {
        type: "p",
        text: "It's easy to spend time talking about what's wrong. It's harder — and more rewarding — to turn that frustration into something useful.",
      },
      { type: "h", text: "Start With One Small Problem" },
      {
        type: "p",
        text: "You don't need a perfect plan or a groundbreaking idea. Look for a problem you understand, identify one improvement, and make a small first version.",
      },
      { type: "h", text: "Make Before You Feel Ready" },
      {
        type: "p",
        text: "Waiting for the perfect moment can become a habit. Build a prototype, share it with someone, and use the feedback to decide what to do next.",
      },
      { type: "h", text: "Consistency Beats Complaining" },
      {
        type: "p",
        text: "Progress comes from repeated action. Set a manageable goal, focus on what you can control, and keep improving the work in front of you.",
      },
      { type: "h", text: "A Few Things to Remember" },
      {
        type: "list",
        items: [
          "Focus on solutions rather than blame.",
          "Start small enough that you can begin today.",
          "Ask for feedback and stay open to learning.",
          "Measure progress by what you actually build.",
        ],
      },
      {
        type: "p",
        text: "You don't have to change everything at once. Make something useful, learn from it, and keep going.",
      },
    ],
  },

  {
    slug: "i-m-going-on-a-new-adventure",
    date: "Apr 2025",
    fullDate: "Apr 15, 2025",
    title: "I'm going on a new adventure",
    description:
      "A new chapter, new challenges, and the excitement of exploring what comes next.",
    image: blogImage5,
    content: [
      {
        type: "p",
        text: "Every once in a while, you reach a point where the familiar starts to feel a little too comfortable. That's when a new adventure begins to sound exciting.",
      },
      { type: "h", text: "A New Chapter" },
      {
        type: "p",
        text: "Starting something new means accepting that you won't have every answer. It means making room for unexpected opportunities and learning as you go.",
      },
      { type: "h", text: "What Comes Next" },
      {
        type: "p",
        text: "I'm looking forward to exploring new ideas, meeting new people, and building things that challenge me to grow.",
      },
      { type: "h", text: "Keep Moving Forward" },
      {
        type: "p",
        text: "You don't need to know every step before you begin. Sometimes the best way to discover what's next is to take the first step.",
      },
    ],
  },
];

export default function BlogPage({ darkMode = false }) {
  const { slug } = useParams();

  const post = posts.find((item) => item.slug === slug);
  const isArticle = Boolean(slug);

  const bg = darkMode ? "bg-[#0c0c0c]" : "bg-white";
  const heading = darkMode ? "text-white" : "text-gray-950";
  const body = darkMode ? "text-[#c2c2c2]" : "text-gray-600";
  const border = darkMode ? "border-[#333]" : "border-gray-200";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  const renderContent = (article) =>
    article.content.map((block, index) => {
      if (block.type === "h") {
        return (
          <h2
            key={index}
            className={`pt-3 text-xl font-semibold leading-tight tracking-tight ${heading} sm:text-2xl`}
          >
            {block.text}
          </h2>
        );
      }

      if (block.type === "list") {
        return (
          <ul
            key={index}
            className="list-disc space-y-2 pl-6 marker:text-orange-500"
          >
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      }

      return <p key={index}>{block.text}</p>;
    });

  // Article not found
  if (isArticle && !post) {
    return (
      <main
        className={`${bg} ${heading} blog-page-enter flex min-h-screen flex-col items-center justify-center px-5 py-20 text-center`}
      >
        <h1 className="mb-4 text-3xl font-semibold">Article not found</h1>

        <p className={`mb-6 ${body}`}>
          Sorry, we couldn't find the article you're looking for.
        </p>

        <Link
          to="/blog"
          className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-orange-600"
        >
          Back to Blog
        </Link>
      </main>
    );
  }

  // Single article page
  if (isArticle && post) {
    return (
      <main
        className={`${bg} ${heading} blog-page-enter min-h-screen px-5 pb-16 pt-8 sm:px-8 sm:pt-12`}
      >
        <article className="mx-auto w-full max-w-[780px]">
          <div className={`mb-8 border-b pb-5 ${border}`}>
            <Link
              to="/work"
              className={`inline-flex items-center gap-2 text-sm transition-colors duration-300 hover:text-orange-500 ${body}`}
            >
              <span aria-hidden="true">←</span>
              Back to all posts
            </Link>

            <div
              className={`mt-5 flex flex-wrap items-center gap-2 text-xs ${body}`}
            >
              <Link
                to="/"
                className="transition-colors duration-300 hover:text-orange-500"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                to="/blog"
                className="transition-colors duration-300 hover:text-orange-500"
              >
                Blog
              </Link>

              <span>/</span>

              <span className="text-orange-500">Article</span>
            </div>
          </div>

          <header className="mb-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-500">
                Article
              </span>

              <time className={`text-xs ${body}`}>{post.fullDate}</time>
            </div>

            <h1 className="mb-6 text-[clamp(2.3rem,6vw,4rem)] font-semibold leading-[1.08] tracking-[-0.045em]">
              {post.title}
            </h1>

            <p className={`text-base leading-8 sm:text-lg ${body}`}>
              {post.description}
            </p>
          </header>

          <figure className="group mb-10 overflow-hidden rounded-xl">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </figure>

          <div
            className={`space-y-6 text-[15px] leading-8 sm:text-base sm:leading-9 ${body}`}
          >
            {renderContent(post)}
          </div>

          <div className={`mt-12 border-t pt-6 ${border}`}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-orange-500 px-5 py-3 text-sm font-medium text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white"
            >
              <span aria-hidden="true">←</span>
              Back to Blog
            </Link>
          </div>

          {/* The newsletter always uses Newsletter.avif */}
          <Newsletter />
        </article>
      </main>
    );
  }

  // Main blog listing page
  return (
    <main
      className={`${bg} ${heading} blog-page-enter mx-auto min-h-screen w-full max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 md:pb-20 md:pt-20`}
    >
      <section className="mb-8">
        <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-tight tracking-tight">
          My Blog
        </h1>
      </section>

      <section className={`mb-10 max-w-[850px] space-y-4 sm:mb-12 ${body}`}>
        <p className="text-base font-medium leading-relaxed sm:text-lg">
          Welcome to my favourite little corner on this website.
        </p>

        <p className="text-base leading-relaxed sm:text-lg">
          Here’s where I share stories from the road, reflections on creativity,
          and insights from the ever-evolving adventure of building, exploring,
          and growing.
        </p>
      </section>

      {/* Consistent, responsive blog hero image */}
      <section className="group mb-12 overflow-hidden rounded-xl sm:mb-14">
        <img
          src={blogImage1}
          alt="Featured blog article"
          className="aspect-[16/9] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:aspect-[2/1]"
        />
      </section>

      <section aria-labelledby="latest-posts-heading">
        <div className={`border-b pb-3 ${border}`}>
          <h2
            id="latest-posts-heading"
            className="text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Latest Posts
          </h2>
        </div>

        {posts.map((item) => (
          <Link
            key={item.slug}
            to={`/blog/${item.slug}`}
            className={`group flex min-w-0 items-start gap-3 border-b py-5 transition-all duration-300 ease-out hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:gap-6 sm:py-6 ${border}`}
          >
            <span
              className={`w-[70px] shrink-0 pt-1 text-xs transition-colors duration-300 sm:w-20 sm:text-sm ${body} group-hover:text-orange-500`}
            >
              {item.date}
            </span>

            <span
              className={`min-w-0 flex-1 text-sm font-medium leading-snug transition-colors duration-300 sm:text-base md:text-lg ${heading} group-hover:text-orange-500`}
            >
              {item.title}
            </span>

            <span
              aria-hidden="true"
              className="shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500"
            >
              ↗
            </span>
          </Link>
        ))}
      </section>

      {/* The same newsletter component and fixed image on the blog page */}
      <Newsletter />
    </main>
  );
}
