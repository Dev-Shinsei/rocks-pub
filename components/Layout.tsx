import Head from "next/head";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

type Props = {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Rocks Pub e Pizzaria</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Melhor Pizza e Hamburguer de União dos Palmares" />
      </Head>
      <div className="min-h-screen flex flex-col ">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}