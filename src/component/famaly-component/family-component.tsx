import type {SimpsonModel} from "../../models/SimpsonModel";
import {CharacterComponent} from "../character-component/character-component.tsx";
import {simpsons} from "../../array.ts";


export const FamilyComponent = () => {
    return(
        <div>
            {simpsons.map((simpson: SimpsonModel, index: number) => (
                <CharacterComponent item={simpson} key={index}>
                    {simpson.info}
                </CharacterComponent>
            ))}
            </div>
    )

}







