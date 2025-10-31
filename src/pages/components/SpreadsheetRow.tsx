function SpreadsheetRow() {

  return (
        <tr className="border-b border-gray-500">
            {/* nome do aluno */}
            <td className="px-6 py-6 text-gray-400 bg-gray-700">
                Nome do aluno
            </td>
            {/* telefone do aluno */}
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
  )
}

export default SpreadsheetRow