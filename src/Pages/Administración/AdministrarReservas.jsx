import React, { useEffect, useState, useContext } from "react";
import {
  Alert,
  Badge,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { FormSearch } from "./components/FormSearch";
import { useForm } from "./hooks/useForm";
import Swal from "sweetalert2";
import axios from "axios";
import { NavbarContext } from "../../context/NavbarContext";
import { useTranslation } from "react-i18next";

export const AdministrarReservas = ({ isDoorman = false, userToken }) => {
  const { theme } = useContext(NavbarContext);
  const useToken = { headers: { "auth-token": userToken } };
  const { t } = useTranslation();

  const newTheme =
    theme === "claro" ? "light" : theme === "oscuro" ? "dark" : theme;

  const today = new Date();
  const mesComoString = () => {
    let aux = today.getMonth() + 1;
    if (aux < 10) {
      return `0${aux}`;
    } else {
      return `${aux}`;
    }
  };
  const diaComoString = () => {
    let aux = today.getDate();
    if (aux < 10) {
      return `0${aux}`;
    } else {
      return `${aux}`;
    }
  };
  const today2 = `${today.getFullYear()}-${mesComoString()}-${diaComoString()}`;
  const [reservasToday, setReservasToday] = useState(null);
  const initialForm = {
    date: today2,
    hora: "",
    fecha: "",
    comensales: "",
    fueUsada: false,
    _id: "",
  };
  const { formState, setFormState, onInputChange } = useForm(initialForm);

  /* UseEffect que busque reservas cada vez que cambia formState.date */
  const [reservaToShow, setReservaToShow] = useState([]);

  /* Backend */
  const url = import.meta.env.VITE_API;

  const [actualizador, setActualizador] = useState(false);
  const actualizar = () => {
    setActualizador(!actualizador);
  };

  useEffect(() => {
    axios
      .get(`${url}/reservas/${formState.date}`, useToken)
      .then(({ data }) => {
        setReservaToShow(data);
      })
      .catch((error) => console.log(error));
  }, [formState.date, actualizador]);

  useEffect(() => {
    axios
      .get(`${url}/reservas/${today2}`, useToken)
      .then(({ data }) => {
        setReservasToday(data);
      })
      .catch((error) => console.log(error));
  }, [actualizador]);

  /* FIN Backend */

  const handleDelete = (reserva) => {
    Swal.fire({
      title: "¿Realmente deseas eliminar la reserva?",
      text: "Este cambio es irreversible y no se le notificará al cliente de tu decisión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${url}/reservas/${reserva._id}`, useToken)
          .then(({ data }) => {
            Swal.fire(
              "Eliminación exitosa",
              "Reserva liberada para nuevos usuarios",
              "success"
            ).then(async (result) => {
              actualizar();
            });
          })
          .catch((error) => {
            console.log(error);
            actualizar();
          });
      }
    });
  };

  const handleConfirm = (reserva) => {
    Swal.fire({
      title: "¿Confirmar Reserva?",
      text: "Verificar que la cantidad de personas son al menos la mitad de lo indicada en la reserva",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `${url}/reservas/usada/${reserva._id}`,
            { fueUsada: true },
            useToken
          )
          .then(({ data }) => {
            Swal.fire("Reserva marcada como usada", "", "success").then(
              async (result) => {
                actualizar();
              }
            );
          })
          .catch(({ response }) => {
            Swal.fire(
              "Error con servidor",
              `Error: ${response.data.message}`,
              "warning"
            ).then(async (result) => {
              actualizar();
            });
          });
      }
    });
  };

  /* Badge de "fue usada" */
  const fueUsada = (usada) => {
    if (usada) {
      return (
        <>
          <Badge bg="success">{t("si").toUpperCase()}</Badge>
        </>
      );
    } else {
      return (
        <>
          <Badge bg="secondary">{t("no").toUpperCase()}</Badge>
        </>
      );
    }
  };
  /* FIN Badge de "fue usada" */

  /* Alert de que no hay reservas en ese día */
  const sinReserva = (message = "Sin reservas para el día") => {
    return (
      <>
        <Alert key="warning" variant="warning" className="my-2">
          <b>{message}</b>
        </Alert>
      </>
    );
  };
  /* FIN Alert de que no hay reservas en ese día */

  /* EDITAR RESERVA */
  const [ShowModalEdit, setShowModalEdit] = useState(false);
  const [errores, setErrores] = useState([]);
  const [ButtonGuardarReserva, setButtonGuardarReserva] = useState(false);
  const handleCloseModal = () => {
    setShowModalEdit(false);
  };
  const handleEdit = (reserva) => {
    setShowModalEdit(true);
    let aux = {
      _id: reserva._id,
      date: formState.date,
      hora: reserva.hora,
      fecha: reserva.fecha,
      comensales: reserva.comensales,
      fueUsada: reserva.fueUsada,
    };
    setFormState(aux);
  };

  const handleSubmit = () => {
    setButtonGuardarReserva(true);
    if (validarForm()) {
      axios
        .put(`${url}/reservas/${formState._id}`, formState, useToken)
        .then(({ data }) => {
          setShowModalEdit(false);
          Swal.fire(
            "Reserva modificada con éxito",
            "La reserva fue modificada pero el usuario no fue notificado de esto.",
            "success"
          ).then(async (result) => {
            actualizar();
          });
        })
        .catch(({ response }) => {
          setShowModalEdit(false);
          Swal.fire(
            "Error con servidor",
            `Error: ${response.data.message}`,
            "warning"
          ).then(async (result) => {
            setFormState({ date: formState.fecha });
            setButtonGuardarReserva(false);
            actualizar();
          });
        });
    } else {
      setButtonGuardarReserva(false);
    }
  };

  const validarForm = () => {
    setErrores([]);
    let array = [];
    if (formState.fecha == "" || formState.fecha == null) {
      array = [...array, "Debe ingresar una fecha"];
    }
    if (formState.hora == "" || formState.hora == null) {
      array = [...array, "Debe ingresar una hora"];
    }
    if (
      formState.comensales == "" ||
      formState.comensales == null ||
      formState.comensales < 1
    ) {
      array = [
        ...array,
        "La cantidad de comensales debe ser un número positivo",
      ];
    }
    setErrores(array);
    return array.length == 0;
  };
  /* FIN EDITAR RESERVA */

  return (
    <>
      <h2 className="text-center mt-5">{t("adminReservas")}</h2>
      <Container className="mb-5">
        <h2>{t("reservasDia")}</h2>
        {reservasToday?.length == 0 ? (
          sinReserva("Sin reservas para el día de hoy")
        ) : (
          <>
            <Table
              striped
              responsive
              className="mb-5"
              data-bs-theme={`${newTheme}`}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t("hora")}</th>
                  <th>{t("apellidoynombre")}</th>
                  <th>{t("cantidad")}</th>
                  <th>{t("fueUsada")}</th>
                  <th>{t("acciones")}</th>
                </tr>
              </thead>
              <tbody>
                {reservasToday?.map((r, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{r.hora}</td>
                    <td>
                      {r.usuario.apellido
                        ? `${r.usuario.apellido}, ${r.usuario.nombre}`
                        : `${r.usuario.nombre}`}
                    </td>
                    <td>{r.comensales}</td>
                    <td>{fueUsada(r.fueUsada)}</td>
                    <td>
                      {!r.fueUsada && (
                        <Button
                          variant="success"
                          onClick={() => handleConfirm(r)}
                          className="mx-2"
                        >
                          <i className="bi bi-check2"></i>
                        </Button>
                      )}
                      {!isDoorman && (
                        <>
                          <Button
                            variant="danger"
                            onClick={() => handleEdit(r)}
                          >
                            <i className="bi bi-pencil"></i>
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(r)}
                            className="mx-2"
                          >
                            <i className="bi bi-trash"></i>
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
        {!isDoorman && (
          <>
            <Row className="my-3">
              <Col sm={9}>
                <h2>{t("buscarReservas")}: {formState.date}</h2>
              </Col>
              <Col>
                <FormSearch
                  formState={formState}
                  funcionOnInputChange={onInputChange}
                />
              </Col>
            </Row>
            {reservaToShow.length == 0 ? (
              sinReserva(`Sin reserva para el día ${formState.date}`)
            ) : (
              <>
                <Table striped responsive data-bs-theme={`${newTheme}`}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>{t("hora")}</th>
                      <th>{t("apellidoynombre")}</th>
                      <th>{t("cantidad")}</th>
                      <th>{t("fueUsada")}</th>
                      <th>{t("acciones")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservaToShow?.map((r, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{r.hora}</td>
                        <td>
                          {r.usuario.apellido
                            ? `${r.usuario.apellido}, ${r.usuario.nombre}`
                            : `${r.usuario.nombre}`}
                        </td>
                        <td>{r.comensales}</td>
                        <td>{fueUsada(r.fueUsada)}</td>
                        <td>
                          {!r.fueUsada && (
                            <Button
                              variant="success"
                              onClick={() => handleConfirm(r)}
                              className="mx-2"
                            >
                              <i className="bi bi-check2"></i>
                            </Button>
                          )}
                          {!isDoorman && (
                            <>
                              <Button
                                variant="danger"
                                onClick={() => handleEdit(r)}
                              >
                                <i className="bi bi-pencil"></i>
                              </Button>
                              <Button
                                variant="danger"
                                onClick={() => handleDelete(r)}
                                className="mx-2"
                              >
                                <i className="bi bi-trash"></i>
                              </Button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
          </>
        )}
      </Container>
      {/* Modales para confirmar/eliminar/editar reservas */}
      <Modal
        show={ShowModalEdit}
        onHide={handleCloseModal}
        backdropClassName="custom-backdrop"
        className="modal-custom letra-custom"
        data-bs-theme={`${newTheme}`}
      >
        <Modal.Header closeButton className={`custom-${theme}`}>
          <Modal.Title>{t("modificarReserva")}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`custom-${theme}`}>
          <Form onSubmit={handleSubmit} data-bs-theme={`${newTheme}`}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formOrganizacion">
                  <Form.Label>{t("fecha")}:</Form.Label>
                  <Form.Control
                    type="date"
                    value={formState.fecha}
                    name="fecha"
                    onChange={onInputChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formOrganizacion">
                  <Form.Label>{t("hora")}:</Form.Label>
                  <Form.Control
                    type="time"
                    value={formState.hora}
                    name="hora"
                    onChange={onInputChange}
                    step="1800"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formOrganizacion">
              <Form.Label>{t("cantidadComensales")}:</Form.Label>
              <Form.Control
                type="number"
                value={formState.comensales}
                name="comensales"
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formOrganizacion">
              <Row>
                <Col>
                  <Form.Label>¿{t("fueUsada")}?</Form.Label>
                </Col>
                <Col>
                  <Form.Select
                    aria-label="Default select example"
                    name="fueUsada"
                    value={formState.fueUsada}
                    onChange={onInputChange}
                  >
                    <option value="true">{t("si")}</option>
                    <option value="false">{t("no")}</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
          </Form>
          {errores.length != 0 && (
            <Alert variant="warning">
              {errores.map((f) => (
                <p key={f.index}>{f}</p>
              ))}
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer className={`custom-${theme}`}>
          <Button variant="secondary" onClick={handleCloseModal}>
            {t("cerrar")}
          </Button>
          <Button variant="sucess" onClick={handleSubmit}>
            {t("Guardar")}
          </Button>
        </Modal.Footer>
      </Modal>
      {/* FIN Modales para confirmar/eliminar/editar reservas */}
    </>
  );
};
