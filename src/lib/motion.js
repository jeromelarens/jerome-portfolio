export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
