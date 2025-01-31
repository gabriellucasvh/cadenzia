"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Lock, User, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(isLogin ? "Login" : "Cadastro", { email, password, name })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{isLogin ? "Bem-vindo de volta!" : "Criar conta"}</CardTitle>
          <CardDescription>
            {isLogin ? "Entre com suas credenciais para acessar" : "Preencha seus dados para começar"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                    placeholder="Digite seu nome"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              {isLogin ? "Entrar" : "Cadastrar"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <div className="relative flex flex-col items-center justify-center w-full pt-3">
            <div>
            <span className="bg-white px-4 text-gray-500">ou</span>
            </div>
            <div className="flex gap-4">
            <Button variant={'ghost'} size={'icon'}><Image src="/logos/google.svg" alt="Google" width={24} height={24} /></Button>
            <Button variant={'ghost'} size={'icon'}><Image src="/logos/facebook.svg" alt="Google" width={24} height={24} /></Button>
            <Button variant={'ghost'} size={'icon'}><Image src="/logos/apple.svg" alt="Google" width={20} height={20} /></Button>
            </div>
          </div>


          <div className="text-center">
            <Button variant="link" onClick={() => setIsLogin(!isLogin)} className="text-blue-600 hover:text-blue-700">
              {isLogin ? "Não tem uma conta? Cadastre-se" : "Já tem uma conta? Entre agora"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

