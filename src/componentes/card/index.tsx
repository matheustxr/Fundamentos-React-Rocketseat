import './style.css';

 export type CardProps = {
    name: string;
    time: string;
}

export function Card(props: CardProps){
    return (
        <div className='Card'>
            <strong>{props.name} </strong>
            <small>{props.time}</small>
        </div>
    )
}



//  OUTRA FORMA 

/*export function Card({name, time}){
    return (
        <div className='Card'>
            <strong>{name} </strong>
            <small>{time}</small>
        </div>
    )
}*/