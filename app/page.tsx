"use client";

import { useState } from "react";
import Image from "next/image";

import Logo from "@/public/logo.png";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({ email, password });
  };

  return (
    <main className="flex h-screen w-full">
      <section className="hidden lg:flex w-1/2 bg-[#3423A6] text-white px-16">
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
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Acesso administrativo</CardTitle>
            <CardDescription>
              Entre com suas credenciais para continuar
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@taskhub.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button className="w-full bg-[#1380ed]" onClick={handleLogin}>
              Entrar
            </Button>

            <Separator />

            <p className="text-center text-sm text-muted-foreground">
              Acesso restrito a administradores
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
