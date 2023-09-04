import { Card } from "./components/Card";

export function Board(){
    return(
        <div className='grid grid-cols-4 gap-4 '>
            <Card value={1}/>
            <Card value={2}/>
            <Card value={3}/>
            <Card value={4}/>
            <Card value={5}/>
            <Card value={6}/>
            <Card value={7}/>
            <Card value={8}/>
        </div>
    )
}