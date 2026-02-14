"use client";

import Header from "@/components/main-header";
import Footer from "@/components/main-footer";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  Users,
  Layers,
  CheckSquare,
  Plus,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 px-6 py-6 bg-muted/40">
        {/* TÍTULO */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-sm text-muted-foreground">
            Visão geral da plataforma TaskHub
          </p>
        </div>

        {/* KPIs */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium">
                Usuários
              </CardTitle>
              <Users className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1.248</div>
              <p className="text-xs text-muted-foreground">
                +12% em relação ao mês passado
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium">
                Grupos
              </CardTitle>
              <Layers className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">312</div>
              <p className="text-xs text-muted-foreground">
                +8 novos grupos esta semana
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium">
                Tasks
              </CardTitle>
              <CheckSquare className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">9.430</div>
              <p className="text-xs text-muted-foreground">
                74% concluídas
              </p>
            </CardContent>
          </Card>
        </section>

        {/* AÇÕES RÁPIDAS */}
        <section className="mt-10">
          <h3 className="mb-4 text-lg font-semibold">
            Ações rápidas
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Criar novo grupo</CardTitle>
                <CardDescription>
                  Organize equipes e tarefas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full gap-2">
                  <Plus className="h-4 w-4" />
                  Novo grupo
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gerenciar usuários</CardTitle>
                <CardDescription>
                  Visualize e edite permissões
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Ver usuários
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Relatórios</CardTitle>
                <CardDescription>
                  Métricas e desempenho da plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full">
                  Abrir relatórios
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ÁREA FUTURA */}
        <section className="mt-12">
          <Separator className="mb-6" />
          <p className="text-sm text-muted-foreground">
            📈 Em breve: gráficos, tabelas e relatórios detalhados
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
