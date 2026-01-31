import { motion } from "framer-motion";

const BrandDivider = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "4rem" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-[2px] bg-brand-primary"
    />
  );
};

export default BrandDivider;
