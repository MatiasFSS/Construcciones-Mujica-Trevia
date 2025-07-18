

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-800 text-lg font-semibold animate-pulse">
            Cargando...
            </p>
        </div>
    </div>
  )
}
