import { AnimatePresence, motion } from "motion/react";

export const Quote = ({
  vis,
  children,
}: {
  vis: boolean;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {vis && (
        <motion.div
          className="rounded-full p-3 text-secondary border-4 border-solid border-tertiary"
          initial={{ border: "solid 0px tertiary", opacity: 0 }}
          animate={{
            border: "solid 4px inherit",
            opacity: 1,
            y: [-25, 0],
          }}
          exit={{
            border: "solid 0px inherit",
            opacity: 0,
            y: -25,
            transition: {
              duration: 0.5,
              delay: 0.5,
              ease: "easeInOut",
            },
          }}
        >
          <motion.p
            animate={{
              opacity: [0, 1],
              transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
