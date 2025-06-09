export default function Navbar({ logoSrc, titoli }) {
  return (
    <div className="flex flex-col text-gray-800">
      <img
        src={logoSrc}
        class="md:w-[400px] w-[250px] md:ml-[800px] md:mb-12 md:mt-12"
      />

      <div className="flex justify-between items-center bg-cyan-200 p-4">
        <div className="hidden md:flex space-x-14 md:ml-[300px]">
          {titoli.map((titolo, index) => (
            <p
              key={index}
              className={`text-lg font-bold ${
                titolo.toLowerCase().includes("sale") ? "" : ""
              }`}
            >
              {titolo}
            </p>
          ))}
        </div>
      </div>

      <div className="md:hidden bg-white p-4">
        <div className="flex flex-col space-y-4">
          {titoli.map((titolo, index) => (
            <p
              key={index}
              className={`text-lg font-bold ${
                titolo.toLowerCase().includes("sale") ? "text-red-600" : ""
              }`}
            >
              {titolo}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
