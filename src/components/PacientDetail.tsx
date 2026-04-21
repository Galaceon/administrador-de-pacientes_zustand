import { toast } from "react-toastify"

import { usePacientStore } from "../store/store"
import type { Pacient } from "../types"
import PacientDetailItem from "./PacientDetailItem"

type PacientDetailProps = {
    pacient: Pacient
}

export default function PacientDetail({pacient} : PacientDetailProps) {

    const { deletePacient, getPacientById } = usePacientStore()

    const handleClick = () => {
        deletePacient(pacient.id)

        toast.error('Paciente Eliminado', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PacientDetailItem label="ID" data={pacient.id} />
            <PacientDetailItem label="Nombre" data={pacient.name} />
            <PacientDetailItem label="Cuidador" data={pacient.caretaker} />
            <PacientDetailItem label="Email" data={pacient.email} />
            <PacientDetailItem label="Fecha Alta" data={pacient.date.toString()} />
            <PacientDetailItem label="Síntomas" data={pacient.symptoms} />

            <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between mt-10 ">
                <button 
                    type="button"
                    onClick={() => getPacientById(pacient.id)}
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg cursor-pointer"
                >
                    Editar
                </button>

                <button
                    type="button"
                    onClick={handleClick}
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg cursor-pointer"
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
