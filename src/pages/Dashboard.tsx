function Dashboard() {

  return (
    <div>
      <div className="fixed min-h-screen w-full bg-infinity-black">
        <div className="flex flex-col justify-center items-center bg-blue-500 p-10 m-10">

            <div className="py-6 bg-gray-800">
                <table className="text-white">
                    <thead>
                        <tr className="border-b border-gray-500">
                            <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800"> Aluno </th>
                            <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800"> Número </th>
                            <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800"> Monitor </th>
                            <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800"> Avaliação </th>
                            <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800"> Feedback </th>
                            <th className="h-auto px-6 pb-4 pt-6 text-left bg-gray-800"> <button className=""> filtro </button> </th>
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
                            <td className="px-6 py-6 text-gray-400 bg-gray-700"> </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard