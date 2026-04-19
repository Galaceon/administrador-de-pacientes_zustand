import { usePacientStore } from "../store/store"
import PacientDetail from "./PacientDetail"

export default function PacientsList() {

    const pacients = usePacientStore(state => state.pacients)
    console.log(pacients)

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus
                        <span className="text-indigo-600 font-bold text-center"> pacientes y citas</span>
                    </p>
                    {pacients.map(pacient => (
                        <PacientDetail 
                            key={pacient.id}
                            pacient={pacient}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes
                        <span className="text-indigo-600 font-bold text-center"> y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}
