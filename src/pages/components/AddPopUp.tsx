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
    <div onClick={handleClose} className={`flex fixed justify-center items-center backdrop-blur-sm h-full w-full transition-opacity duration-300 bg-black/30 ${isVisible ? "opacity-100" : "opacity-0"}`} >

      <div className="bg-white rounded-lg w-auto h-auto transform transition-transform duration-300 ease-out z-30">
        
        <div  onClick={(e) => e.stopPropagation()}
              className="flex flex-col w-[400px]">

          <div className="rounded-t-lg flex justify-center items-center p-2 w-full bg-infinity-orange">
            <h3 className="my-2 text-lg text-white font-bold">Registrar monitores</h3>
          </div>

          {/* -------------------- FORMULÁRIO -------------------- */}
          <form className="w-full my-2 p-2 px-6 bg-white" action="">
            
            <div className="flex flex-row p-2 border-2 border-black/20 rounded-lg bg-white my-2">
              <span className="flex mr-4 ml-1 justify-center items-center"> 𖦹 </span>
              <input className="w-full" type="text" placeholder="Nome completo" />
            </div>

            <div className="flex flex-row p-2 border-2 border-black/20 rounded-lg bg-white my-2">
              <span className="flex mr-2 ml-1 justify-center items-center"> 𖦹 </span>
              <select name="seletorCategoria" id="seletorCategoria" className="w-full">
                <option value=""disabled selected>
                Unidade
                </option>
              </select>
            </div>

            <div className="flex flex-row p-2 border-2 border-black/20 rounded-lg bg-white my-2">
              <span className="flex mr-2 ml-1 justify-center items-center"> 𖦹 </span>
              <select name="seletorCategoria" id="seletorCategoria" className="w-full">
                <option value=""disabled selected>
                Categoria
                </option>
              </select>
            </div>

          </form>
          {/* -------------------- FORMULÁRIO -------------------- */}
        </div>

      </div>

    </div>
  )
}

export default AddPopUp
