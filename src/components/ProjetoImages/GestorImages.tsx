import { ProjectImage } from "@domain/ProjectImage"
import { aluraCaseTitulo, apiGestorTitulo, cardapioTitulo, dashboardTitulo, doutorVisaoTitulo, formN8Ntitulo, kidflixTitulo, leitorPlacaTitulo, onlyCifraTitulo } from "@utils/projectNames"
import { StringUtil } from "@utils/string"

export const gestor: ProjectImage[] = [
    new ProjectImage("Dashboard", dashboardTitulo, StringUtil.URL + "images/dashboard/1.0-dashboard.png", "https://github.com/RamonRodSou/GestorChurch"),
    new ProjectImage("Dashboard", dashboardTitulo, StringUtil.URL + "images/dashboard/1.1-dashboard.png"),
    new ProjectImage("Dashboard", dashboardTitulo, StringUtil.URL + "images/dashboard/1.0-dashboard-mobile.png"),
    new ProjectImage("Dashboard", dashboardTitulo, StringUtil.URL + "images/dashboard/1.1-dashboard-mobile.png"),

    new ProjectImage("Visitantes", dashboardTitulo, StringUtil.URL + "images/dashboard/visitantes/2.0-visitante.png"),
    new ProjectImage("Visitantes", dashboardTitulo, StringUtil.URL + "images/dashboard/visitantes/2.1-visitante.png"),
    new ProjectImage("Visitantes", dashboardTitulo, StringUtil.URL + "images/dashboard/visitantes/2.2-visitante.png"),
    new ProjectImage("Visitantes", dashboardTitulo, StringUtil.URL + "images/dashboard/visitantes/2.3-visitante.png"),
    new ProjectImage("Visitantes", dashboardTitulo, StringUtil.URL + "images/dashboard/visitantes/2.0-visitante-mobile.png"),
    new ProjectImage("Visitantes", dashboardTitulo, StringUtil.URL + "images/dashboard/visitantes/2.1-visitante-mobile.png"),

    new ProjectImage("Membros", dashboardTitulo, StringUtil.URL + "images/dashboard/members/1.0-members.png"),
    new ProjectImage("Membros", dashboardTitulo, StringUtil.URL + "images/dashboard/members/1.1-members.png"),
    new ProjectImage("Membros", dashboardTitulo, StringUtil.URL + "images/dashboard/members/1.2-members.png"),
    new ProjectImage("Membros", dashboardTitulo, StringUtil.URL + "images/dashboard/members/1.3-members.png"),
    new ProjectImage("Membros", dashboardTitulo, StringUtil.URL + "images/dashboard/members/1.4-members.png"),
    new ProjectImage("Membros", dashboardTitulo, StringUtil.URL + "images/dashboard/members/1.5-members.png"),
    new ProjectImage("Membros", dashboardTitulo, StringUtil.URL + "images/dashboard/members/1.0-members-mobile.png"),
    new ProjectImage("Membros", dashboardTitulo, StringUtil.URL + "images/dashboard/members/1.1-members-mobile.png"),

    new ProjectImage("Relatorio Igreja", dashboardTitulo, StringUtil.URL + "images/dashboard/relatorio/1.0-relatorio.png"),
    new ProjectImage("Relatorio Igreja", dashboardTitulo, StringUtil.URL + "images/dashboard/relatorio/1.1-relatorio.png"),
    new ProjectImage("Relatorio Igreja", dashboardTitulo, StringUtil.URL + "images/dashboard/relatorio/1.2-relatorio.png"),
    new ProjectImage("Relatorio Igreja", dashboardTitulo, StringUtil.URL + "images/dashboard/relatorio/1.3-relatorio.png"),

    new ProjectImage("Célula", dashboardTitulo, StringUtil.URL + "images/dashboard/gc/1.0-GC.png"),
    new ProjectImage("Célula", dashboardTitulo, StringUtil.URL + "images/dashboard/gc/1.1-GC.png"),
    new ProjectImage("Célula", dashboardTitulo, StringUtil.URL + "images/dashboard/gc/1.2-GC.png"),
    new ProjectImage("Célula", dashboardTitulo, StringUtil.URL + "images/dashboard/gc/1.3-GC.png"),
    new ProjectImage("Célula", dashboardTitulo, StringUtil.URL + "images/dashboard/gc/1.0-GC-mobile.png"),
    new ProjectImage("Célula", dashboardTitulo, StringUtil.URL + "images/dashboard/gc/1.1-GC-mobile.png"),


    new ProjectImage("Relatorio GC", dashboardTitulo, StringUtil.URL + "images/dashboard/relatorio-gc/1.0-Relatorio-GC.png"),
    new ProjectImage("Relatorio GC", dashboardTitulo, StringUtil.URL + "images/dashboard/relatorio-gc/1.0-Relatorio-GC.png"),
    new ProjectImage("Relatorio GC", dashboardTitulo, StringUtil.URL + "images/dashboard/relatorio-gc/1.2-Relatorio-GC.png"),
    new ProjectImage("Relatorio GC", dashboardTitulo, StringUtil.URL + "images/dashboard/relatorio-gc/1.3-Relatorio-GC.png"),
    new ProjectImage("Relatorio GC", dashboardTitulo, StringUtil.URL + "images/dashboard/relatorio-gc/1.0-Relatorio-GC-mobile.png"),
    new ProjectImage("Relatorio GC", dashboardTitulo, StringUtil.URL + "images/dashboard/relatorio-gc/1.1-Relatorio-GC-mobile.png"),

    new ProjectImage("Escala Servico", dashboardTitulo, StringUtil.URL + "images/dashboard/escala/1.0-escala.png"),
    new ProjectImage("Escala Servico", dashboardTitulo, StringUtil.URL + "images/dashboard/escala/1.1-escala.png"),
    new ProjectImage("Escala Servico", dashboardTitulo, StringUtil.URL + "images/dashboard/escala/1.0-escala-mobile.png"),
    new ProjectImage("Escala Servico", dashboardTitulo, StringUtil.URL + "images/dashboard/escala/1.1-escala-mobile.png"),

    new ProjectImage("Ingressos", dashboardTitulo, StringUtil.URL + "images/dashboard/ingresso/1.0-ingressos.png"),
    new ProjectImage("Ingressos", dashboardTitulo, StringUtil.URL + "images/dashboard/ingresso/1.1-ingressos.png"),
    new ProjectImage("Ingressos", dashboardTitulo, StringUtil.URL + "images/dashboard/ingresso/1.2-ingressos.png"),
    new ProjectImage("Ingressos", dashboardTitulo, StringUtil.URL + "images/dashboard/ingresso/1.3-ingressos.png"),
    new ProjectImage("Ingressos", dashboardTitulo, StringUtil.URL + "images/dashboard/ingresso/1.4-ingressos.png"),
    new ProjectImage("Ingressos", dashboardTitulo, StringUtil.URL + "images/dashboard/ingresso/1.0-ingressos-mobile.png"),

    new ProjectImage("Leitor Qr Code", dashboardTitulo, StringUtil.URL + "images/dashboard/leitor-qr/1.0-leitorQrCode.png"),
    new ProjectImage("Leitor Qr Code", dashboardTitulo, StringUtil.URL + "images/dashboard/leitor-qr/1.2-leitorQrCode.png"),
    new ProjectImage("Leitor Qr Code", dashboardTitulo, StringUtil.URL + "images/dashboard/leitor-qr/1.0-leitorQrCode-mobile.png"),
    new ProjectImage("Leitor Qr Code", dashboardTitulo, StringUtil.URL + "images/dashboard/leitor-qr/1.2-leitorQrCode-mobile.png"),

    new ProjectImage("Financeiro", dashboardTitulo, StringUtil.URL + "images/dashboard/financas/1.0-financeiro.png"),
    new ProjectImage("Financeiro", dashboardTitulo, StringUtil.URL + "images/dashboard/financas/1.1-financeiro.png"),
    new ProjectImage("Financeiro", dashboardTitulo, StringUtil.URL + "images/dashboard/financas/1.0-financeiro-mobile.png"),
    new ProjectImage("Financeiro", dashboardTitulo, StringUtil.URL + "images/dashboard/financas/1.1-financeiro-mobile.png"),

    new ProjectImage("Automaçao", dashboardTitulo, StringUtil.URL + "images/dashboard/n8n/Fluxo_Mensagem_aniversariantes.png"),
    new ProjectImage("Automaçao", dashboardTitulo, StringUtil.URL + "images/dashboard/n8n/Fluxo_msg_em_massa.png"),
]

