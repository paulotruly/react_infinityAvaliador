import DashboardLogo from "../../assets/DashboardLogo"

function Header() {

  return (
    <div className="flex flex-col p-4 bg-infinity-orange">

        <div className="flex flex-row ml-2 mt-4">
          
          <div className="flex justify-center items-center bg-white rounded-full w-12 h-12">
            <p className="text-lg font-bold text-infinity-orange"> KN </p>
          </div>

          <div className="flex flex-col justify-center items-center ml-4 mt-1">
            <p className="text-white"> Kaiki Nattan </p>
            <p className="text-white/50 text-sm"> Administrador </p>
          </div>

        </div>

        <div className="mt-10 ml-2">
          <p className="text-[12px] text-white/70"> Principal </p>

          <nav className="flex flex-col mt-4 font-bold gap-2 text-white">
            
            {/* === COLOCAR HOVER AQUI E ACHAR MAIS LOGOS === */}
            <div className="group flex flex-row group-hover:">
              <DashboardLogo fillColor="white"></DashboardLogo>
              <a href="" className="flex justify-center items-center"> Dashboard </a>
            </div>

            <div className="flex flex-row group-hover:">
              <DashboardLogo fillColor="white"></DashboardLogo>
              <a href="" className="flex justify-center items-center"> Dashboard </a>
            </div>

          </nav>

        </div>

    </div>
  )
}

export default Header
