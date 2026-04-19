import type { Pacient } from "../types"

type PacientDetailProps = {
    pacient: Pacient
}

export default function PacientDetail({pacient} : PacientDetailProps) {
  return (
    <div>{pacient.name}</div>
  )
}