export const doutorVisao: ProjectImage[] = [
    new ProjectImage("Doutor Visão", doutorVisaoTitulo, StringUtil.URL + "images/doutorVisao/1.0.png", "https://github.com/RamonRodSou/DrVisao"),
    new ProjectImage("Doutor Visão", doutorVisaoTitulo, StringUtil.URL + "images/doutorVisao/1.1.png"),
    new ProjectImage("Doutor Visão", doutorVisaoTitulo, StringUtil.URL + "images/doutorVisao/1.0-mobile.png"),
    new ProjectImage("Doutor Visão", doutorVisaoTitulo, StringUtil.URL + "images/doutorVisao/1.1-mobile.png"),
    new ProjectImage("Doutor Visão", doutorVisaoTitulo, StringUtil.URL + "images/doutorVisao/1.2-mobile.png"),
    new ProjectImage("Doutor Visão", doutorVisaoTitulo, StringUtil.URL + "images/doutorVisao/1.3-mobile.png"),
    new ProjectImage("Doutor Visão", doutorVisaoTitulo, StringUtil.URL + "images/doutorVisao/1.4-mobile.png"),
    new ProjectImage("Doutor Visão", doutorVisaoTitulo, StringUtil.URL + "images/doutorVisao/1.5-mobile.png"),
    new ProjectImage("Doutor Visão", doutorVisaoTitulo, StringUtil.URL + "images/doutorVisao/2.0-fluxo-form-n8n.png"),
    new ProjectImage("Doutor Visão", doutorVisaoTitulo, StringUtil.URL + "images/doutorVisao/2.2-fluxo-agent-n8n.png"),
    new ProjectImage("Doutor Visão", doutorVisaoTitulo, StringUtil.URL + "images/doutorVisao/2.1-fluxo-form-n8n.png"),
    new ProjectImage("Doutor Visão", doutorVisaoTitulo, StringUtil.URL + "images/doutorVisao/3.0-agendamento.png")
]

