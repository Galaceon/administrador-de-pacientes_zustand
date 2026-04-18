import { usePacientStore } from "../store/store"

export default function PacientsList() {

    const pacients = usePacientStore(state => state.pacients)
    console.log(pacients)

    return (
        <div>PacientsList</div>
    )
}
