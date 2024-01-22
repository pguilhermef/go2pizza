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
          <option value="10000-20000">R$10.000 - R$20.000</option>
          <option value="20000-30000">R$20.000 - R$30.000</option>
          <option value="30000-40000">R$30.000 - R$40.000</option>
          <option value="40000-50000">R$40.000 - R$50.000</option>
          <option value="50000-60000">R$50.000 - R$60.000</option>
          <option value="60000-70000">R$60.000 - R$70.000</option>
          <option value="70000-80000">R$70.000 - R$80.000</option>
          <option value="80000-90000">R$80.000 - R$90.000</option>
          <option value="90000-100000">R$90.000 - R$100.000</option>
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
