import React from 'react';

const CTA = () => {
    return (
        <div className="bg-blue-600 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Pronto para começar?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                    Crie sua conta gratuitamente e comece a usar agora mesmo.
                </p>
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition text-lg font-semibold">
                    Criar Conta Grátis
                </button>
            </div>
        </div>
    )
}

export default CTA;