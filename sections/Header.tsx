import Link from "next/link";

export default function Header() {
  const navigation = [
    { label: "Home", path: "/" },
    { label: "Cardápio", path: "/menu" },
    { label: "Sobre nós", path: "/about" },
    { label: "Endereço", path: "/address" },
    { label: "Contato", path: "/contact" },
  ]

  return (
    <header className="h-16 flex items-center justify-between">
      <ul className="flex gap-4">
        {navigation.map(nav => (
          <Link className="font-bold text-yellow-400 hover:text-black hover:animate-pulse" key={nav.label} href={nav.path}>{nav.label}</Link>
        ))}
      </ul>
      <button>Icon</button>
    </header>
  )
}