export default function Navlink({href, className, children}) {
  return (
    <a href={`#${href}`} className={`font-bold hover:text-primary/75 transition-colors duration-300 ${className}`}>{children}</a>
  )
}
