import { usePatientStore } from "../store"
import { PatientDetails } from "./PatientDetails"

export const PatientsList = () => {
  const patients = usePatientStore(state => state.patients)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your {" "}
            <span className="text-blue-600 font-bold">patients and appointments</span>
          </p>
          {patients.map(patient => (
            <PatientDetails
              key={patient.id}
              patient={patient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No patients found</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start by adding patients  {" "}
            <span className="text-blue-600 font-bold">and they will appear here</span>
          </p>
        </>
      )}
    </div>
  )
}
