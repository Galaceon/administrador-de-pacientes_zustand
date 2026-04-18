import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'
import type { DraftPacient, Pacient } from '../types'

type PacientState = {
    pacients: Pacient[]
    addPacient: (data: DraftPacient) => void
}

const createPacient = (pacient: DraftPacient) : Pacient => {
    return {...pacient, id: uuidv4()}
}

export const usePacientStore = create<PacientState>((set) => ({
    pacients: [],
    addPacient: (data) => {
        const newPacient = createPacient(data)

        set((state) => ({
            pacients: [...state.pacients, newPacient]
        }))
    }
}))