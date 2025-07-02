import { motion } from "framer-motion";
import { Quote } from "./chatBubble";
import { useState } from "react";

export const Bio = ({
  imgUrl,
  name,
  children,
}: {
  imgUrl: string;
  name: string;
  children: React.ReactNode;
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <motion.div className="flex flex-col justify-center items-center h-auto max-w-full min-h-screen py-12">
      <Quote vis={visible} />
      <div className="flex items-center flex-col lg:flex-row">
        <motion.img
          src={imgUrl}
          alt="image of the character"
          className="rounded-full h-3/4 max-w-full"
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
        />
        <div className="flex flex-col gap-3.5">
          <motion.div
            className="font-bold text-4xl underline italic lg:text-6xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {name.split("").map((l, i) => {
              return (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: "-100%" },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ ease: "easeIn", duration: 1, delay: 0.05 * i }}
                  className="inline-block underline"
                >
                  {l}
                </motion.span>
              );
            })}
          </motion.div>
          <p className="font-bold text-2xl lg:text-3xl">{children}</p>
          <button onClick={() => setVisible(!visible)}>Quote</button>
        </div>
      </div>
    </motion.div>
  );
};
