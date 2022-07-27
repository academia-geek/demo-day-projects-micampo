import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Agro, Divi, H4, Imagro, Tarjeta, Texto } from "../Styles/Home";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { collectionAgricultor, collectionData } from "../helpers/collection";

const Carrousel = () => {
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
  }, []);
  return (
    <Carousel fade className="carousel">
      <Carousel.Item>
        <Agro>Productos</Agro>
        <Divi>
          {prod6.map((element, index) => (
            <Tarjeta key={index}>
              <Imagro src={element.img} alt="" />{" "}
              <Texto>
                <H4>
                  {element.nombre}
                  <br />
                  <TbTruckDelivery />
                  Envío Nacional
                </H4>
              </Texto>
            </Tarjeta>
          ))}
        </Divi>
      </Carousel.Item>
      <Carousel.Item>
        <Agro>Agroinsumos</Agro>
        <Divi>
          {agro6.map((element, index) => (
            <Tarjeta key={index}>
              <Imagro src={element.img} alt="" />{" "}
              <Texto>
                <H4>
                  {element.nombre}
                  <br />
                  <TbTruckDelivery />
                  Envío Nacional
                </H4>
              </Texto>
            </Tarjeta>
          ))}
        </Divi>
      </Carousel.Item>
      <Carousel.Item>
        <Agro>Agricultores</Agro>
        <Divi>
          {agri6.map((element, index) => (
            <Tarjeta key={index}>
              <Imagro src={element.data.photoURL} alt="" />{" "}
              <Texto>
                <H4>{element.data.name}</H4>
              </Texto>
            </Tarjeta>
          ))}
        </Divi>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
