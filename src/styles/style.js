import styled from "styled-components";

export const OverLay = styled.div`
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.5);
        padding: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
`;
export const ContenedorModal = styled.div`
    width: 500px;
    height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow:  rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`;
export const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8e8E8;

    h3 {
        font-weight: 500;
        font-size: 16px;
        color: #1766dc;
    }
`;
export const Boton = styled.button`
background-image: linear-gradient(to bottom, #DBFFFC, #00E6D4);
-webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
text-shadow: 3px 2px 1px #9daef5;
  -webkit-box-shadow: 6px 5px 24px #666666;
  -moz-box-shadow: 6px 5px 24px #666666;
  box-shadow: 6px 5px 24px #666666;
font-family: Arial;
  color: #fafafa;
  font-size: 12px;
  padding: 7px;
  text-decoration: none;
}
&:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;
export const BotonMasMenos = styled.button`
width:30px;
  height:30px;
  background-color:#E68B00;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  font-size:11px;
  text-transform: uppercase;
&:hover {
    opacity: 0.50;
  -moz-opacity: .50;
  filter:alpha (opacity=50);
}
`