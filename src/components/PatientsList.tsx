import { usePatientStore } from "../store"
import { PatientDetails } from "./PatientDetails"

export const PatientsList = () => {
  const patients = usePatientStore(state => state.patients)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:max-h-[calc(100vh-16rem)] md:overflow-y-auto">
      {patients.length ? (
        <div className="space-y-5">
          {patients.map(patient => (
            <PatientDetails
              key={patient.id}
              patient={patient}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-slate-200 p-6 md:p-8 text-center">
          <p className="text-sm text-slate-500">No patients registered yet.</p>
          <p className="text-sm text-slate-500 mt-1">Add one from the form and it will appear here.</p>
        </div>
      )}
    </div>
  )
}
