'use client';
type Props = {
        distancia? : number;
        funcaoVoltar?:() => void 
        funcaoAvancar?: () => void 
    }
export function BotaoNavegacao({distancia, funcaoVoltar, funcaoAvancar}: Props) {
    
    return (
        <div style={{width: distancia || 20, display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
            <button onClick={funcaoVoltar}>{"<"}</button>
            <button onClick={funcaoAvancar}>{">"}</button>
        </div>
    );
}