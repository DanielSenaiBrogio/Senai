type props = {
    coluna: string;
    lista: any[];
}
export function ListaPadrao({lista, coluna}: props){
return(
<ul>
    {
        lista.map((item, indexItem) => (
            <li key={indexItem}>{item[coluna]}</li>
        ))
    }
</ul>

);

    

}
