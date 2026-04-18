import { create } from 'zustand'
import type { DraftPacient, Pacient } from '../types'

type PacientState = {
    pacients: Pacient[]
    addPacient: (data: DraftPacient) => void
}

export const usePacientStore = create<PacientState>(() => ({
    pacients: [],
    addPacient: (data) => {
        console.log(data)
    }
}))