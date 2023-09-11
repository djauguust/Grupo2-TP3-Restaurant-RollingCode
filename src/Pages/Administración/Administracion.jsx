import React, { useState } from "react";
import "../../styles/administracion.css";
import { Container, Nav } from "react-bootstrap";
import { AdministrarReservas } from "./AdministrarReservas";
import { AdministrarUsuarios } from "./AdministrarUsuarios";
import { BandejaDeEntrada } from "./BandejaDeEntrada";
import { AdministrarRestaurant } from "./AdministrarRestaurant";
import Error404 from "../Error404/Error404";
import { useEffect } from "react";
import { useContext } from "react";
import { UsuariosContext } from "../../context/UserContext";
import { useTranslation } from "react-i18next";

export const Administracion = () => {
  const [showInterface, setShowInterface] = useState(0); // Nos dice que interfaz debe mostrar
  const [isDoorman, setIsDoorman] = useState(false);
  const [tokenValidate, setTokenValidate] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setShowInterface(tabIndex);
    setActiveTab(tabIndex);
  };

  const obtenerToken = localStorage.getItem("user");
  let userToken;
  // Leo el LocalStorage
  if (obtenerToken) {
    userToken = JSON.parse(obtenerToken) || null;
  }

  const { usuario } = useContext(UsuariosContext);

  useEffect(() => {
    if (usuario) {
      if (usuario.esAdmin > 0) {
        setTokenValidate(true);
      }
      if (usuario.esAdmin == 1) setIsDoorman(true);
    } else {
      setTokenValidate(false);
    }
  }, [usuario]);

  const { t } = useTranslation();

  return (
    <>
    <section>
      {tokenValidate ? (
        <>
          <h2 className="about-title mb-3">Administracion</h2>
          <article>
          <Nav fill variant="tabs" defaultActiveKey="/administrador">
            <Nav.Item>
              <Nav.Link
                className={`color-elegido ${activeTab === 0 ? "active" : ""}`}
                onClick={() => handleTabClick(0)}
              >
                Reservas
              </Nav.Link>
            </Nav.Item>
            {!isDoorman && (
              <>
                <Nav.Item>
                  <Nav.Link
                    className={`color-elegido ${
                      activeTab === 1 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(1)}
                  >
                    Usuarios
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className={`color-elegido ${
                      activeTab === 2 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(2)}
                  >
                    Bandeja de Entrada
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className={`color-elegido ${
                      activeTab === 3 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(3)}
                  >
                    Restaurant
                  </Nav.Link>
                </Nav.Item>
              </>
            )}
          </Nav>
          </article>
          <article>  
          <Container fluid>
            {showInterface === 0 && (
              <AdministrarReservas
                isDoorman={isDoorman}
                userToken={userToken}
              />
            )}
            {!isDoorman && (
              <>
                {showInterface === 1 && (
                  <AdministrarUsuarios userToken={userToken} />
                )}
                {showInterface === 2 && (
                  <BandejaDeEntrada userToken={userToken} />
                )}
                {showInterface === 3 && (
                  <AdministrarRestaurant userToken={userToken} />
                )}
              </>
            )}
          </Container>
          </article>
        </>
      ) : (
        <Error404 />
      )}
    </section>
    </>
  );
};
