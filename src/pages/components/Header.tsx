import DashboardLogo from "../../assets/DashboardLogo"
import AddEmployeeLogo from "../../assets/AddEmployeeLogo"
import AddPopUp from "./AddPopUp"
import { useState } from "react"

function Header() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  // ARROW FUNCTION PRA ABRIR E FECHAR O POPUP
  const handleOpenPopUp = () => setIsPopUpOpen(true);
  const handleClosePopUp = () => setIsPopUpOpen(false);

  return (

    <div className="flex flex-col bg-infinity-orange">

      {/* AQUI ELE SÓ RENDERIZA O POPUP SE ELE ESTIVER ABERTO */}
      {  isPopUpOpen && <AddPopUp onClose={handleClosePopUp}/>  }

        <div className="m-4">
          <div className="flex flex-row ml-2 mt-4 bg-infinity-orange">
            
            <div className="flex justify-center items-center bg-white rounded-full w-12 h-12">
              <p className="text-lg font-bold text-infinity-orange"> KN </p>
            </div>

            <div className="flex flex-col justify-center items-center ml-4 mt-1">
              <p className="text-white"> Kaiki Nattan </p>
              <p className="text-white/50 text-sm"> Administrador </p>
            </div>

          </div>

          <div className="mt-10 mx-2">
            <p className="text-[12px] text-white/70"> Principal </p>

            <nav className="flex flex-col mt-4 font-bold gap-2 text-white">
              {/* === COLOCAR HOVER AQUI E ACHAR MAIS LOGOS === */}
              <a href="" className="hover:scale-105 hover:mb-y hover:bg-white/10 transition-all p-1 rounded-full">
              <div className="flex flex-row">
                <DashboardLogo fillColor="white"></DashboardLogo>
                <p className="ml-2 flex justify-center items-center"> Dashboard </p>
              </div>
              </a>

              <a
              onClick={(e) => {e.preventDefault(); handleOpenPopUp();}}
              href=""
              className="hover:scale-105 hover:mb-y hover:bg-white/10 transition-all p-1 rounded-full">

              <div className="flex flex-row group-hover:">
                <AddEmployeeLogo fillColor="white"></AddEmployeeLogo>
                <p className="ml-2 flex justify-center items-center"> Add </p>
              </div>

              </a>
              
            </nav>
          </div>
        </div>
    </div>
  )
}

export default Header
