function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-100">

      <header className="flex flex-row justify-between items-center bg-purple-600 text-black h-auto py-8 px-10">
        <h1 className="text-lg"> Avalia365 </h1>
        <nav>
          <a href=""> Login </a>
        </nav>
      </header>

      <div className="grid grid-cols-4 flex-1">
        <div className="col-span-2 flex flex-col bg-yellow-600 justify-center items-center p-4">
          <p className="text-[20px] text-center"> Insira aqui seu token de avaliação </p>

          <div className="flex flex-row gap-6 mt-6">
            <input className="appearance-none p-2 rounded-lg" type="text"/>
            <button className="p-2 bg-yellow-400 px-6 rounded-lg"> Enviar </button>
          </div>

        </div>

        <div className="flex justify-center items-center col-span-2 bg-blue-100">
          
        </div>
      </div>

    </div>
  )
}

export default Home;
