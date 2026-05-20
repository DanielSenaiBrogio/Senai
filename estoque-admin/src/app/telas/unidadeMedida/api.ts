import axios from "axios";
import { IUnidadeMedida } from "@/app/interfaces/iunidademedida";
const url = "https://vistoque.runasp.net/api/UnidadeMedida";

export async function Listar():Promise<IUnidadeMedida[]>{
    const response = await axios.get(url);
    
    console.log("Dados recebidos:", response.data);
    
    console.log("Status da requisição:", response.status);

    return response.data;
}
