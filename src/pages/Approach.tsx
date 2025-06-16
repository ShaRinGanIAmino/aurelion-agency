const steps = [
  {
    title: "Discovery & Deep Dive",
    description:
      "We begin by truly listening — understanding your business goals, audience, and current challenges. This phase sets the foundation by uncovering insights that fuel the rest of the process.",
    icon: "[Insert Icon Placeholder]",
  },
  {
    title: "Strategic Blueprint",
    description:
      "We transform insights into a tailored roadmap. This includes identifying channels, messaging direction, brand voice, KPIs, and growth milestones.",
    icon: "[Insert Icon Placeholder]",
  },
  {
    title: "Creative Exploration",
    description:
      "Our design team brings ideas to life through moodboards, sketches, and mockups — aligning aesthetic with function and story.",
    icon: "[Insert Icon Placeholder]",
  },
  {
    title: "Content & Production",
    description:
      "We craft high-impact visuals, copy, videos, and assets that emotionally connect with your audience while remaining performance-driven.",
    icon: "[Insert Icon Placeholder]",
  },
  {
    title: "Launch & Deploy",
    description:
      "Your project is launched with care — with testing, optimization, and strategic rollout across the appropriate platforms.",
    icon: "[Insert Icon Placeholder]",
  },
  {
    title: "Refine & Scale",
    description:
      "Our work doesn’t stop after launch. We analyze, optimize, and iterate based on data to scale your results and ensure long-term growth.",
    icon: "[Insert Icon Placeholder]",
  },
];

const Approach = () => {
  return (
    <div className="text-gray-900">
      {/* Hero */}
      <section className="bg-main text-white px-8 py-24 text-center ">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold title">
            Our Signature Approach to Every Project
          </h1>
          <p className="text-lg md:text-xl paragraph mt-10">
            We treat every project with unmatched care and precision. From the
            moment we connect to post-launch growth, each phase is a curated
            journey of collaboration, creativity, and measurable impact.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative px-6 md:px-16 py-20 bg-gray-50">
        <h2 className="text-3xl md:text-5xl text-main font-bold text-center mb-20 title">
          Our Process, Your Success
        </h2>

        <div className="flex flex-col space-y-16 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon + Number */}
              <div className="relative w-24 h-24 min-w-[96px] rounded-full bg-main text-white flex items-center justify-center text-3xl font-bold shadow-lg z-10">
                {idx + 1}
                <div className="absolute w-full h-full rounded-full border-4 border-white/10 animate-pulse blur-sm"></div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold title text-gray-700">
                  {step.title}
                </h3>
                <p className="text-lg paragraph">{step.description}</p>
                <p className="text-sm italic text-gray-400">{step.icon}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-main text-white px-8 py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-5xl font-bold title">
            Ready to Build Something Extraordinary?
          </h3>
          <p className="text-lg md:text-xl paragraph">
            Let’s walk through the journey together and transform your brand
            into a timeless experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Approach;
