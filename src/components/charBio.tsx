import { motion } from "framer-motion";
import { Quote } from "./chatBubble";

export const Bio = ({
  imgUrl,
  visible,
  children,
}: {
  imgUrl: string;
  visible: boolean;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className={`flex flex-col justify-center items-center h-auto max-w-full`}
      style={{ gridArea: "selected" }}
    >
      <Quote vis={visible}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nisi
        recusandae temporibus atque pariatur quam in iusto ea, harum ratione
        dolor repellat alias blanditiis qui odit maxime ipsum quasi voluptatum.
      </Quote>
      <div className="flex items-center flex-col lg:flex-row">
        <motion.img
          src={imgUrl}
          alt="image of the character"
          className="rounded-full h-2/4 max-w-full"
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
        />
        <div className="font-bold text-lg lg:text-xl text-secondary">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
