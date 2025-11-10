import { useState } from 'react';
import { Rating } from 'primereact/rating';

function StarInput() {
// guarda o número de estrelas selecionadas e começa com indefinido
  const [value, setValue] = useState<number | undefined>(undefined);

  return (
    <div className="my-4">
      <Rating
        value={value}
        onChange={(e) => setValue(e.value ?? undefined)} // função é chamada quando o usuário clica em uma estrela
        stars={5}
        cancel={false}
      />
    </div>
  );
}

export default StarInput;
