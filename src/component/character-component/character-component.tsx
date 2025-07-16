import type {SimpsonModel} from "../../models/SimpsonModel";

import './character-component.css';

interface CharacterComponentProps{
    item:SimpsonModel,


}
export const CharacterComponent =({item}:CharacterComponentProps)=>{
    return(
        <div className={'card'}>
            <h3 className={'person-name'}>{item.name} {item.surname}</h3>
            <p className={'person-info'}>{item.age},{item.info}</p>
            <img src={item.photo}/>
        </div>
    );
};
