export default function Toolkit({text, icon:Icon}) {
  return (
    <div className="flex items-center gap-2">
        <div className="bg-background-light w-10 h-10 flex items-center justify-center rounded-md">
            <Icon className="w-6.5 h-6.5 text-primary/95"/>
        </div>
        <div>{text}</div>
    </div>
  )
}
