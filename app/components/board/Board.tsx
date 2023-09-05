import { paresDeCartas } from "@/app/constants/cards";
import { Card } from "./components/Card";

type CardProps = {
    idDoPar: number;
    imagem: string;
    id: number;
}
  

export function Board(){
    return(
        <div className='grid grid-cols-4 gap-4 '>
            {paresDeCartas.map((carta: CardProps) => (
                <Card key={carta.id} {...carta}/>
            ))}
        </div>
    )
}