import Form from "@/components/Form"

function Forms() {
  return(
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 text-black">
      <div className="flex-col items-center justify-center">
        <Form />
        <div className="mx-2 mt-5 bg-red-600 px-5 py-5 border rounded-full text-center text-white font-extrabold text-2xl">
            QUERO SER UM FRANQUEADO
        </div>
      </div>
    </div>
  )
}

export default Forms