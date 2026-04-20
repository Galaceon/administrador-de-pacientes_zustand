import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import type { DraftPacient, Pacient } from '../types'

// Type del Store
type PacientState = {
    pacients: Pacient[]
    activeId: Pacient['id']
    addPacient: (data: DraftPacient) => void
    deletePacient: (id: Pacient['id']) => void
    getPacientById: (id: Pacient['id']) => void
    updatePacient: (data: DraftPacient) => void
}

// Crear un ID para pacientes
const createPacient = (pacient: DraftPacient) : Pacient => {
    return {...pacient, id: uuidv4()}
}

// Es como un useReducer, tiene su state y la accion con la que cambiara el state
export const usePacientStore = create<PacientState>()(
    devtools((set) => ({
        pacients: [],
        activeId: '',
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
        },
        getPacientById: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updatePacient: (data) => {
            set((state) => ({
                pacients: state.pacients.map(pacient => pacient.id === state.activeId ? {id: state.activeId, ...data} : pacient),
                activeId: ''
            }))
        }
    }))
)