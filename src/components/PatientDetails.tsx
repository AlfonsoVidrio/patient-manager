import { toast } from "react-toastify"
import type { Patient } from "../types"
import { PatientDetailItem } from "./PatientDetailItem"
import { usePatientStore } from "../store"

type PatientDetailsProps = {
    patient: Patient
}

export const PatientDetails = ({ patient }: PatientDetailsProps) => {
    const deletePatient = usePatientStore(state => state.deletePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id)
        toast("Patient deleted successfully", {
            type: "error"
        })
    }

    return (
        <div className="bg-white rounded-lg border border-slate-200 p-6 md:p-8">
            <PatientDetailItem label="ID" data={patient.id} />
            <PatientDetailItem label="Name" data={patient.name} />
            <PatientDetailItem label="Caretaker" data={patient.caretaker} />
            <PatientDetailItem label="Email" data={patient.email} />
            <PatientDetailItem label="Discharge Date" data={patient.date.toString()} />
            <PatientDetailItem label="Symptoms" data={patient.symptoms} />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2.5 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={() => getPatientById(patient.id)}
                >
                    Edit
                </button>

                <button
                    type="button"
                    className="py-2.5 px-8 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={handleClick}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
