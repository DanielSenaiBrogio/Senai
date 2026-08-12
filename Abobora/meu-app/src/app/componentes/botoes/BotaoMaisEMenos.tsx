
 type Prop = {
        menos?: () => void;
        mais?: () => void;
        
    }
export function BotaoMaisEMenos ({mais, menos}: Prop){
    return(
    
        <div style={{gap: "10px",  flexDirection: 'column'}}>
            <button style={{padding: "10px", width: "50px"}} onClick={mais}>{"+"}</button>
            <br />
            <button style={{padding: "10px", width: "50px"}} onClick={menos}>{"-"}</button>
        </div>

    );
}