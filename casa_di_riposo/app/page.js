import Navbar from "@/Components/navbar";


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
  
   </div>
  );
}
