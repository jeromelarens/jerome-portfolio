import { projects } from "../data/projects";
import ProjectCard from "../components/project/ProjectCard";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#faf7f4] relative overflow-hidden">

      {/* subtle brand wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C7A183]/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 -right-40 w-[420px] h-[420px]
                        rounded-full bg-[#C7A183]/25 blur-[160px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.div {...fadeUp} className="mb-14">
          <h2 className="text-3xl font-semibold text-[#2b2b2b]">
            Projects
          </h2>
          <div className="mt-3 h-[2px] w-20 bg-[#C7A183] rounded-full" />
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
