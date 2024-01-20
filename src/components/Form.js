const Form = () => {
  return (
    <div className="flex flex-col flex-grow min-h-7/8 uppercase px-3 min-w-[50vh] sm:min-w-[80vh]">
      <label className="block mb-2 text-sm font-bold text-red-600">
        Nome*:
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
      />

      <label className="block mb-2 text-sm font-bold text-red-600">
        Email*:
      </label>
      <input
        type="email"
        className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
      />

      <label className="block mb-2 text-sm font-bold text-red-600">
        Celular*:
      </label>
      <input
        type="tel"
        className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
      />

      <label className="block mb-2 text-sm font-bold text-red-600">
        Disponibilidade de Investimento*:
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
      />

      <label className="block mb-2 text-sm font-bold text-red-600">
        Estado*:
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
      />

      <label className="block mb-2 text-sm font-bold text-red-600">
        Cidade*:
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
      />
    </div>
  );
};

export default Form;
