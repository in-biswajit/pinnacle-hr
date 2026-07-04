"use client";

import { motion, type Variants } from "framer-motion";

type MotionDivProps = React.ComponentProps<typeof motion.div>;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Reveal({ delay = 0, ...props }: MotionDivProps & { delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={revealVariants}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      {...props}
    />
  );
}

const staggerContainerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function StaggerGroup(props: MotionDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainerVariants}
      {...props}
    />
  );
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function StaggerItem(props: MotionDivProps) {
  return <motion.div variants={staggerItemVariants} {...props} />;
}