export const apiGestor: ProjectImage[] = [
    new ProjectImage("Swagger", apiGestorTitulo, StringUtil.URL + "images/api_java_gestor/1.0-swagger.png", "https://github.com/RamonRodSou/GestorChurchApi/tree/feature-002"),
    new ProjectImage("Swagger", apiGestorTitulo, StringUtil.URL + "images/api_java_gestor/1.1-swagger.png"),
    new ProjectImage("Swagger", apiGestorTitulo, StringUtil.URL + "images/api_java_gestor/1.2-swagger.png"),
    new ProjectImage("Swagger", apiGestorTitulo, StringUtil.URL + "images/api_java_gestor/1.3-swagger.png"),
    new ProjectImage("Postman e MySql", apiGestorTitulo, StringUtil.URL + "images/api_java_gestor/2.0-postman-myql.png"),
    new ProjectImage("Postman e MySql", apiGestorTitulo, StringUtil.URL + "images/api_java_gestor/2.1-postman-myql.png"),
    new ProjectImage("Postman e MySql", apiGestorTitulo, StringUtil.URL + "images/api_java_gestor/2.2-postman-myql.png"),
    new ProjectImage("Postman e MySql", apiGestorTitulo, StringUtil.URL + "images/api_java_gestor/2.3-postman-myql.png"),
    new ProjectImage("API Estrutura", apiGestorTitulo, StringUtil.URL + "images/api_java_gestor/3.0-estrutura.png"),
    new ProjectImage("API Estrutura", apiGestorTitulo, StringUtil.URL + "images/api_java_gestor/3.1-estrutura.png"),
    new ProjectImage("API Estrutura", apiGestorTitulo, StringUtil.URL + "images/api_java_gestor/3.2-estrutura.png"),
    new ProjectImage("API Estrutura", apiGestorTitulo, StringUtil.URL + "images/api_java_gestor/3.3-estrutura.png"),
]

