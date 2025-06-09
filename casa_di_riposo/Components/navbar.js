import Link from "next/link";

export default function Navbar({ logoSrc, titoli }) {
  return (
    <div className="flex flex-col text-gray-800">
      <img
        src={logoSrc}
        alt="Logo"
        className="md:w-[400px] w-[250px] md:ml-[800px] md:mb-12 md:mt-12"
      />

   
      <div className="flex justify-between items-center md:bg-cyan-200 p-4">
        <div className="hidden md:flex space-x-10 md:ml-[300px] bg-cyan-200">
          {titoli.map(({ testo, href }, index) => (
            <Link key={index} href={href} passHref>
              <p className="cursor-pointer text-lg font-semibold hover:underline">
                {testo}
              </p>
            </Link>
          ))}
        </div>
      </div>

     
      <div className="md:hidden bg-cyan-200 p-4">
        <div className="flex flex-col space-y-4">
          {titoli.map(({ testo, href }, index) => (
            <Link key={index} href={href} passHref>
              <p className="cursor-pointer text-lg font-semibold hover:underline">
                {testo}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
