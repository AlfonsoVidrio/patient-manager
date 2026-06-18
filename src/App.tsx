import { FaPaw } from "react-icons/fa"
import { PatientsForm } from "./components/PatientsForm"
import { PatientsList } from "./components/PatientsList"

export const App = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <header className="flex flex-col items-center mb-12">
          <FaPaw className="text-slate-400 text-3xl mb-4" />
          <h1 className="text-center">
            <span className="block font-light text-2xl md:text-3xl text-slate-500 tracking-wide">
              Veterinary
            </span>
            <span className="block font-extrabold text-4xl md:text-5xl text-slate-800">
              Patient Manager
            </span>
          </h1>
          <div className="w-16 h-0.5 bg-blue-200 rounded-full my-5" />
          <p className="text-xs text-slate-400 tracking-[0.2em] uppercase">
            Patient Registration
          </p>
        </header>
        <div className="md:flex md:gap-8 max-w-6xl mx-auto items-start">
          <PatientsForm />
          <PatientsList />
        </div>
      </div>
    </div>
  )
}