export const onlyCifra: ProjectImage[] = [
    new ProjectImage("OnlyCifra", onlyCifraTitulo, StringUtil.URL + "images/onlyCifra/1.0-only.png", "https://github.com/RamonRodSou/OnlyCifra"),
    new ProjectImage("OnlyCifra", onlyCifraTitulo, StringUtil.URL + "images/onlyCifra/1.1-only.png"),
    new ProjectImage("OnlyCifra", onlyCifraTitulo, StringUtil.URL + "images/onlyCifra/1.2-only.png"),
    new ProjectImage("OnlyCifra", onlyCifraTitulo, StringUtil.URL + "images/onlyCifra/1.3-only.png"),
    new ProjectImage("OnlyCifra", onlyCifraTitulo, StringUtil.URL + "images/onlyCifra/1.4-only.png"),
    new ProjectImage("OnlyCifra", onlyCifraTitulo, StringUtil.URL + "images/onlyCifra/1.5-only.png"),
]

export const leitorPlaca: ProjectImage[] = [
    new ProjectImage("Leito de Placa", leitorPlacaTitulo, StringUtil.URL + "images/leitorPlaca/1.0-placa.png"),
    new ProjectImage("Leito de Placa", leitorPlacaTitulo, StringUtil.URL + "images/leitorPlaca/1.1-placa.png"),
    new ProjectImage("Leito de Placa", leitorPlacaTitulo, StringUtil.URL + "images/leitorPlaca/1.2-placa.png"),
    new ProjectImage("Leito de Placa", leitorPlacaTitulo, StringUtil.URL + "images/leitorPlaca/1.3-placa.png"),
    new ProjectImage("Telegram", leitorPlacaTitulo, StringUtil.URL + "images/leitorPlaca/2.0-telegam.png"),
    new ProjectImage("Telegram", leitorPlacaTitulo, StringUtil.URL + "images/leitorPlaca/2.1-telegam.png"),
]

export const formN8N: ProjectImage[] = [
    new ProjectImage("Compra de Igressos", formN8Ntitulo, StringUtil.URL + "images/ingresso/1.1-form.png", "https://github.com/RamonRodSou/Form-n8n-whatsapp"),
    new ProjectImage("Compra de Igressos", formN8Ntitulo, StringUtil.URL + "images/ingresso/1.2-form.png"),
    new ProjectImage("Workflow N8N", formN8Ntitulo, StringUtil.URL + "images/ingresso/2.0-fluxo_n8n.png"),
    new ProjectImage("Workflow N8N", formN8Ntitulo, StringUtil.URL + "images/ingresso/2.1-fluxo_n8n.png"),
]

