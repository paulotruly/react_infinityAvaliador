import TokenLogo from "../assets/TokenLogo";
import LoginLogo from "../assets/LoginLogo"

function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="grid grid-cols-4 flex-1">

        <div className="bg-[url(./assets/background.jpg)] bg-center bg-cover bg-no-repeat col-span-3 relative flex flex-col">
          
          <div className="fixed flex w-full justify-start items-center pl-4 py-2 z-index-300">
            <a className="bg-black rounded-full p-1" href="">
              <LoginLogo fillColor="white"></LoginLogo>
            </a>
          </div> 

          <div className="flex justify-center items-center h-full">
            <div className='flex flex-col justify-center items-center w-1/2 py-14 mt-4 text-white bg-black/20 backdrop-blur-md bg-gradient-to-tr from-black/50 to-white/30 border-2 shadow-lg border-white/20 rounded-[20px]'>
              <div className="mb-4">
                <p className="text-[35px] font-extrabold text-center leading-tight"> Insira aqui seu token de avaliação </p>
              </div>

              <p className="w-2/3 text-center leading-tight"> Digite seu token para iniciar a avaliação e nos contar sua experiência! Sua opinião faz toda a diferença e nos ajuda a evoluir a cada dia. </p>

              <div className="flex flex-row gap-6 mt-6">
                <div className="flex flex-row justify-center items-center p-2 bg-white rounded-lg shadow-lg">
                  <span className="mx-2"> <TokenLogo fillColor="gray"></TokenLogo> </span>
                  <input className="appearance-none p-4 rounded-lg" type="text" placeholder="0000"/>
                </div>
                <button className="p-2 bg-infinity-orange text-white px-6 rounded-lg shadow-lg"> Enviar </button>
              </div>
            </div>
          </div>

        </div>

                <div className="relative col-span-1 bg-infinity-orange">
            <h1 className="absolute text-lg top-6 left-6 font-extrabold text-white"> Review247 </h1>
            <p className="absolute bottom-[150px] px-6 text-white font-bold text-lg"> "A avaliação periódica de professores pelos estudantes ajuda a identificar pontos fortes e fracos do ensino, contribuindo para a melhoria da qualidade e do programa acadêmico." </p>
            <p className="absolute bottom-[30px] px-6 text-sm text-white font-light"> Muchemwa, S., & Dhiwayo, A. (2025). Efficacy of periodic students’ instructor evaluation to enhance lecturer’s performance: A content analysis. Midland State University, Zimbabwe & University of the Free State, South Africa. </p>
        </div>


      </div>

    </div>
  )
}

export default Home;
