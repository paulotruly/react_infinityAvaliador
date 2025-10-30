function Filter() {

  return (
    <div className="flex flex-row items-center bg-pink-900">

        <h4 className="text-white font-bold mr-6">Filtros</h4>
        
          <div className="flex flex-row gap-12 bg-yellow-700">
            <select name="seletor" id="seletor" className="w-full p-1 rounded-lg border-white bg-white/10">
                <option value="" disabled selected>
                Monitor
                </option>
                <option value="opcao1">Opção 1</option>
            </select>

            <select name="seletor" id="seletor" className="w-full p-1 rounded-lg border-white bg-white/10">
                <option value="" disabled selected>
                Unidade
                </option>
                <option value="opcao1">Opção 1</option>
            </select>

            <select name="seletor" id="seletor" className="w-full p-1 rounded-lg border-white bg-white/10">
                <option value="" className="text-black" disabled selected>
                Data
                </option>
                <option value="opcao1" className="text-black">
                Opção 1
                </option>
            </select>
          </div>
        
          <div className="bg-blue-300">
            <button className="text-gray-100 bg-gray-500 py-1 px-4 rounded-lg">
              Filtrar
            </button>
            <button className="text-gray-400 bg-gray-700 py-1 px-4 rounded-lg">
              Limpar filtros
            </button>
          </div>
          
    </div>
  )
}

export default Filter