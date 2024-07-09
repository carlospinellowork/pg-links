
interface LinksProps {
  title: string
  url: string
}

const LinksComponents = ({ title, url }: LinksProps) => {
  return (
        <ul className="h-12 flex items-center justify-center bg-slate-500 rounded hover:bg-slate-400 hover:cursor-pointer p-2">
          <a href={url} target="_blank" className="text-lg text-slate-300 font-semibold">{title}</a>
        </ul>
  )
}

export default LinksComponents