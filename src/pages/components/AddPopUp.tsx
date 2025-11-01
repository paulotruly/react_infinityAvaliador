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

      <div className="bg-white w-[100px] h-[100px]
      transform transition-transform duration-300 ease-out">
        oii
      </div>

    </div>
  )
}

export default AddPopUp
