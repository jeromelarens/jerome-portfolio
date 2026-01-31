import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="h-full p-6 rounded-2xl
                   bg-[#faf7f4]
                   border border-[#C7A183]/30
                   hover:border-[#C7A183]
                   transition-all"
      >
        <p className="text-xs uppercase tracking-widest text-[#84563B] mb-2">
          {project.type}
        </p>

        <h3 className="text-xl font-semibold text-[#2b2b2b]">
          {project.title}
        </h3>

        {/* ✅ FIX: hierarchy */}
        <p className="mt-4 text-[#555] text-[15px] leading-[1.65]">
          {project.shortDescription}
        </p>

        {/* ✅ FIX: CTA spacing */}
        <p className="mt-8 text-sm font-medium tracking-wide text-[#84563B]">
          View case study →
        </p>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
