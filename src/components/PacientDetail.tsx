import type { Pacient } from "../types"
import PacientDetailItem from "./PacientDetailItem"

type PacientDetailProps = {
    pacient: Pacient
}

export default function PacientDetail({pacient} : PacientDetailProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PacientDetailItem label="ID" data={pacient.id} />
        <PacientDetailItem label="Nombre" data={pacient.name} />
        <PacientDetailItem label="Cuidador" data={pacient.caretaker} />
        <PacientDetailItem label="Email" data={pacient.email} />
        <PacientDetailItem label="Fecha Alta" data={pacient.date.toString()} />
        <PacientDetailItem label="Síntomas" data={pacient.symptoms} />

        <div className="flex justify-between mt-10">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg cursor-pointer">
                Editar
            </button>

            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg cursor-pointer">
                Eliminar
            </button>
        </div>
    </div>
  )
}
