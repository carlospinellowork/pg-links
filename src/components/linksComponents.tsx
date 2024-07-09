import { motion } from "framer-motion";
interface LinksProps {
  title: string;
  url: string;
  image: string;
  item?: {
    visible: { opacity: number };
    hidden: { opacity: number };
  };
}

const LinksComponents = ({ title, url, image, item }: LinksProps) => {
  return (
    <motion.li
      className="h-12 flex items-center justify-center bg-slate-500 rounded hover:cursor-pointer p-2"
      whileHover={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: { duration: 2, type: "tween" },
      }}
      whileTap={{ scale: 0.9 }}
      variants={item}
    >
      <motion.a
        href={url}
        target="_blank"
        className="w-full flex items-center justify-center text-lg text-slate-300 font-semibold"
        whileHover={{ opacity: 0, transition: { duration: 1 } }}
      >
        {title}
      </motion.a>
    </motion.li>
  );
};

export default LinksComponents;
