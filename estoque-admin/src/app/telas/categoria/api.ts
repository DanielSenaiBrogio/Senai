import axios from "axios";
import { ICategoria } from "../../interfaces/icategoria";
const url = "https://vistoque.runasp.net/api/categoriaproduto";


export async function Listar():Promise<ICategoria[]>{
    const response = await axios.get(url);
    console.log("Dados recebidos:", response.data);
    
    console.log("Status da requisição:", response.status);

    return response.data;
}

export async function ObterPorId(id: string):Promise<ICategoria>{
    const response = await axios.get(url + "/" + id);
    return (response.data);
    
}