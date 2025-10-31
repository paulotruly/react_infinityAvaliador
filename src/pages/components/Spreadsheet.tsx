import Filter from "./Filter";
import SpreadsheetRow from "./SpreadsheetRow";

function Spreadsheet() {

  return (

    <div className="p-4 col-span-4 min-h-screen bg-gray-800">
    
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
                <SpreadsheetRow></SpreadsheetRow>
                <SpreadsheetRow></SpreadsheetRow>
                <SpreadsheetRow></SpreadsheetRow>
                <SpreadsheetRow></SpreadsheetRow>
                <SpreadsheetRow></SpreadsheetRow>
            </tbody>
          </table>
      </div>

    </div>

  );
}

export default Spreadsheet;
