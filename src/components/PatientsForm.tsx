import { useForm } from 'react-hook-form'
import { Error } from './Error'
import type { DraftPatient } from '../types'

export const PatientsForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<DraftPatient>()

    const registerPatient = (data: DraftPatient) => {
        console.log("new patient registered", data)
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-auto md:mx-0 mb-8 md:mb-0">
            <div className="bg-white rounded-lg border border-slate-200 p-6 md:p-8">
                <div className="mb-8">
                    <h2 className="font-semibold text-xl text-slate-800">Register Patient</h2>
                    <p className="text-sm text-slate-500 mt-1">
                        Fill in the patient's information below
                    </p>
                </div>

                <form
                    className="space-y-5"
                    noValidate
                    onSubmit={handleSubmit(registerPatient)}
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Patient Name
                        </label>
                        <input
                            id="name"
                            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                            type="text"
                            placeholder="e.g. Max"
                            {...register('name', {
                                required: 'The name is required',
                            })}
                        />
                        {errors.name && <Error>{errors.name?.message?.toString()}</Error>}
                    </div>

                    <div>
                        <label htmlFor="caretaker" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Owner Name
                        </label>
                        <input
                            id="caretaker"
                            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                            type="text"
                            placeholder="e.g. Jane Smith"
                            {...register('caretaker', {
                                required: 'The owner is required',
                            })}
                        />
                        {errors.caretaker && <Error>{errors.caretaker?.message?.toString()}</Error>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Email Address
                        </label>
                        <input
                            id="email"
                            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                            type="email"
                            placeholder="e.g. jane@example.com"
                            {...register("email", {
                                required: 'The email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+(?:\.[A-Z0-9-]+)*\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        {errors.email && <Error>{errors.email?.message?.toString()}</Error>}
                    </div>

                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Admission Date
                        </label>
                        <input
                            id="date"
                            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                            type="date"
                            {...register('date', {
                                required: 'The admission date is required',
                            })}
                        />
                        {errors.date && <Error>{errors.date?.message?.toString()}</Error>}
                    </div>

                    <div>
                        <label htmlFor="symptoms" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Symptoms
                        </label>
                        <textarea
                            id="symptoms"
                            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow resize-y min-h-[80px]"
                            placeholder="Describe the symptoms..."
                            {...register('symptoms', {
                                required: 'The symptoms are required',
                            })}
                        />
                        {errors.symptoms && <Error>{errors.symptoms?.message?.toString()}</Error>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors cursor-pointer"
                    >
                        Save Patient
                    </button>
                </form>
            </div>
        </div>
    )
}
