import TokenLogo from "../assets/TokenLogo";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-100">

      <div className="grid grid-cols-4 flex-1">

        <div className="relative col-span-1 bg-infinity-orange">
            <h1 className="absolute text-lg top-6 left-6 font-extrabold text-white"> Avalia365 </h1>
            <p className="absolute bottom-[150px] px-6 text-white font-bold text-lg"> "A avaliação periódica de professores pelos estudantes ajuda a identificar pontos fortes e fracos do ensino, contribuindo para a melhoria da qualidade e do programa acadêmico." </p>
            <p className="absolute bottom-[30px] px-6 text-sm text-white font-light"> Muchemwa, S., & Dhiwayo, A. (2025). Efficacy of periodic students’ instructor evaluation to enhance lecturer’s performance: A content analysis. Midland State University, Zimbabwe & University of the Free State, South Africa. </p>
        </div>

        <div className="col-span-3 flex flex-col bg-yellow-600 items-center justify-center">

          <div className='flex flex-col justify-center items-center w-1/2 py-14 bg-blue-200'>
            <div className="mb-4">
              <p className="text-[35px] font-extrabold text-center leading-tight"> Insira aqui seu token de avaliação </p>
            </div>

            <p className="w-2/3 text-center leading-tight"> Digite seu token para iniciar a avaliação e nos contar sua experiência! Sua opinião faz toda a diferença e nos ajuda a evoluir a cada dia. </p>

            <div className="flex flex-row gap-6 mt-6">
              <div className="flex flex-row justify-center items-center p-2 bg-white rounded-lg">
                <span className="mx-2"> <TokenLogo fillColor="gray"></TokenLogo> </span>
                <input className="appearance-none p-4 rounded-lg appearance-none" type="text" placeholder="0000"/>
              </div>
              <button className="p-2 bg-infinity-orange text-white px-6 rounded-lg"> Enviar </button>
            </div>
          </div>

          <div></div>
        </div>


      </div>

    </div>
  )
}

export default Home;
