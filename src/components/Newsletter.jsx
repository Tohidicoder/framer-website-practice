import NewsletterImage from "../assets/images/Newsletter.avif";

export default function Newsletter() {
  return (
    <section
      id="contact"
      className="mb-20 rounded-xl border border-gray-200 bg-gray-50 p-5 md:mb-24 md:p-8"
    >
      <div className="flex flex-col gap-7 md:flex-row md:items-center">
        {/* Image */}
        <img
          src={NewsletterImage}
          alt="Newsletter"
          className="h-56 w-full rounded-lg object-cover md:h-64 md:w-[280px]"
        />

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Subscribe to my Newsletter
          </h2>

          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="name@email.com"
              className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base outline-none transition-colors duration-200 focus:border-orange-500"
            />

            <button
              type="submit"
              className="rounded-lg bg-black px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-orange-500"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Sign up to stay updated about my latest work and adventures.
            <i> No Spam, No BS. Promise!</i>
          </p>
        </div>
      </div>
    </section>
  );
}
