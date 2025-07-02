import { AnimatePresence, motion } from "motion/react";

export const Quote = ({ vis }: { vis: boolean }) => {
  return (
    <AnimatePresence>
      {vis && (
        <motion.div
          className="rounded-full"
          initial={{ border: "solid 0px black", opacity: 0 }}
          animate={{
            border: "solid 4px black",
            opacity: 1,
            y: [-25, 0],
          }}
          exit={{
            border: "solid 0px black",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            id, ratione provident porro ex omnis voluptates quos, maiores eaque
            quia vitae, ad voluptatum doloribus aperiam eveniet repellat
            laudantium necessitatibus molestiae?
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