export const kidflix: ProjectImage[] = [
    new ProjectImage("KidFlix Mobile", kidflixTitulo, StringUtil.URL + "images/kidflix/1.0-kidflix-mobile.png", "https://github.com/RamonRodSou/kidflix"),
    new ProjectImage("KidFlix Mobile", kidflixTitulo, StringUtil.URL + "images/kidflix/1.1-kidflix-mobile.png"),
    new ProjectImage("KidFlix Mobile", kidflixTitulo, StringUtil.URL + "images/kidflix/1.2-kidflix-mobile.png"),
    new ProjectImage("KidFlix Mobile", kidflixTitulo, StringUtil.URL + "images/kidflix/1.3-kidflix-mobile.png"),
    new ProjectImage("KidFlix Web", kidflixTitulo, StringUtil.URL + "images/kidflix/2.0-kidflix.png"),
    new ProjectImage("KidFlix Web", kidflixTitulo, StringUtil.URL + "images/kidflix/2.1-kidflix.png"),
    new ProjectImage("KidFlix Web", kidflixTitulo, StringUtil.URL + "images/kidflix/2.2-kidflix.png"),
    new ProjectImage("KidFlix Web", kidflixTitulo, StringUtil.URL + "images/kidflix/2.3-kidflix.png"),
]

export const cardapio: ProjectImage[] = [
    new ProjectImage("Cardápio", cardapioTitulo, StringUtil.URL + "images/cardapio/1.0-cardapio.png", "https://github.com/RamonRodSou/Cardapio"),
    new ProjectImage("Cardápio", cardapioTitulo, StringUtil.URL + "images/cardapio/1.1-cardapio.png"),
    new ProjectImage("Cardápio", cardapioTitulo, StringUtil.URL + "images/cardapio/1.2-cardapio.png"),
    new ProjectImage("Cardápio", cardapioTitulo, StringUtil.URL + "images/cardapio/1.3-cardapio.png"),
    new ProjectImage("Cardápio", cardapioTitulo, StringUtil.URL + "images/cardapio/1.4-cardapio.png"),
    new ProjectImage("Cardápio", cardapioTitulo, StringUtil.URL + "images/cardapio/1.5-cardapio.png"),
    new ProjectImage("Cardápio", cardapioTitulo, StringUtil.URL + "images/cardapio/1.6-cardapio.png"),
    new ProjectImage("Cardápio", cardapioTitulo, StringUtil.URL + "images/cardapio/1.7-cardapio.png"),
    new ProjectImage("Cardápio", cardapioTitulo, StringUtil.URL + "images/cardapio/1.8-cardapio.png"),
    new ProjectImage("Cardápio", cardapioTitulo, StringUtil.URL + "images/cardapio/1.9-cardapio.png"),
]

export const aluraCase: ProjectImage[] = [
    new ProjectImage("Postman e MySql", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/1.0-postman-msyl.png", 'https://github.com/RamonRodSou/Alura-Case'),
    new ProjectImage("Postman e MySql", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/1.1-postman-msyl.png"),
    new ProjectImage("Postman e MySql", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/1.2-postman-msyl.png"),
    new ProjectImage("Postman e MySql", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/1.3-postman-msyl.png"),
    new ProjectImage("Código e Estrutura", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/2.0-codigo.png"),
    new ProjectImage("Código e Estrutura", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/2.1-codigo.png"),
    new ProjectImage("Código e Estrutura", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/2.2-codigo.png"),
    new ProjectImage("Código e Estrutura", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/2.3-codigo.png"),
    new ProjectImage("Código e Estrutura", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/2.4-codigo.png"),
    new ProjectImage("Código e Estrutura", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/2.5-codigo.png"),
    new ProjectImage("Código e Estrutura", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/2.6-codigo.png"),
    new ProjectImage("Código e Estrutura", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/2.7-codigo.png"),
    new ProjectImage("Código e Estrutura", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/2.8-codigo.png"),
    new ProjectImage("Código e Estrutura", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/2.9-codigo.png"),
    new ProjectImage("Código e Estrutura", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/3.0-codigo.png"),
    new ProjectImage("Código e Estrutura", aluraCaseTitulo, StringUtil.URL + "images/aluraCase/3.1-codigo.png"),
]