import { MarqueeMarcas } from "../MarqueeMarcas";

const SocialMarcas = () => {
    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Empresas que confiam em nós
                    </h2>
                    <p className="text-xl text-gray-600">
                        Mais de 1000+ empresas já utilizam nossa plataforma
                    </p>
                </div>
                <MarqueeMarcas />
            </div>
        </div>
    )
}

export default SocialMarcas;