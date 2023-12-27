import { ContainerSeparatorHorizontal, ContainerSeparatorVertical } from "./components-style-shared"

type SeparatorProps = {
    distance: number;
}

export function SeparatorHorizontal({ distance }: SeparatorProps){
    return(
        <ContainerSeparatorHorizontal distance={distance}/>
    )
}

export function SeparatorVertical({ distance }: SeparatorProps){
    return(
        <ContainerSeparatorVertical distance={distance}/>
    )
}