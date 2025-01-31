import React from 'react';
import { Button } from '../ui/button';
const Inicio = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 h-[70vh]">
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Simplifique seu processo de cadastro
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Gerencie seus usuários de forma simples e segura.
                    Uma solução completa para cadastro e autenticação.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className='bg-blue-500 hover:bg-blue-600'>
                        Começar Gratuitamente
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Inicio;