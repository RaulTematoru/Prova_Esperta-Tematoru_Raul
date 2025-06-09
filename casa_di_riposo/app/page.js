import Navbar from "@/Components/navbar";
import Centrale from "@/Components/parte_centrale";
import Footer from "@/Components/footer";



const titoli = [
  { testo: "Homepage", href: "" },
  { testo: "SERVIZI", href: "Servizi" },
  { testo: "PERCHE' L'IPAB", href: "/perche-ipab" },
  { testo: "I.P.A.B. informa", href: "/ipab-informa" },
  { testo: "Sostienici", href: "/sostienici" },
  { testo: "Accessi riservati", href: "/accessi-riservati" },
  { testo: "Extranet", href: "/extranet" },
  { testo: "Privacy", href: "/privacy" },
];


export default function Home() {
  return (
    <div className="  bg-white">
    <Navbar
    logoSrc="/img/logo.png"
    titoli ={titoli}
   /> 

<Centrale />

<Footer/>

   </div>
   
  );
}
