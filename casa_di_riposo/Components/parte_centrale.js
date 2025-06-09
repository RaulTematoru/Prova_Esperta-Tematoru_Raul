export default function Centrale() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mb-[700px]">
      <h2 className="text-3xl font-bold text-center mb-4">Eventi e News</h2>
      <hr className="border-t-4 border-gray-300 mb-6 w-full" />

      <div className="text-sm text-gray-700 mb-2 italic">PRESENTAZIONE</div>

      <div className="bg-whitep-4 text-gray-700 text-justify text-sm leading-relaxed mb-2">
        <p>
          Qualche breve cenno alla Storia dell’IPAB “MONUMENTO AI CADUTI IN
          GUERRA. Dopo l’annessione del Veneto all’Italia, l’Amministrazione
          comunale di San Donà ebbe un diverso assetto, rispetto a quello avuto
          sino ad ora: organo principe divenne il Consiglio comunale, il Sindaco
          era di nomina regia, ma scelto tra i consiglieri ed affiancato da una
          Giunta di Assessorii eletti dal Consiglio comunale tra i propri
          membri. A livello nazionale nel 1882 si ammettono all’elettorato
          politico tutti i cittadini maggiorenni che superino l’esame del corso
          scolastico obbligatorio oppure paghino un censo di 19,80 lire. Subito
          dopo nel 1915 diviene elettore amministrativo di un comune chi è
          cittadino italiano, ha compiuto 21 anni, ha la residenza nel comune
          ovvero paga nel comune un censo, e contro il quale non siano insorte
          cause di esclusione per incapacità o indegnità.
        </p>
        <p className="italic mt-2">Continua a leggere …</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <div className="bg-sky-300 hover:bg-sky-400 transition-colors p-5 rounded-md flex items-center space-x-3 font-semibold text-lg">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
            />
          </svg>

          <span>Amministrazione trasparente</span>
        </div>

        <div className="bg-sky-300 hover:bg-sky-400 transition-colors p-5 rounded-md flex items-center space-x-3 font-semibold text-lg">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"
            />
          </svg>

          <span>Albo pretorio online</span>
        </div>

        <div className="bg-sky-300 hover:bg-sky-400 transition-colors p-5 rounded-md flex items-center space-x-3 font-semibold text-lg">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
            />
          </svg>

          <span>Contatti</span>
        </div>

        <div className="bg-sky-300 hover:bg-sky-400 transition-colors p-5 rounded-md flex items-center space-x-3 font-semibold text-lg">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
            />
          </svg>

          <span>pagoPa</span>
        </div>
      </div>
    </div>
  );
}
