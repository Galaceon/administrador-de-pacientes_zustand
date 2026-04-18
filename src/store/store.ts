import { create } from 'zustand'
import type { Pacient } from '../types'

type PacientState = {
    pacients: Pacient[]
}

export const usePacientStore = create<PacientState>(() => ({
    pacients: []
}))