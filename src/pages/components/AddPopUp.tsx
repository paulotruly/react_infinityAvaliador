import { useEffect, useState } from "react";

type AddPopUpProps = {
  onClose: () => void;
};

function AddPopUp({onClose}: AddPopUpProps) {
  //       estado      atualiza
  const [isVisible, setIsVisible] = useState(false);

  // componente surge como false e o useEffect torna ele true
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // arrow function chamada no onClick da div principal
  // ela torna o IsVisible falsa, pra tornar invisível (opacity-0)
  // e chama o onClose em 300ms, pra acompanhar o duration-300
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }

  return (
    // BLUR
    //                 aparece        invisível
    // ${isVisible ? "opacity-100" : "opacity-0"}
    // se for True,     aplica          senão
    // 
    // o duration-300 faz a transição ficar smooth
    // 
    <div onClick={handleClose} className={`flex fixed justify-center items-center h-full w-full transition-opacity duration-300 bg-black/30 backdrop-blur-sm z-[9999] ${isVisible ? "opacity-100" : "opacity-0"}`} >

      <div className="bg-white rounded-lg w-auto h-auto transform transition-transform duration-300 ease-out">
        
        <div  onClick={(e) => e.stopPropagation()}
              className="flex flex-col w-[400px]">

          <div className="rounded-t-lg flex justify-center items-center p-2 w-full bg-infinity-orange">
            <h3 className="my-2 text-lg text-white font-bold">Registrar monitores</h3>
          </div>

          {/* -------------------- FORMULÁRIO -------------------- */}
          <form className="w-full my-2 p-2 px-6 bg-white" action="">
            
            <div className="relative flex flex-row items-center">
                <p className="top-[2px] left-[10px] absolute font-light text-gray-600 bg-white text-[12px] px-2"> NOME </p>
                <div className="flex flex-row p-3 border-2 border-black/20 rounded-lg bg-white my-2 w-full">
                    <input className="w-full focus:outline-none focus:ring-0" type="text" placeholder="Insira aqui"/>
                </div>
            </div>

            <div className="relative flex flex-row items-center">
                <p className="top-[2px] left-[10px] absolute font-light text-gray-600 bg-white text-[12px] px-2"> UNIDADE </p>
                <div className="flex flex-row p-3 border-2 border-black/20 rounded-lg bg-white my-2 w-full">
                    <select name="seletorCategoria" id="seletorCategoria" className="w-full focus:outline-none focus:ring-0 text-gray-400">
                        <option value="" disabled selected>
                        Selecione a unidade
                        </option>
                    </select>
                </div>
            </div>

            <div className="relative flex flex-row items-center">
                <p className="top-[2px] left-[10px] absolute font-light text-gray-600 bg-white text-[12px] px-2"> CATEGORIA </p>
                <div className="flex flex-row p-3 border-2 border-black/20 rounded-lg bg-white my-2 w-full">
                    <select name="seletorCategoria" id="seletorCategoria" className="w-full focus:outline-none focus:ring-0 text-gray-400">
                        <option value="" disabled selected>
                        Atrele uma categoria ao monitor
                        </option>
                    </select>
                </div>
            </div>

            <div className="flex flex-row justify-between mt-4">
              <button className="bg-infinity-orange px-14 py-2 rounded-lg text-white"> Adicionar </button>
              <button
              onClick={handleClose}
              className="bg-white border-2 text-infinity-orange border-infinity-orange px-8 py-2 rounded-lg">
                Cancelar
              </button>
            </div>

          </form>
          {/* -------------------- FORMULÁRIO -------------------- */}
        </div>

      </div>

    </div>
  )
}

export default AddPopUp
