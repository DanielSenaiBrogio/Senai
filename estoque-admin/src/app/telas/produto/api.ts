import axios from "axios";
import { IProdutoPesquisa } from "@/app/interfaces/iprodutopesquisa";
const url = "https://vistoque.runasp.net/api/Produto";

export async function Listar():Promise<IProdutoPesquisa[]>{
    const response = await axios.get(url);
    
    console.log("Dados recebidos:", response.data);
    
    console.log("Status da requisição:", response.status);

    return response.data;
}
