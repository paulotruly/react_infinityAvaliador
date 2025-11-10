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
    <div onClick={handleClose} className={`flex fixed justify-center items-center h-full w-full transition-opacity duration-300 bg-black/30 backdrop-blur-lg z-[9999] ${isVisible ? "opacity-100" : "opacity-0"}`} >

      <div className="bg-white rounded-lg w-auto h-auto transform transition-transform duration-300 ease-out">
        
        <div  onClick={(e) => e.stopPropagation()}
              className="flex flex-col w-[400px]">

          <div className="rounded-t-lg flex justify-center items-center p-2 w-full bg-infinity-orange">
            <h3 className="my-2 text-lg text-white font-bold">Avaliando</h3>
          </div>

          {/* -------------------- FORMULÁRIO -------------------- */}
          <form className="w-full my-2 p-2 px-6 bg-white" action="">
            
            

          </form>
          {/* -------------------- FORMULÁRIO -------------------- */}
        </div>

      </div>

    </div>
  )
}

export default AddPopUp
