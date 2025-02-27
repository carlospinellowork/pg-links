import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GithubImage from "./assets/brands/githubimg.jpg";
import LinkedinImage from "./assets/brands/Linkedin-1.jpeg";
import WhatsappImage from "./assets/brands/whatslogo.jpg";
import Briefcase from "./assets/icons/briefcase";
import LinksComponents from "./components/linksComponents";

interface UserProps {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  bio: string;
}

function App(): JSX.Element {
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/carlospinellowork")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  const linksArr: { title: string; url: string; image: string }[] = [
    {
      title: "Github",
      url: "https://github.com/carlospinellowork",
      image:
        GithubImage ||
        "https://t.ctcdn.com.br/CLoW3JkF4dd6Md31gEAgJL4ayzc=/640x360/smart/i491384.jpeg",
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/carlos-eduardo-9ba041156/",
      image:
        LinkedinImage ||
        "https://t.ctcdn.com.br/Ch5f1Qn29K0rhmb3Dgj9r3kbrfU=/3200x1800/smart/i453842.jpeg",
    },
    {
      title: "Whatsapp",
      url: "https://wa.me/5511957944402",
      image:
        WhatsappImage ||
        "https://t.ctcdn.com.br/IrsKqx3DEHQFnCGpSVRmzEiXOG0=/1200x675/smart/i541314.jpeg",
    },
  ];

  const list = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -100 },
  };

  const itemList = { visible: { opacity: 1 }, hidden: { opacity: 0 } };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-900">
        <motion.div
          className="flex flex-col w-full max-w-xs p-4 rounded-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center justify-center space-y-2 avatar">
            <div className="w-32 mt-4 rounded">
              <img src={user?.avatar_url} alt="Avatar" className="rounded" />
            </div>
            <h3 className="text-3xl font-bold text-slate-300">{user?.name}</h3>
            <p className="text-sm font-bold text-slate-300">
              Desenvolvedor Frontend | Performance, design e inovação.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <motion.ul
              className="flex flex-col w-full gap-2"
              initial={"hidden"}
              animate={"visible"}
              variants={list}
            >
              {linksArr.map((item, index) => {
                return (
                  <LinksComponents
                    key={index}
                    title={item?.title}
                    url={item?.url}
                    image={item?.image}
                    item={itemList ? itemList : undefined}
                  />
                );
              })}
            </motion.ul>
          </div>
          <div className="flex flex-col items-center justify-center mt-8">
            <p className="mb-2 text-sm font-bold text-slate-300">
              Acompanhem meu portfolio
            </p>
            <motion.a
              href="https://portfoliocadu.vercel.app/"
              target="_blank"
              className="flex items-center justify-center w-full h-12 gap-2 p-2 text-sm font-semibold rounded bg-linkRgba text-slate-300 hover:cursor-pointer"
              whileHover={{
                background: "rgb(118,131,134)",
                backgroundImage:
                  "linear-gradient(90deg, rgba(118,131,134,1) 0%, rgba(47,68,143,1) 100%)",
              }}
            >
              Carlos Eduardo - Portfólio
              <Briefcase />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
