import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold ">Rocks Pub</h1>
      <h4 className="text-4xl my-3">Rock n' Food</h4>

      <p className="text-gray-400 mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, iste ipsam? Doloremque ea dolores repudiandae dolore alias labore, iste autem.</p>
      <Button className="bg-purple-600 text-white px-6">Get in Touch!</Button>
    </section>
  )
}