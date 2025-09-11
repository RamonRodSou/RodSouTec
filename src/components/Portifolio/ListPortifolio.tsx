import { Project } from '@domain/Project'
import { aluraCaseDescription, apiJavaGestorDescription, cardapioDescription, dashboardDescription, doutorVisaoDescription, formN8NDescription, kidflixDescription, leitoPlacaDescription, onlyCifraDescription } from '@utils/description'
import { aluraCaseTitulo, apiGestorTitulo, cardapioTitulo, dashboardTitulo, doutorVisaoTitulo, formN8Ntitulo, kidflixTitulo, leitorPlacaTitulo, onlyCifraTitulo } from "@utils/projectNames"
import { StringUtil } from '@utils/string'


export const listPortifolio: Project[] = [
    new Project(dashboardTitulo, dashboardDescription, 'gestor', StringUtil.URL + "images/dashboard/perfil.png"),
    new Project(doutorVisaoTitulo, doutorVisaoDescription, 'doutorVisao', StringUtil.URL + "images/doutorVisao/perfil.png"),
    new Project(apiGestorTitulo, apiJavaGestorDescription, 'apiGestor', StringUtil.URL + "images/api_java_gestor/1.0-swagger.png"),
    new Project(onlyCifraTitulo, onlyCifraDescription, 'onlyCifra', StringUtil.URL + "images/onlyCifra/1.0-only.png"),
    new Project(aluraCaseTitulo, aluraCaseDescription, 'aluraCase', StringUtil.URL + "images/aluraCase/perfil.png"),
    new Project(leitorPlacaTitulo, leitoPlacaDescription, 'leitorPlaca', StringUtil.URL + "images/leitorPlaca/1.0-placa.png"),
    new Project(formN8Ntitulo, formN8NDescription, 'formN8N', StringUtil.URL + "images/ingresso/1.0-form.png"),
    new Project(kidflixTitulo, kidflixDescription, 'kidflix', StringUtil.URL + "images/kidflix/perfil.png"),
    new Project(cardapioTitulo, cardapioDescription, 'cardapio', StringUtil.URL + "images/cardapio/perfil.png"),
]
