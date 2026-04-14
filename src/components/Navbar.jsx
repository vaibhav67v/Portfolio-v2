export default function Navbar({className}) {
  const primaryTextClr = 'text-emerald-200';
  return (
    <div>
        <ul className={`h-full flex justify-center items-center gap-8 text-slate-400`}>
            <li className={`${primaryTextClr} font-bold cursor-pointer`}>Home</li>
            <li className={`cursor-pointer font-bold`}>About</li>
            <li className={`cursor-pointer font-bold`}>Projects</li>
            <li className={`cursor-pointer font-bold`}>Contact</li>
        </ul>
    </div>
  )
}
