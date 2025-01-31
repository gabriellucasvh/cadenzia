import React from 'react'
import Image from 'next/image'
import logo from '@/public/deepseek_wordmark.svg'
import Link from 'next/link'
import { Button } from './ui/button'
const MenuLinks = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Sobre',
        href: '/sobre'
    },
    {
        label: 'Funcionalidades',
        href: '/features'
    },
    {
        label: 'Preços',
        href: '/pricing'
    },
    {
        label: 'Contato',
        href: '/contact'
    },
]
const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold">
                        <Image src={logo} alt="DeepSeek" width={128} height={128} />
                    </div>
                    <div className="flex items-center gap-4">
                        {MenuLinks.map((link) => (
                            <Link className="hover:text-blue-500 transition-colors duration-300" key={link.href} href={link.href}>{link.label}</Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost">Entrar</Button>
                        <Button className='bg-blue-500 hover:bg-blue-600'>Cadastrar</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar