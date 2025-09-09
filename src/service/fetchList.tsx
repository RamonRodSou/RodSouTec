import { Project } from "@domain/Project"
import ListDuvidas from "../components/Duvidas/ListDuvidas"
import listProject from "../components/Projetos/ListProject"
import listSolution from "../components/Solutions/ListSolution"
import ListVantagem from "../components/Vantagens/ListVantagens"
import IDuvidas from "../interface/IDuvidas"
import IProject from "../interface/IProject"
import ISolution from "../interface/ISolution"
import IVantagem from "../interface/IVantagem"
import { listPortifolio } from "@components/Portifolio/ListPortifolio"

export async function fetchListSolution(): Promise<ISolution[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listSolution)
        }, 500)
    })
}

export async function fetchListVantagens(): Promise<IVantagem[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ListVantagem)
        }, 500)
    })
}

export async function fetchListDuvidas(): Promise<IDuvidas[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ListDuvidas)
        }, 500)
    })
}

export async function fetchListProject(): Promise<IProject[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listProject)
        }, 500)
    })
}

export async function fetchListPortifolio(): Promise<Project[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listPortifolio)
        }, 500)
    })
}