import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white font-semibold mb-4">Produto</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white">Recursos</Link></li>
                            <li><Link href="#" className="hover:text-white">Preços</Link></li>
                            <li><Link href="#" className="hover:text-white">Casos de Uso</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Empresa</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white">Sobre</Link></li>
                            <li><Link href="#" className="hover:text-white">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white">Carreiras</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Suporte</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white">Documentação</Link></li>
                            <li><Link href="#" className="hover:text-white">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-white">Contato</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white">Privacidade</Link></li>
                            <li><Link href="#" className="hover:text-white">Termos</Link></li>
                            <li><Link href="#" className="hover:text-white">LGPD</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p>© 2024 CadastroFácil. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;