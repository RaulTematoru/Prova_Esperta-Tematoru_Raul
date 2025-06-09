export default function Footer() {
  return (
    <footer className="bg-sky-300 text-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-sm">
       
        <img
          src="/img/logo.png"
          alt="IPAB Monumento ai Caduti in Guerra"
          className="max-w-xs"
        />

       
        <div className="w-full text-left mt-6">
          <h2 className="text-xl mb-2">Contatti</h2>
          <hr className="border-t border-white mb-4" />

          <div className="space-y-1 leading-relaxed">
            <p><strong>tel.</strong> 0421 330807</p>
            <p><strong>PROTOCOLLO:</strong> <a href="mailto:info@cdrmonumento.com" className="font-bold">info@cdrmonumento.com</a></p>
            <p><strong>PRESIDENZA:</strong> <a href="mailto:presidente@cdrmonumento.com" className="font-bold">presidente@cdrmonumento.com</a></p>
            <p><strong>DIREZIONE:</strong> <a href="mailto:direttore@cdrmonumento.com" className="font-bold">direttore@cdrmonumento.com</a></p>
            <p><strong>CONTABILITÀ E RETTE:</strong> <a href="mailto:contabilita@cdrmonumento.com" className="font-bold">contabilita@cdrmonumento.com</a></p>
            <p><strong>PEC:</strong> <a href="mailto:cdrmonumento@halleypec.it" className="font-bold">cdrmonumento@halleypec.it</a></p>
          </div>
        </div>

       
        <div className="text-center mt-8 text-xs text-gray-50">
          © 2025 Halley Informatica. Tutti i diritti riservati. Halley EG 041433.
        </div>

      </div>
    </footer>
  );
}
