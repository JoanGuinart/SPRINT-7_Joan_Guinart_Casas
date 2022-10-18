import React from "react";
import { OverLay, ContenedorModal, EncabezadoModal } from "../styles/style.js";

export const ModalPop = (props) => {
  return (
    <>
      <OverLay href="#" onClick={props.cerrarModal}>
        <ContenedorModal>
          <EncabezadoModal>
            <h3>
              Aqui deberá indicar el número de páginas/idiomas que quiera para
              su WEB
            </h3>
          </EncabezadoModal>
        </ContenedorModal>
      </OverLay>
    </>
  );
};
