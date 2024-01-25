const Form = () => {
  return (
    <div className="flex justify-center items-center mx-4 w-full">
      <div className="flex-col justify-center items-center w-full max-w-full mb-8 mt-2 mx-4 text-black">
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
          <select
          className="w-full px-3 py-2 mb-4 border rounded-full focus:outline-none focus:border-2 border-red-700 transition-all duration-300"
        >
          <option value="80000-100000">R$80.000 - R$100.000</option>
          <option value="100000-120000">R$100.000 - R$120.000</option>
          <option value="120000-140000">R$120.000 - R$140.000</option>
        </select>

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

        <div className="w-full mt-5 bg-red-600 px-5 py-3 rounded-full text-center text-white font-extrabold text-lg">
          QUERO SER UM FRANQUEADO
        </div>
      </div>
    </div>
  );
};

export default Form;
