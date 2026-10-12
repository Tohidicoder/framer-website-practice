export default function Hero() {
  return (
    <section id="about" className="pb-16 pt-10 md:pb-24 md:pt-14">
      {/* Name */}
      <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.05em]">
        Luke Williams
      </h1>

      {/* Info */}
      <div className="mt-5 flex flex-col gap-2 text-sm font-semibold sm:flex-row sm:items-center sm:justify-between sm:text-base">
        <h3>Founder - Matrix Designs</h3>

        <h3>📍 New York</h3>
      </div>

      {/* Description */}
      <div className="mt-14 max-w-[850px]">
        <p className="text-lg leading-[1.6] md:text-xl">
          Hi there! I’m an adventurer based in New York, with a background in
          the entertainment industry. These days, I’m driven by a love for
          creativity and innovation, constantly exploring new ways to connect
          ideas and build something meaningful.
        </p>

        <p className="mt-5 text-lg leading-[1.6] md:text-xl">
          When I’m not immersed in my projects, you’ll find me outdoors -
          scaling rock faces, hiking scenic trails, and embracing the energy of
          nature.
        </p>
      </div>
    </section>
  );
}
