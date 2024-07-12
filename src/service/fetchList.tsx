import listSolution from "../components/ListSolution/ListSolution"
import ISolution from "../interface/ISolution"


export default async function fetchList(): Promise<ISolution[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listSolution)
        }, 500)
    })
}