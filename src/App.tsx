import { useEffect, useState } from "react";
import LinksComponents from "./components/linksComponents";

interface UserProps {
  name: string
  login: string
  avatar_url: string
  location: string
  bio: string
}

function App():JSX.Element {
  const [user, setUser] = useState<UserProps | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/users/cadupinello")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [window]);

  const linksArr: { title: string; url: string }[] = [
    { title: "Github", url: "https://github.com/cadupinello" },
    { title: "Instagram", url: "https://www.instagram.com/dududucadu" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/carlos-eduardo-9ba041156/" },
    { title: "Whatsapp", url: "https://wa.me/5595744402" },
  ];

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-900">
        <div className="w-[400px] h-[600px] flex flex-col rounded-md p-4 bg-slate-700">
          <div className="flex flex-col items-center justify-center avatar space-y-2">
            <div className="w-32 rounded mt-4">
              <img src={user?.avatar_url} alt="Avatar" className="rounded" />
            </div>
            <h3 className="text-3xl font-bold text-slate-300">
              {user?.name}
            </h3>
            <p className="text-slate-300 font-bold text-sm">
              Desenvolvedor Front-end
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <li className="w-full flex flex-col gap-2">
              {linksArr.map((item, index) => {
                return (
                  <LinksComponents
                    key={index}
                    title={item?.title}
                    url={item?.url}
                  />
                );
              })}
            </li>
          </div>
          <div className="flex flex-col items-center justify-center mt-8">
          <p className="text-slate-300 font-bold text-sm mb-2">Acompanhem meu portfolio</p>
          <a href="https://github.com/cadupinello" target="_blank" className="bg-slate-900 h-12 flex items-center justify-center text-sm font-semibold text-slate-300 rounded hover:bg-slate-800 hover:cursor-pointer p-2">https://github.com/cadupinello</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
