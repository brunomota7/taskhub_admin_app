"use client";

import { useState } from "react";
import Image from "next/image";

import Logo from "@/public/logo.png";
import { useThemeColor } from "@/hooks/useThemeColor";
import Button from "@/components/Button/button";
import Input from "@/components/Input/Input";


export default function Home() {
  const backgroundColor = useThemeColor({}, "background");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const handleLogin = () => {
    console.log({ email, password });
  };

  return (
    <main className="flex h-screen w-full" style={{ backgroundColor }}>
      <section className="hidden lg:flex w-1/2 bg-[#0a214d] text-white px-16">
        <div className="flex flex-col justify-center gap-8 max-w-lg">
          <div className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="TaskHub Logo"
              width={44}
              height={44}
              className="rounded-md"
            />
            <span className="text-2xl font-extrabold tracking-tight">
              TaskHub
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold leading-tight">
              Painel Administrativo
            </h1>
            <p className="text-base text-blue-100">
              Gerencie grupos, usuários e métricas da plataforma TaskHub em um
              único lugar.
            </p>
          </div>
        </div>
      </section>

      <section className="flex w-full lg:w-1/2 items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-gray-900">
              Acesso administrativo
            </h2>
            <p className="text-sm text-gray-500">
              Entre com suas credenciais para continuar
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="exemplo@exemplo.com"
              value={email}
              onChangeText={setEmail}
            />

            <Input
              label="Senha"
              type="password"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secure}
              onToggleSecureEntry={() => setSecure((prev) => !prev)}
            />

            <Button
              title="Entrar"
              onPress={handleLogin}
              style="mt-4 w-full"
              disabled={!email || !password}
            />
          </form>
        </div>
      </section>
    </main>
  );
}
