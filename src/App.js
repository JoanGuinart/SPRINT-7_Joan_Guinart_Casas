import React, { useState, useEffect } from "react";

function App() {
  const [WEBChecked, setWEBChecked] = useState(false);
  const [SEOChecked, setSEOChecked] = useState(false);
  const [ADSChecked, setADSChecked] = useState(false);
  const [Pages, setPages] = useState(1);
  const [Idiomas, setIdiomas] = useState(1);
  console.log(WEBChecked, SEOChecked, ADSChecked);

  const WEBCheck = () => {
    setWEBChecked(!WEBChecked);
  };
  const SEOCheck = () => {
    setSEOChecked(!SEOChecked);
  };
  const ADSCheck = () => {
    setADSChecked(!ADSChecked);
  };

  const [sumaTotal, setsumaTotal] = useState(0);
  console.log(sumaTotal);

  let multiplicacio = Pages * Idiomas * 30;

  useEffect(() => {
    setsumaTotal(0);
    WEBChecked &&
      setsumaTotal((valorActual) => valorActual + 500 + multiplicacio);
    SEOChecked && setsumaTotal((valorActual) => valorActual + 300);
    ADSChecked && setsumaTotal((valorActual) => valorActual + 200);
  }, [WEBChecked, SEOChecked, ADSChecked, Pages, Idiomas, multiplicacio]);

  useEffect(() => {
    localStorage.setItem("WEB", JSON.stringify(WEBChecked));
    localStorage.setItem("SEO", JSON.stringify(SEOChecked));
    localStorage.setItem("ADS", JSON.stringify(ADSChecked));
    localStorage.setItem("Suma total", JSON.stringify(sumaTotal));
    localStorage.setItem("Pages", JSON.stringify(Pages));
    localStorage.setItem("Idiomas", JSON.stringify(Idiomas));
  }, [WEBChecked, SEOChecked, ADSChecked, sumaTotal, Pages, Idiomas]);

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
          checked={WEBChecked}
          onChange={WEBCheck}
        />
        Una página web (500€) <br />
        {WEBChecked && (
          <div>
            <h5>
              Nombre de pàgines:
              <input
                type={"number"}
                placeholder={1}
                onChange={(event) => setPages(event.target.value)}
              />
              <br />
              Nombre d'idiomes:
              <input
                type={"number"}
                placeholder={1}
                onChange={(event) => setIdiomas(event.target.value)}
              />
            </h5>
          </div>
        )}
      </ul>
      <ul>
        <input
          type="checkbox"
          value="300"
          name="SEO"
          checked={SEOChecked}
          onChange={SEOCheck}
        />
        Una consulta SEO (300€) <br />
      </ul>
      <ul>
        <input
          type="checkbox"
          value="200"
          name="GOOGLEADS"
          checked={ADSChecked}
          onChange={ADSCheck}
        />
        Una campaña Google Ads (200€) <br />
      </ul>

      <ul>Total: {sumaTotal} </ul>
    </div>
  );
}

export default App;
