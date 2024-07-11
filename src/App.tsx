import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LinksComponents from "./components/linksComponents";
import GithubImage from "./assets/brands/githubimg.jpg";
import InstagramImage from "./assets/brands/instagramlogo.jpg";
import LinkedinImage from "./assets/brands/Linkedin-1.jpeg";
import WhatsappImage from "./assets/brands/whatslogo.jpg";
import Briefcase from "./assets/icons/briefcase";

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
      title: "Instagram",
      url: "https://www.instagram.com/dududucadu",
      image:
        InstagramImage ||
        "https://www.meupositivo.com.br/doseujeito/wp-content/uploads/2019/12/montagens-de-fotos-no-Instagram-Stories.jpg",
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
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-900">
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col rounded-md p-4 bg-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center justify-center avatar space-y-2">
            <div className="w-32 rounded mt-4">
              <img src={user?.avatar_url} alt="Avatar" className="rounded" />
            </div>
            <h3 className="text-3xl font-bold text-slate-300">{user?.name}</h3>
            <p className="text-slate-300 font-bold text-sm">
              Desenvolvedor Front-end
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <motion.ul
              className="w-full flex flex-col gap-2"
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
            <p className="text-slate-300 font-bold text-sm mb-2">
              Acompanhem meu portfolio
            </p>
            <motion.a
              href="https://github.com/cadupinello"
              target="_blank"
              className="w-full bg-linkRgba h-12 flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 rounded hover:cursor-pointer p-2"
              whileHover={{ 
                background: 'rgb(118,131,134)',
                backgroundImage: 'linear-gradient(90deg, rgba(118,131,134,1) 0%, rgba(47,68,143,1) 100%)',
              }}
            >
              Em construção do site ...
             <Briefcase />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
