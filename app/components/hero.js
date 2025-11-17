import Link from "next/link";
export default function Hero(){
    return (
    <section className="text-gray-800 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">The eco-responsible web and mobile agency</h1>
        <p className="text-xl font-bold">Creator of tailor-made, innovative and environmentally friendly web and mobile solutions</p>
        {/* <Link href="aboutus">Discover more</Link> */}
      </div>
    </section>
    )
}