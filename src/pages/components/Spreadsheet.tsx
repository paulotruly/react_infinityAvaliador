import Filter from "./Filter";

function Spreadsheet() {

  return (

    <div className="p-4 col-span-3 min-h-screen bg-gray-800">
    
      <Filter></Filter>

      {/* TABELA */}
      <div className="flex flex-col col-span-3 p2-6 h-auto">
          <table className="text-white">
            <thead>
              <tr className="border-b border-gray-500">
                <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800">Aluno</th>
                <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800">Número</th>
                <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800">Monitor</th>
                <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800">Avaliação</th>
                <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800">Feedback</th>
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
              </tr>
            </tbody>
          </table>
      </div>

    </div>

  );
}

export default Spreadsheet;
