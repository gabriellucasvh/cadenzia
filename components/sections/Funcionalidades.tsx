import { Shield, Zap, CheckCircle } from 'lucide-react';

export default function Funcionalidades() {
  return (
    <div className="bg-white pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-blue-50">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Segurança Avançada</h3>
            <p className="text-gray-600">
              Proteção de dados com criptografia de ponta a ponta e conformidade com LGPD.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-blue-50">
            <Zap className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rápido e Intuitivo</h3>
            <p className="text-gray-600">
              Interface moderna e fácil de usar, cadastro em menos de 2 minutos.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-blue-50">
            <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Validação Automática</h3>
            <p className="text-gray-600">
              Verificação automática de dados e prevenção de cadastros duplicados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 