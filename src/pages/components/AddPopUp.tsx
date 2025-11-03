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
    <div onClick={handleClose} className={`flex fixed justify-center items-center backdrop-blur-sm min-h-screen w-full transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`} >

      <div className="bg-white w-auto h-auto
      transform transition-transform duration-300 ease-out">
        
        <div className="flex flex-col p-4 bg-pink-300 w-[400px]">

          <h3 className="bg-blue-200 my-2 text-lg">Registrar monitores</h3>

          <form className="w-full mt-2" action="">

            <div className="flex flex-row p-2 border-2 border-black/10 rounded-full bg-white mb-2">
              <span className="flex mr-4 ml-1 justify-center items-center"> 𖦹 </span>
              <input className="w-full" type="text" placeholder="Nome completo" />
            </div>

            <div className="flex flex-row p-2 border-2 border-black/10 rounded-full bg-white mb-2">
              <span className="flex mr-2 ml-1 justify-center items-center"> 𖦹 </span>
              <select name="seletorCategoria" id="seletorCategoria" className="w-full">
                <option value=""disabled selected>
                Unidade
                </option>
              </select>
            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default AddPopUp
