import Navbar from "@/Components/navbar";
import Parte_centrale2 from "@/Components/parte_centrale_ipab";
import Footer from "@/Components/footer";



const titoli = [
  { testo: "Homepage", href: "/" },
  { testo: "SERVIZI", href: "Servizi" },
  { testo: "PERCHE' L'IPAB", href: "Perche_lipab" },
  { testo: "I.P.A.B. informa", href: "ipab_informa" },
];


export default function Home() {
  return (
    <div className="bg-white">
    <Navbar
    logoSrc="/img/logo.png"
    titoli ={titoli}
   /> 

<Parte_centrale2 />

<Footer/>

   </div>
   
  );
}