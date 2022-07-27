import React, { useEffect, useState } from "react";
import Search1 from "../components/Search";
import {
  Agro,
  Divi,
  Fondo,
  H4,
  Imagro,
  Tarjeta,
  Texto,
  Grande,
  Productos,
  ContBotones,
  Search,
  Tercera,
  ProductosA,
  Linea,
  ContImagen,
  ProdImg,
  BotVerde,
  TituloCont,
  Cuarta,
  Aliado,
  TarjetaAliado,
  Negro,
  Text,
  Image,
  Enter,
  Ali,
  Spali,
  Agroin,
  Quinta,
  Tarjetas,
  Iconos,
  Icono,
} from "../Styles/Home";
import { GoLocation } from "react-icons/go";
import { BsArrowRightShort } from "react-icons/bs";
import { collectionAgricultor, collectionData } from "../helpers/collection";
import { useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
const Aliados = () => {
  const [productos, setProductos] = useState([]);
  const [agroinsumos, setAgroinsumos] = useState([]);
  const [agricultores, setAgricultores] = useState([]);
  const navigate = useNavigate();
  const prod6 = productos.slice(0, 3);
  const agro6 = agroinsumos.slice(0, 3);
  const agri6 = agricultores.slice(0, 3);

  useEffect(() => {
    collectionData("productos").then((res) => setProductos(res));
    collectionData("agroinsumos").then((res) => setAgroinsumos(res));
    collectionAgricultor().then((res) => setAgricultores(res));
    console.log(agricultores);
  }, []);
  return (
    <>
      <Search>
        <Search1 />
      </Search>
      <Cuarta>
        <TituloCont>
          <ProductosA>Nuestros Agricultores</ProductosA>
          <Image
            src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1658259882/MiCampo/Group_anru90.png"
            alt=""
          />
        </TituloCont>
        <Linea>
          {agricultores.map((element, index) => (
            <TarjetaAliado key={index}>
              <Aliado src={element.data.photoURL} alt="" />
              <Negro>
                {" "}
                <Ali>
                  {" "}
                  {element.data.name}
                  <br />{" "}
                  <Spali>
                    <GoLocation />
                    {element.data.ubication}
                  </Spali>
                </Ali>{" "}
                <Enter>
                  Contactar Agricultor <BsArrowRightShort />
                </Enter>
              </Negro>
            </TarjetaAliado>
          ))}
        </Linea>
      </Cuarta>
      <Tercera style={{ alignItems: "center" }}>
        <TituloCont>
          <ProductosA>También podría interesarte</ProductosA>
        </TituloCont>
        <Carrousel />
      </Tercera>
    </>
  );
};

export default Aliados;
