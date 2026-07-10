import type { Patient } from "../types"
import { PatientDetailItem } from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}

export const PatientDetails = ({ patient }: PatientDetailsProps) => {
    return (
        <div className="mx-10 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="ID" data={patient.id} />
            <PatientDetailItem label="Name" data={patient.name} />
            <PatientDetailItem label="Caretaker" data={patient.caretaker} />
            <PatientDetailItem label="Email" data={patient.email} />
            <PatientDetailItem label="Discharge Date" data={patient.date.toString()} />
            <PatientDetailItem label="Symptoms" data={patient.symptoms} />

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase rounded-lg cursor-pointer" >
                    Edit
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg cursor-pointer" >
                    Delete
                </button>
            </div>
        </div>
    )
}
