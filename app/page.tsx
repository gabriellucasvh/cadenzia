import Footer from '@/components/Footer';
import CTA from '@/components/sections/CTA';
import Funcionalidades from '@/components/sections/Funcionalidades';
import Inicio from '@/components/sections/Inicio';
import SocialMarcas from '@/components/sections/SocialMarcas';
import Navbar from '@/components/Navbar';
export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Inicio />
      <Funcionalidades />
      <SocialMarcas />
      <CTA />
      <Footer />  
    </div>
  );
}
