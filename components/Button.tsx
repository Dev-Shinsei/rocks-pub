
type Props = {
  className?: any,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  children: string
}

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-blue-300`}
      onClick={onClick}
    >{children}</button>
  )
}