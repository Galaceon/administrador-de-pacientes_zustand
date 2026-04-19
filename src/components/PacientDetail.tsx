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
    </div>
  )
}
