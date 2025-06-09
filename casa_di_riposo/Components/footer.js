export default function Footer({Carte, Valutazione, Destra}) {
  
    const menu1 = ["Scarica","Nitro","Stato","App Directory","Eperienza su dispositivi mobili"];
    const menu2 = ["Chi siamo","Lavora con noi","Marchio","Notiziario"];
    const menu3 = ["Università","Assistenza","Sicurezza","Blog","StreamKit","Creatori","Community","Sviluppatori","Gaming","Missioni","Articoli ufficiali di terze parti","Suggerimenti"];
    const menu4 = ["Termini","Politica sulla privacy", "Impostazioni dei cookie","Linee guida","Riconoscimenti","Licenze","Informazioni sulla compagnia"];
    
    return (
        <div className="flex flex-col min-h-screen justify-end">
        <footer className="text-white px-6 md:px-12 py-10 rounded-t-xl justify-end items-end bg-gradient-to-br from-blue-600 to-purple-900">
         
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b ">
      
            <div className="md:col-span-2 bg-transparent">
                <img
                src={Carte}
                class="w-30 h-14 mb-4"
                alt="Logo"
                />
              <h3 className="text-3xl font-bold mb-2">Discord</h3>
              <p className="mt-4 mb-3 ml-1 text-sm text-gray-300">Lingua</p>
             
              <div className="flex items-center rounded-2xl border border-gray-400 overflow-hidden w-[200px] max-w-md">
                <input
                  type="dropdown"
                  name="language"
                  id="language"
                  placeholder="Italiano"
                  className="flex-1 px-6 py-2 outline-none bg-transparent text-sm"
                />
              </div>
              
            
            <div className="mt-12 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-blue-500 hover:text-blue-700" viewBox="0 0 24 24"><path d="M22 12c0 5.523-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2s10 4.478 10 10zm-7.5-2h-3v-1.5c0-.828.672-1.5 1.5-1.5h1.5V5h-3C9.672 5 8.5 6.172 8.5 7.5v3.5h-3v3h3v7h3v-7h3.5l.5-3h-4V7.5h3.5z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-blue-400 hover:text-blue-600" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.39-1.83.654-2.828.774 1.017-.607 1.794-1.57 2.164-2.724-.951.563-2.004.974-3.12 1.198-.894-.953-2.171-1.544-3.593-1.544-2.722 0-4.933 2.212-4.933 4.933 0 .39.043.765.126 1.124C7.691 8.094 4.063 6.13 2.229 3.233c-.423.725-.664 1.561-.664 2.449 0 1.692.86 3.181 2.168 4.062-.801-.026-1.556-.246-2.219-.616-.001.021-.001.043-.001.064 0 2.365 1.68 4.335 3.914 4.779-.409.111-.839.171-1.278.171-.312 0-.616-.03-.918-.086.617 1.926 2.419 3.319 4.549 3.357-1.67 1.308-3.773 2.085-6.048 2.085-.393 0-.779-.023-1.16-.068 2.166 1.394 4.749 2.207 7.522 2.207 9.025 0 13.986-7.487 13.986-13.986 0-.21 0-.423-.015-.635.961-.693 1.79-1.562 2.447-2.549z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-pink-500 hover:text-pink-700" viewBox="0 0 24 24"><path d="M12 2.163c3.301 0 3.672 0 4.972.072 1.298.072 2.451.425 3.391 1.365 1.014.921 1.293 2.268 1.365 3.582.071 1.3.072 1.672.072 4.972 0 3.3 0 3.672-.072 4.972-.072 1.314-.351 2.661-1.365 3.582-.94.94-2.093 1.293-3.391 1.365-1.3.072-1.672.072-4.972.072-3.3 0-3.672 0-4.972-.072-1.298-.072-2.451-.425-3.391-1.365-1.014-.921-1.293-2.268-1.365-3.582-.072-1.3-.072-1.672-.072-4.972 0-3.3 0-3.672.072-4.972.072-1.314.351-2.661 1.365-3.582.94-.94 2.093-1.293 3.391-1.365 1.3-.072 1.672-.072 4.972-.072zm0 3.92c-2.21 0-4.002 1.793-4.002 4.002s1.792 4.002 4.002 4.002c2.21 0 4.002-1.793 4.002-4.002s-1.792-4.002-4.002-4.002zm0 6.278c-1.203 0-2.178-.975-2.178-2.178 0-1.202.975-2.177 2.178-2.177 1.202 0 2.177.975 2.177 2.177 0 1.203-.975 2.178-2.177 2.178zm6.406-6.389c-.355 0-.642-.287-.642-.642 0-.355.287-.642.642-.642s.642.287.642.642c0 .355-.287.642-.642.642z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-red-500 hover:text-red-700" viewBox="0 0 24 24"><path d="M23.498 6.186a3.318 3.318 0 0 0-2.336-2.336C19.227 3.351 12 3.351 12 3.351s-7.227 0-9.162.5a3.318 3.318 0 0 0-2.336 2.336C0 8.109 0 12 0 12s0 3.891.5 5.814a3.318 3.318 0 0 0 2.336 2.336C4.773 20.649 12 20.649 12 20.649s7.227 0 9.162-.5a3.318 3.318 0 0 0 2.336-2.336C24 15.891 24 12 24 12s0-3.891-.5-5.814zM9.746 15.03V8.98l5.273 3.05-5.273 3.05z"/></svg>
              </a>
            </div>
            
            </div>
    
            
            <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
              <div>
                <h4 className="font-bold mb-3 text-gray-400">Prodotto</h4>
                <ul className="space-y-2">{menu1.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
  
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-gray-400">Compagnia</h4>
                <ul className="space-y-2 w-[100px]">{menu2.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                  
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-gray-400">Risorse</h4>
                <ul className="space-y-2 w-[100px]">{menu3.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                 
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-gray-400">Norme</h4>
                <ul className="space-y-2 w-[90px]">{menu4.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                 
                </ul>
              </div>
            </div>
          </div>
          <h1 class="text-left font-bold md:text-[300px] text-9xl">Discord</h1>
      
         
        </footer>
        </div>
    )
    }