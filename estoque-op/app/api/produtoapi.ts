import axios from 'axios';
import { IProduto } from '../interfaces/produtointerface';

const url = "https://vistoque.runasp.net/api/produto";

export async function Get(): Promise<IProduto[]> {  
    const resposta = await axios.get(url);

    console.log(resposta.status);
    console.log(resposta.data);
    
    return resposta.data;
}