import Navbar from "@/Components/navbar";
import Centrale from "@/Components/parte_centrale";
import Footer from "@/Components/footer";

export default function Home() {
  return (
    <div className=" flex-col h-screen bg-white">
    <Navbar
    logoSrc="/img/logo.png"
    titoli={[
      "Homepage",
      "SERVIZI",
      "PERCHE' L'IPAB",
      "I.P.A.B. informa",
      "Sostienici",
      "Accessi riservati",
      "Extranet",
      "Privacy",
    ]}
   /> 

<Centrale />

<Footer
class="space-y-2" 
Valutazione="Valutazione media Feedaty su 14551 recensioni"
Destra="Privacy
Cookie
Termini e condizioni
Sitemap
Italia | IT "
Carte="https://img.tvfindr.com/uploads/2024/03/discord-server-logo-1.png"
/>
   </div>
  );
}
