import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import DatePicker from "react-datepicker";
import { format, getDay, parseISO, setHours, setMinutes } from "date-fns";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reserva.css";
import Image from "react-bootstrap/Image";
import axios from "axios";
import Card from "react-bootstrap/Card";

const ReservasTest = () => {
  
  let date = new Date();

 //useEffect
//  const  [availableData, setAvailabelData] = useState("")
//  useEffect(()=>{

//    if(formik.values.ReservationDate){
//      axios.get(`http://localhost:3000/reservas?date=${startDate}`)
//      .then(response=>{
//        // setAvailabelData(response.data)
//        console.log("Datos del servidor ",response.data)
//      })
//      .catch(error=>{
//        console.log('Error al obtener disponibilidad: ', error)
//      })
 
//    }

//  }, [formik.values.ReservationDate])
 
 
  //Yup
  const eschema = Yup.object().shape({
    ReservationDate: Yup.date().required("Fecha es requerida"),

    ReservationTime: Yup.string().required("La hora es requerida"),

    People: Yup.string().required("La cantidad de personas es requerida"),
  });

  //Initial Values
  const initialValues = {
    ReservationDate: null,
    ReservationTime: "",
    People: "",
  };

  //Formik
  const formik = useFormik({
    initialValues,
    eschema,
    validateOnChange: true,
    validateOnBlur: true,

    


    onSubmit: async (values) => {
      try{
      // Para formatear la fecha a un valor dia/mes/año
      const fechaFormateada = format(values.ReservationDate, "dd/MM/yyyy", {
        locale: es,
      });

      //Para formatear la hora a un valor Hora/Minutos
      const horaFormateada = format(values.ReservationTime, "HH:mm", {
        locale: es,
      });

      // Guardar los datos editados
      const Reserva = {
        Fecha: fechaFormateada,
        Hora: horaFormateada,
        CantidadDePersonas: formik.values.People
      };

      const response = await axios.post("http://localhost:3000/reservas", {
        date: Reserva.Fecha,
        time: Reserva.Hora,
        people: Reserva.CantidadDePersonas

      });
      console.log(response.data);


    } catch(error){
      console,log(error)
    }
    },
  });

  //Funcion para que los domingos esten deshabilitados
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0;
  };

  //Funcion para que el usuario no pueda elegir fechas de dias anteriores o del mismo dia
  const filterMinDay = () => {
    const nextDay = new Date();
    nextDay.setDate(date.getDate() + 1);
    return nextDay;
  };

  //Fucnion para que el usuario no pueda elegir fechas mas de 1 mes
  const filterMaxDay = () => {
    const limitDate = new Date();
    limitDate.setMonth(date.getMonth() + 1);
    return limitDate;
  };

  //Funcion para deshabilitar horas 
  const filterTime = (time) => {
    const hours = new Date(time).getHours();
    return hours >= 7 && hours <= 22 
  };

  return (
    <>
      <main className="reservation-main">
        <Container fluid className="reservation-container">
          <Row className="d-flex justify-content-between align-items-center pb-3">
            <Col xs={6} md={4}>
              <Image src="" rounded width={60} height={60} />
            </Col>
          </Row>

          <Form onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Row>

              <Col xs={12} md={3} className="p-0">
                <Form.Group controlId="date">
                  <DatePicker
                    className="inputReservation"
                    selected={formik.values.ReservationDate}
                    onChange={(date) => formik.setFieldValue("ReservationDate", date)}
                    minDate={filterMinDay()}
                    maxDate={filterMaxDay()}
                    dateFormat="dd/MM/yyyy"
                    filterDate={isWeekday}
                    placeholderText="Seleccione una fecha"
                    
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={3} className="p-0">
                <Form.Group controlId="time">
                  <DatePicker
                    className="inputReservation"
                    selected={formik.values.ReservationTime}
                    onChange={(time) => formik.setFieldValue("ReservationTime", time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={60}
                    timeCaption="Time"
                    dateFormat="HH:mm"
                    filterTime={filterTime}
                    required
                    placeholderText="00:00"
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={3} className="p-0">
                <Form.Group controlId="people">
                  <Form.Control
                    className="inputReservation"
                    placeholder="N° de Personas"
                    onChange={(e) => formik.setFieldValue("People", e.target.value)}
                    type="number"
                    required
                    min={1}
                    max={10}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={3} className="p-0">
                <Button
                  variant="primary"
                  type="submit"
                  className="inputReservation"
                >
                  Encontrar mesa
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </main>
    </>
  );
};

export default ReservasTest;
