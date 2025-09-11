import { apiGestor, doutorVisao, gestor, onlyCifra, leitorPlaca, formN8N, kidflix, cardapio, aluraCase } from "@components/ProjetoImages/GestorImages";
import { ProjectImage } from "@domain/ProjectImage";

export const portifolioPath: Record<string, ProjectImage[]> = {
    gestor: gestor,
    doutorVisao: doutorVisao,
    apiGestor: apiGestor,
    onlyCifra: onlyCifra,
    leitorPlaca: leitorPlaca,
    formN8N: formN8N,
    kidflix: kidflix,
    cardapio: cardapio,
    aluraCase: aluraCase
}