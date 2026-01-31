import { useParams } from "react-router-dom";
import { projectDetails } from "../data/projectDetails";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <section className="py-32 text-center">
        <p className="text-gray-500">Project not found.</p>
      </section>
    );
  }

  return (
    <section className="py-28 bg-[#faf7f4]">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h1
          {...fadeUp}
          className="text-4xl md:text-5xl font-bold text-[#2b2b2b]"
        >
          {project.title}
        </motion.h1>

        {/* ✅ FIX: reading width */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="reading space-y-6 mb-24 mt-16"
        >
          {project.intro.map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-[#555] leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* ✅ FIX: spacing */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {project.sections.map((section, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-10 rounded-2xl
                         bg-white
                         border border-[#C7A183]/30"
            >
              <h2 className="text-2xl font-semibold text-[#2b2b2b] mb-6">
                {section.heading}
              </h2>

              {section.content?.map((text, j) => (
                <p key={j} className="text-[#555] mt-4 leading-relaxed">
                  {text}
                </p>
              ))}

              {section.list && (
                <ul className="mt-6 list-disc list-inside space-y-2 text-[#555]">
                  {section.list.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectDetail;
