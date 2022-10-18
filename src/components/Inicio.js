import { useState, useEffect } from "react";
import { ModalPop } from "./modal";
import { Boton, BotonMasMenos } from "../styles/style";

export const Inicio = () => {
  //
  // USESTATES :

  const [budget, setBudget] = useState({
    web: false,
    seo: false,
    ads: false,
    pages: 1,
    lang: 1,
    budgetName: "",
    name: "",
  });
  const [modal, setmodal] = useState(false);
  const [total, setTotal] = useState(0);

  // USEFFECTS :

  useEffect(() => {
    localStorage.setItem("pressupost", JSON.stringify(budget));
  }, [budget]);

  useEffect(() => {
    calculateTotal();
    saveData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budget]);

  //FUNCTIONS :

  const AbrirCerrarModal = () => {
    setmodal(!modal);
  };

  const updateBudget = (field, data) => {
    let newBudget = { ...budget };
    let newValue;
    if (typeof data != "boolean") {
      newValue = data.target.value;
    } else {
      newValue = data;
    }
    newBudget[field] = newValue;
    setBudget(newBudget);
  };

  const calculateTotal = () => {
    let pagesLang = budget.pages * budget.lang * 30;
    let newTotal =
      (budget.web && 500) + (budget.seo && 300) + (budget.ads && 200);
    setTotal(newTotal + pagesLang);
  };

  const saveData = () => {
    localStorage.setItem("budgetSaved", JSON.stringify(budget));
  };

  // FUNCIONES BOTONES MAS Y MENOS :

  const PagesCount = (resta, suma) => {
    let budgetMasMenos = { ...budget };
    if (resta) {
      budgetMasMenos.pages--;
    } else if (suma) {
      budgetMasMenos.pages++;
    }
    setBudget(budgetMasMenos);
  };

  const LangCount = (resta, suma) => {
    let budgetMasMenos = { ...budget };
    if (resta) {
      budgetMasMenos.lang--;
    } else if (suma) {
      budgetMasMenos.lang++;
    }
    setBudget(budgetMasMenos);
  };

  return (
    <div>
      <div>
        <ul>
          <header>¿Qué quieres hacer?</header>
        </ul>
        <ul>
          <input
            type="text"
            name="budgetName"
            onChange={(event) => updateBudget("budgetName", event)} />
          Nombre de presupuesto
          <br />
          <input
            type="text"
            name="name"
            onChange={(event) => updateBudget("name", event)} />
          Usuario
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

                <BotonMasMenos onClick={(resta) => PagesCount(resta, 0)}> - </BotonMasMenos>

                <input
                  className="border border-5 rounded-pill"
                  type={"number"}
                  placeholder={1}
                  value={budget.pages}
                  onChange={(event) => updateBudget("pages", event)} />

                <BotonMasMenos onClick={(suma) => PagesCount(0, suma)}> + </BotonMasMenos>

                <Boton onClick={() => AbrirCerrarModal()}>i</Boton>

                {modal && <ModalPop cerrarModal={AbrirCerrarModal} />}

                <br />


                Nombre d'idiomes:

                <BotonMasMenos onClick={(resta) => LangCount(resta, 0)}> - </BotonMasMenos>

                <input
                  className="border border-5 rounded-pill"
                  type={"number"}
                  placeholder={1}
                  value={budget.lang}
                  onChange={(event) => updateBudget("lang", event)} />

                <BotonMasMenos onClick={(suma) => LangCount(0, suma)}> + </BotonMasMenos>

                <Boton onClick={() => AbrirCerrarModal()}> i </Boton>

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
            onChange={() => updateBudget("seo", !budget.seo)} />
          Una consulta SEO (300€) <br />
        </ul>

        <ul>
          <input
            type="checkbox"
            value="200"
            name="GOOGLEADS"
            checked={budget.ads}
            onChange={() => updateBudget("ads", !budget.ads)} />
          Una campaña Google ADS (200€) <br />
        </ul>

        <ul>Total: {total} </ul>

        <br />

        <button>guardar</button>

      </div>
      <br />

      <div>

      </div>
    </div>
  );
};
