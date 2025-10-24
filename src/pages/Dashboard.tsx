function Dashboard() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="grid grid-cols-4 gap-6 w-auto h-[400px] bg-gray-800">

            {/* TABELA */}
            <div className="flex flex-col col-span-3">
                <div className="py-6 h-full">
                    <table className="text-white">
                        <thead>
                            <tr className="border-b border-gray-500">
                                <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800"> Aluno </th>
                                <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800"> Número </th>
                                <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800"> Monitor </th>
                                <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800"> Avaliação </th>
                                <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800"> Feedback </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-b border-gray-500">
                            {/* aluno */}
                                <td className="px-6 py-6 text-gray-400 bg-gray-700">
                                Nome do aluno
                                </td>
                            {/* aluno */}
                                <td className="px-6 py-6 text-gray-400 bg-gray-700">
                                8190000-0000
                                </td>
                            {/* monitor */}
                                <td className="px-6 py-6 text-gray-400 bg-gray-700">
                                Nome do monitor
                                </td>
                            {/* avaliação */}
                                <td className="px-6 py-6 text-gray-400 bg-gray-700">
                                10
                                </td>
                            {/* feedback */}
                                <td className="px-6 py-6 text-gray-400 bg-gray-700">
                                    12345678910111213141516171819202122232425
                                </td>
                            {/* vazio */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col col-span-1 w-full h-auto px-6">
                <h4 className="pb-4 pt-12 text-white font-bold bg-gray-800"> Filtros </h4>
                <div className="flex flex-col gap-6 mt-6">
                    <select name="seletor" id="seletor" className="w-full p-2 rounded-lg border-white text-white bg-white/10">
                        <option value="" disabled selected> Monitor </option>
                        <option value="opcao1"> Opção 1 </option>
                    </select>

                    <select name="seletor" id="seletor" className="w-full p-2 rounded-lg border-white text-white bg-white/10">
                        <option value="" disabled selected> Unidade </option>
                        <option value="opcao1"> Opção 1 </option>
                    </select>

                    <select name="seletor" id="seletor" className="w-full p-2 rounded-lg border-white text-white bg-white/10">
                        <option value="" className="text-black" disabled selected> Data </option>
                        <option value="opcao1" className="text-black"> Opção 1 </option>
                    </select>

                    <div className="flex flex-row justify-between">
                        <button className="text-gray-100 bg-gray-500 py-4 px-8 rounded-lg"> Filtrar </button>
                        <button className="text-gray-400 bg-gray-700 py-4 px-8 rounded-lg"> Limpar filtros </button>
                    </div>
                </div>
            </div>

      </div>
    </div>
  )
}

export default Dashboard