import { useState, useEffect } from "react";
/* import { ModalPop } from "./modal"; */
import { ModalPop } from "./modal";
import { Boton, /* BotonMasMenos */ } from "./style";

export const Inicio = () => {
  const [budget, setBudget] = useState({
    web: false,
    seo: false,
    ads: false,
    pages: 3,
    lang: 1,
  });
  // MODAL POP-UP
  const [modal, setmodal] = useState(false);

  const AbrirCerrarModal = () => {
    setmodal(!modal);
  };
  const [total, setTotal] = useState(0);

  const updateBudget = (field, data) => {
    let newBudget = { ...budget };
    let newValue;
    // Inputs: Values
    if (typeof data != "boolean") {
      newValue = data.target.value;
    }
    // Checkbox: boolean
    else {
      newValue = data;
    }
    newBudget[field] = newValue;
    setBudget(newBudget);
  };

  useEffect(() => {
    calculateTotal();
    saveData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budget]);

  const calculateTotal = () => {
    let pagesLang = budget.pages * budget.lang * 30;
    let newTotal =
      (budget.web && 500) + (budget.seo && 300) + (budget.ads && 200);
    setTotal(newTotal + pagesLang);
  };

  const saveData = () => {
    localStorage.setItem("budgetSaved", JSON.stringify(budget));
  };

  /* const decrementCount = () => {
    setBudget(budget.pages--);
    console.log(budget.pages);
  };

  const incrementCount = () => {
    setBudget(budget.pages++);
    console.log(budget.pages);
  };
 */
  return (
    <div>
      <ul>
        <header>¿Qué quieres hacer?</header>
      </ul>
      <ul>
        <input
          type="checkbox"
          value="500"
          name="WEB"
          checked={budget.web}
          onChange={() => updateBudget("web", !budget.web)}
        />
        Una página WEB (500€) <br />
        {budget.web && (
          <div>
            <div>
              Nombre de pàgines:
              {/* <BotonMasMenos onClick={() => decrementCount()}>-</BotonMasMenos> */}
              <input
                className="border border-5 rounded-pill"
                type={"number"}
                placeholder={1}
                value={budget.pages}
                onChange={(event) => updateBudget("pages", event)}
              />
              {/* <BotonMasMenos onClick={() => incrementCount()}>+</BotonMasMenos> */}
              <Boton onClick={() => AbrirCerrarModal()}>i</Boton>
              {modal && <ModalPop cerrarModal={AbrirCerrarModal} />}
              <br />

              
              Nombre d'idiomes:
              <input
                className="border border-5 rounded-pill"
                type={"number"}
                placeholder={1}
                value={budget.lang}
                onChange={(event) => updateBudget("lang", event)}
              />
              <Boton onClick={() => AbrirCerrarModal()}>i</Boton>
              {modal && <ModalPop cerrarModal={AbrirCerrarModal} />}
            </div>
          </div>
        )}
      </ul>
      <ul>
        <input
          type="checkbox"
          value="300"
          name="SEO"
          checked={budget.seo}
          onChange={() => updateBudget("seo", !budget.seo)}
        />
        Una consulta SEO (300€) <br />
      </ul>
      <ul>
        <input
          type="checkbox"
          value="200"
          name="GOOGLEADS"
          checked={budget.ads}
          onChange={() => updateBudget("ads", !budget.ads)}
        />
        Una campaña Google ADS (200€) <br />
      </ul>

      <ul>Total: {total} </ul>
    </div>
  );
};
