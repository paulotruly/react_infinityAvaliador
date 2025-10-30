function Filter() {

  return (
    <div className="flex flex-row items-center justify-between py-4 bg-white/5">
        
        <h4 className="text-white font-bold mx-6">Filtros</h4>

          <div className="flex flex-row gap-12">
            <select name="seletor" id="seletor" className="w-full p-1 rounded-lg text-white border-white bg-white/10">
                <option value="" disabled selected>
                Monitor
                </option>
                <option value="opcao1">Opção 1</option>
            </select>

            <select name="seletor" id="seletor" className="w-full p-1 rounded-lg text-white border-white bg-white/10">
                <option value="" disabled selected>
                Unidade
                </option>
                <option value="opcao1">Opção 1</option>
            </select>

            <select name="seletor" id="seletor" className="w-full p-1 rounded-lg text-white border-white bg-white/10">
                <option value="" className="text-black" disabled selected>
                Data
                </option>
                <option value="opcao1" className="text-black">
                Opção 1
                </option>
            </select>
          </div>
        
          <div className="flex gap-4 mx-6">
            <button className="text-gray-100 bg-gray-500 py-1 px-4 rounded-md">
              Filtrar
            </button>
            <button className="text-gray-400 bg-gray-700 py-1 px-4 rounded-md">
              Limpar filtros
            </button>
          </div>
          
    </div>
  )
}

export default Filter