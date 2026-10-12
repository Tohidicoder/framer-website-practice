export default function Contact({ darkMode = false }) {
  // Handle Form Submission
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    // Reset Form Fields
    form.reset();

    // Show Success Message
    alert("Thank you! Your message has been submitted.");
  }

  // Shared Theme Classes
  const textColor = darkMode ? "text-white" : "text-gray-900";

  const mutedColor = darkMode ? "text-gray-300" : "text-gray-600";

  const inputStyle = darkMode
    ? "border-gray-700 bg-transparent text-white placeholder:text-gray-500"
    : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400";

  return (
    // Main Contact Section
    <section className={`w-full py-10 sm:py-14 ${textColor}`}>
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[750px]">
        {/* Page Heading */}
        <h1 className="text-5xl font-bold tracking-[-2px] sm:text-6xl md:text-7xl">
          Get in touch
        </h1>

        {/* Introduction Text */}
        <p
          className={`mt-10 text-base leading-8 sm:mt-16 sm:text-lg ${mutedColor}`}
        >
          Have a project in mind, a collaboration to pitch, or just a story from
          the trail to share? Fill out the form below and I’ll get back to you
          as soon as I can.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-12 space-y-6 sm:mt-16">
          {/* Name and Email: Responsive Two-Column Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className={`mb-3 block text-base ${mutedColor}`}
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
                className={`h-[50px] w-full rounded-lg border px-3 outline-none transition focus:border-orange-500 ${inputStyle}`}
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className={`mb-3 block text-base ${mutedColor}`}
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@email.com"
                autoComplete="email"
                required
                className={`h-[50px] w-full rounded-lg border px-3 outline-none transition focus:border-orange-500 ${inputStyle}`}
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className={`mb-3 block text-base ${mutedColor}`}
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project or idea..."
              required
              className={`w-full resize-y rounded-lg border p-3 outline-none transition focus:border-orange-500 ${inputStyle}`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`rounded-lg px-7 py-3 text-base font-medium transition hover:opacity-80 ${
              darkMode ? "bg-white text-black" : "bg-gray-900 text-white"
            }`}
          >
            Send Message
          </button>
        </form>

        {/* Direct Email Contact */}
        <p
          className={`mt-12 text-base leading-7 sm:mt-16 sm:text-lg ${mutedColor}`}
        >
          Prefer email? Reach me directly at{" "}
          <a
            href="mailto:luke@framer.com"
            className="text-orange-500 transition hover:text-orange-400"
          >
            luke@framer.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
