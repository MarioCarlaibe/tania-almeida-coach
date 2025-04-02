import { motion } from "framer-motion";

export const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};