import Spreadsheet from "./components/Spreadsheet"
import Header from "./components/Header"

function Dashboard() {

  return (
    <div className="grid grid-cols-5 min-h-screen bg-pink-500">
        <Header></Header>
        <Spreadsheet></Spreadsheet>
    </div>
  )
}

export default Dashboard