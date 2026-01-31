import Projects from "./Projects";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";

const Home = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="min-h-screen pt-36 flex items-center relative overflow-hidden">

        {/* DARK BRAND BACKGROUND */}
        <div className="absolute inset-0">
          {/* base dark */}
          <div className="absolute inset-0 bg-[#0b0b0b]" />

          {/* depth gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-[#0b0b0b]" />

          {/* brand glows */}
          <div className="absolute -top-48 -left-48 w-[520px] h-[520px]
                          rounded-full bg-[#84563B]/30 blur-[140px]" />
          <div className="absolute top-1/3 -right-48 w-[480px] h-[480px]
                          rounded-full bg-[#C7A183]/25 blur-[140px]" />
        </div>

        <motion.div {...fadeUp} className="relative max-w-5xl mx-auto px-6">
          <p className="code-font uppercase tracking-[0.25em] text-xs text-gray-400">
            Jerome Larens
          </p>

          <p className="mt-3 uppercase tracking-widest text-sm text-gray-400">
            MERN Stack Developer · Backend-Focused Full Stack Engineer
          </p>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-[1.15] text-gray-100">
            I design and build <br />
            <span className="text-[#C7A183]">
              production-ready web systems
            </span>
          </h1>

          <p className="mt-6 text-gray-400 reading">
            Final-year Computer Science engineer specializing in the MERN stack.
            Focused on backend logic, system clarity, and decision-driven development —
            building applications that make sense in interviews and real production.
          </p>

          <p className="mt-4 text-gray-500 italic">
            I don’t chase trends. I design systems that scale and last.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-[#84563B] text-white
                         font-medium hover:scale-[1.03] transition"
            >
              View Projects
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-xl border border-[#C7A183]/40
                         text-gray-300 hover:border-[#C7A183] transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT ME ================= */}

      {/* ================= ABOUT ME ================= */}
      <section id="about" className="snap-section py-24 relative overflow-hidden bg-[#faf7f4]">

        {/* SUBTLE BRAND BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          {/* soft brand gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-b
                 from-[#C7A183]/20 via-transparent to-transparent"
          />

          {/* decorative glow */}
          <div
            className="absolute top-32 -left-40 w-[420px] h-[420px]
                 rounded-full bg-[#C7A183]/25 blur-[160px]"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">

          {/* HEADING */}
          <motion.div {...fadeUp} className="mb-10">
            <h2 className="text-3xl font-semibold text-[#2b2b2b]">
              About Me
            </h2>
            <div className="mt-3 h-[2px] w-20 bg-[#C7A183] rounded-full" />
          </motion.div>

          {/* META ROW */}
          <motion.div
            {...fadeUp}
            className="flex flex-wrap gap-4 text-sm mb-14"
          >
            {["Final Year CSE", "Chennai", "Full Stack Developer"].map((item) => (
              <span
                key={item}
                className="px-4 py-1.5 rounded-full
                     border border-[#C7A183]/40
                     bg-white text-[#4a4a4a]"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-10 max-w-3xl"
          >
            {[
              "I’m a final-year Computer Science Engineering student based in Chennai, focused on building production-ready web applications using the MERN stack with a strong backend emphasis.",
              "I approach development with an engineering mindset — understanding requirements, constraints, and trade-offs before writing code, rather than jumping straight into implementation.",
              "My strength lies in logical clarity and explanation. I’m comfortable explaining system behavior, architectural decisions, and internal flow — not just showing that the code works.",
              "I’m actively seeking a full-time Full Stack Developer role in teams that value clean architecture, thoughtful engineering decisions, and long-term code quality.",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="pl-6 border-l-2 border-[#C7A183]
                     hover:border-l-[4px]
                     transition-all"
              >
                <p className="text-[#444] leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>





      {/* ================= HOW I THINK ================= */}
      <div className="divider my-20" />
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-gray-100">
            How I Approach Engineering Problems
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Understand the Problem", "Clarify requirements and constraints before coding."],
              ["Design First", "Think through APIs, data flow, and responsibilities."],
              ["Trade-offs Matter", "Choose solutions based on context, not trends."],
            ].map(([title, text], i) => (
              <div key={i} className="pl-4 border-l border-[#C7A183]/40">
                <h3 className="font-medium text-lg text-gray-100">{title}</h3>
                <p className="text-gray-400 mt-3">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider my-20" />

      {/* ================= TECH STACK ================= */}
      <section id = "skills" className="snap-section py-24 relative">
        <div className="max-w-5xl mx-auto px-6">

          {/* TITLE */}
          <motion.div {...fadeUp} className="mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#5A3A24]">
              Technical Skills & Strengths
            </h2>
            <div className="mt-3 h-[2px] w-24 bg-[#C7A183]/70 rounded-full" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {[
              { title: "Frontend", skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js"] },
              { title: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
              { title: "Database", skills: ["MongoDB", "PostgreSQL", "SQL"] },
              { title: "Workflow", skills: ["Git", "GitHub", "Postman", "VS Code"] },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-6 rounded-2xl
                     bg-[#C7A183]/10
                     border border-[#C7A183]/30"
              >
                {/* CARD TITLE */}
                <h3 className="font-medium text-lg mb-5 text-[#5A3A24]">
                  {item.title}
                </h3>

                {/* SKILLS */}
                <div className="grid grid-cols-2 gap-3">
                  {item.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 text-sm rounded-lg
                           bg-[#C7A183]/15
                           border border-[#C7A183]/30
                           text-[#2E1E14] font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>




      {/* ================= PROJECTS ================= */}
      <Projects />

      {/* ================= CONTACT ================= */}
<section
  id="contact"
  className="snap-section py-36 bg-[#0b0b0b] relative overflow-hidden"
>
  {/* background depth */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#0b0b0b]" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="max-w-3xl mb-24">
      <span
        className="inline-block mb-6 px-4 py-1.5
                   rounded-full text-sm
                   bg-[#C7A183]/15 text-[#C7A183]
                   border border-[#C7A183]/30"
      >
        Open to Opportunities
      </span>

      <h2 className="text-4xl md:text-5xl font-semibold text-gray-100 leading-[1.15]">
        Interested in working together?
      </h2>

      <p className="mt-6 text-gray-400 leading-relaxed">
        I’m currently exploring full-time opportunities as a
        <span className="text-gray-300 font-medium">
          {" "}MERN Stack / Full Stack Developer
        </span>.
        I’m especially drawn to teams that care about clean architecture,
        backend clarity, and long-term system design.
      </p>
    </div>

    {/* MAIN GRID */}
    <div className="grid md:grid-cols-2 gap-y-20 gap-x-32 items-start">

      {/* LEFT – CONTEXT */}
      <div className="max-w-xl">
        <p className="text-gray-400 leading-relaxed">
          I enjoy working in environments where engineering decisions
          are made thoughtfully — not rushed.
          I’m comfortable contributing as a backend-focused engineer,
          collaborating across the stack, and explaining my design
          choices clearly during technical discussions.
        </p>

        <p className="mt-6 text-gray-500 leading-relaxed">
          Open to on-site or remote roles.
          Based in Chennai and flexible to relocate if needed.
        </p>
      </div>

      {/* RIGHT – ACTION CARD */}
      <div
        className="p-12 rounded-3xl
                   bg-[#111]
                   border border-[#C7A183]/30
                   shadow-lg"
      >
        <h3 className="text-2xl font-medium text-gray-100 mb-10">
          Get in touch
        </h3>

        <ul className="space-y-8 text-gray-400">

          <li>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Email
            </p>
            <a
              href="mailto:jeromelarens7@gmail.com"
              className="text-lg hover:text-[#C7A183] transition"
            >
              jeromelarens7@gmail.com
            </a>
          </li>

          <li>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Phone
            </p>
            <a
              href="tel:6379623208"
              className="text-lg hover:text-[#C7A183] transition"
            >
              +91 6379623208
            </a>
          </li>

          <li>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/jerome-larens-5b244b3a9"
              target="_blank"
              rel="noreferrer"
              className="text-lg hover:text-[#C7A183] transition"
            >
              linkedin.com/in/jerome-larens
            </a>
          </li>
        </ul>

        <div className="mt-12">
          <a
            href="mailto:jeromelarens7@gmail.com"
            className="inline-block w-full text-center
                       px-8 py-4 rounded-xl
                       bg-[#84563B] text-white
                       font-medium hover:scale-[1.02] transition"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </div>

    {/* FOOT NOTE */}
    <p className="mt-28 text-center text-sm text-gray-500">
      Based in Chennai · Open to remote and on-site roles
    </p>
  </div>
</section>



    </>
  );
};

export default Home;
