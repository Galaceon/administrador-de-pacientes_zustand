import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'
import type { DraftPacient, Pacient } from '../types'

// Type del Store
type PacientState = {
    pacients: Pacient[]
    addPacient: (data: DraftPacient) => void
    deletePacient: (id: Pacient['id']) => void
}

// Crear un ID para pacientes
const createPacient = (pacient: DraftPacient) : Pacient => {
    return {...pacient, id: uuidv4()}
}

// Es como un useReducer, tiene su state y la accion con la que cambiara el state
export const usePacientStore = create<PacientState>((set) => ({
    pacients: [],
    addPacient: (data) => {
        const newPacient = createPacient(data)

        set((state) => ({
            pacients: [...state.pacients, newPacient]
        }))
    },
    deletePacient: (id) => {
        set((state) => ({
            pacients: state.pacients.filter(pacient => pacient.id !== id)
        }))
    }
}))