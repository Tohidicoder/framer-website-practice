import about1 from "../assets/images/about1.avif";
import about2 from "../assets/images/about2.avif";
import NewsletterImage from "../assets/images/Newsletter.avif";

export default function About({ darkMode }) {
  const headingColor = darkMode ? "text-white" : "text-black";
  const bodyColor = darkMode ? "text-neutral-300" : "text-neutral-600";

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <section className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        {/* About Content */}
        <h1
          className={`mb-8 text-4xl font-bold tracking-tight transition-colors duration-300 sm:text-5xl lg:text-6xl ${headingColor}`}
        >
          About me
        </h1>

        <div
          className={`mb-8 space-y-5 text-base leading-7 transition-colors duration-300 sm:text-lg sm:leading-8 ${bodyColor}`}
        >
          <p>
            An adventurer and creative explorer currently based in New York.
          </p>

          <p>
            With a rich background in the entertainment industry, I've spent
            years honing my skills in storytelling, production, and innovation.
            But today, my passion lies in blending creativity with purpose —
            finding new, impactful ways to connect ideas, spark conversation,
            and build meaningful projects that leave a lasting impression.
          </p>
        </div>

        <img
          src={about1}
          alt="Filmmaker capturing the ocean"
          className="mb-9 block h-auto w-full rounded-sm object-cover"
          loading="lazy"
        />

        <div
          className={`mb-9 space-y-5 text-base leading-7 transition-colors duration-300 sm:text-lg sm:leading-8 ${bodyColor}`}
        >
          <p>
            Throughout my career, I've always been driven by a desire to break
            boundaries, whether that means pushing the limits of what's possible
            in media or venturing into the unknown in my personal life. I'm a
            firm believer that creativity isn't just about thinking outside the
            box; it's about reinventing the box itself.
          </p>

          <p>
            In my work, I focus on combining fresh ideas with practical
            solutions to create something unique that resonates on both an
            emotional and intellectual level. When I'm not immersed in creative
            projects, you'll likely find me in the great outdoors. Whether I'm
            scaling rock faces, hiking through remote landscapes, or simply
            soaking in the energy of nature, I thrive in environments that
            challenge both my body and mind. To me, life is all about climbing
            to new heights—both literally and figuratively. Every hike, every
            ascent, is a reminder that growth comes from embracing challenges
            and stepping outside your comfort zone.
          </p>
        </div>

        <img
          src={about2}
          alt="Hiker overlooking a green mountain landscape"
          className="mb-9 block h-auto w-full rounded-sm object-cover"
          loading="lazy"
        />

        <div
          className={`space-y-5 text-base leading-7 transition-colors duration-300 sm:text-lg sm:leading-8 ${bodyColor}`}
        >
          <p>
            I'm always looking for new ways to merge my passions for creativity,
            exploration, and innovation. If you're interested in collaborating,
            or just want to share stories about the latest adventure, I'd love
            to connect!
          </p>

          <p>
            You can also read more about my work{" "}
            <a
              href="/work"
              className={`font-semibold underline-offset-4 transition-colors hover:underline ${
                darkMode ? "text-orange-400" : "text-orange-600"
              }`}
            >
              here
            </a>
            .
          </p>
        </div>

        {/* Newsletter — No Footer */}
        <section
          id="contact"
          className={`mt-16 rounded-xl border p-5 transition-colors duration-300 sm:p-7 ${
            darkMode
              ? "border-neutral-800 bg-neutral-900"
              : "border-neutral-200 bg-neutral-50"
          }`}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <img
              src={NewsletterImage}
              alt="Newsletter"
              className="h-52 w-full rounded-lg object-cover md:h-60 md:w-[260px]"
              loading="lazy"
            />

            <div className="min-w-0 flex-1">
              <h2
                className={`text-2xl font-bold tracking-tight transition-colors duration-300 sm:text-3xl ${headingColor}`}
              >
                Subscribe to my Newsletter
              </h2>

              <p className={`mt-3 text-sm leading-6 sm:text-base ${bodyColor}`}>
                Sign up to stay updated about my latest work and adventures. No
                spam, no BS. Promise!
              </p>

              <form
                className="mt-5 flex flex-col gap-3 sm:flex-row"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="name@email.com"
                  aria-label="Email address"
                  required
                  className={`min-w-0 flex-1 rounded-lg border px-4 py-3 text-base outline-none transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 ${
                    darkMode
                      ? "border-neutral-700 bg-black text-white placeholder:text-neutral-500"
                      : "border-neutral-300 bg-white text-black placeholder:text-neutral-400"
                  }`}
                />

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center rounded-lg bg-gray-200 px-6 py-3 text-base font-semibold text-gray-900 transition-colors duration-200 hover:bg-orange-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
