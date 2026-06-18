export const Error = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="mt-2 bg-red-50 border-l-4 border-rose-500 text-rose-700 font-medium p-3 text-sm rounded">{children}</p>
    )
}
