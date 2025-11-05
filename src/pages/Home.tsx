function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-green-100">

      <header className="flex flex-row justify-between items-center bg-gray-100 text-black h-24 px-10">
        <h1 className="text-lg"> Avalia365 </h1>

        <nav>
          <a href=""> Login </a>
        </nav>
      </header>

      <main className="flex-1 p-10 bg-pink-100">
        <div className="flex flex-row bg-gray-200">

          <div className="flex flex-col justify-center items-center mx-10 bg-orange-200">
            <h2 className="text-lg text-center bg-blue-100 mb-6 max-w-xs"> Insira seu token aqui para que possamos realizar a avaliação </h2>
            <input className="p-2 rounded-full" type="text"/>
          </div>

          <img className="flex-1 h-[400px] bg-yellow-200" src="" alt="" />
        </div>
      </main>

    </div>
  )
}

export default Home