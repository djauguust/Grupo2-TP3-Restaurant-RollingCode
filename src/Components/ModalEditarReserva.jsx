import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import axios from 'axios';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

function ModalEditar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fecha, setFecha] = useState(props.reserva.Fecha);
  const [cantPersonas, setCantPersonas] = useState(props.reserva.CantidadDePersonas);
  const [hora, setHora] = useState(props.reserva.Hora);

  const reservaActualizada = {
    id: props.reserva.id,
    Fecha: fecha,
    CantidadDePersonas: cantPersonas,
    Hora: hora,
  };

  const actualizar = async () => {
    try {
      const response = await axios.put(
        `${props.url}/${props.reserva.id}`,
        reservaActualizada
      );
      alert('Guardado exitoso');
      handleClose();
    } catch (error) {
      console.error('Error al actualizar la reservación:', error);
      alert('Error');
    }
  };

  const SingUpSchema = Yup.object().shape({
    fecha: Yup.string().required('Debe introducir la fecha').trim(),
    cantPersonas: Yup.string()
      .required('Debe introducir una cantidad')
      .min(1, 'Debe introducir al menos una persona')
      .trim(),
    hora: Yup.string().required('Debe introducir un horario').trim(),
  });

  const initialValues = {
    fecha: fecha,
    cantPersonas: cantPersonas,
    hora: hora,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: SingUpSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      actualizar();
    },
  });

  const handleFechaChange = (event) => {
    setFecha(event.target.value);
    formik.handleChange(event);
  };

  const handleCantPersonasChange = (event) => {
    setCantPersonas(event.target.value);
    formik.handleChange(event);
  };

  const handleHoraChange = (event) => {
    setHora(event.target.value);
    formik.handleChange(event);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar datos de la reserva</Modal.Title>
        </Modal.Header>

        <Form onSubmit={formik.handleSubmit} noValidate>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="text"
                name="fecha"
                id="fecha"
                value={fecha}
                onChange={handleFechaChange}
                className={clsx(
                  'form-control',
                  {
                    'is-invalid': formik.touched.fecha && formik.errors.fecha,
                  },
                  {
                    'is-valid': formik.touched.fecha && !formik.errors.fecha,
                  }
                )}
              />
              {formik.touched.fecha && formik.errors.fecha && (
                <div className="text-danger mt-1">
                  <span role="alert">{formik.errors.fecha}</span>
                </div>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Cantidad de Personas</Form.Label>
              <Form.Control
                type="number"
                name="cantidadDePersonas"
                id="cantidadDePersonas"
                value={cantPersonas}
                onChange={handleCantPersonasChange}
                className={clsx(
                  'form-control',
                  {
                    'is-invalid': formik.touched.cantPersonas && formik.errors.cantPersonas,
                  },
                  {
                    'is-valid': formik.touched.cantPersonas && !formik.errors.cantPersonas,
                  }
                )}
              />
              {formik.touched.cantPersonas && formik.errors.cantPersonas && (
                <div className="text-danger mt-1">
                  <span role="alert">{formik.errors.cantPersonas}</span>
                </div>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="text"
                name="hora"
                id="hora"
                value={hora}
                onChange={handleHoraChange}
                className={clsx(
                  'form-control',
                  {
                    'is-invalid': formik.touched.hora && formik.errors.hora,
                  },
                  {
                    'is-valid': formik.touched.hora && !formik.errors.hora,
                  }
                )}
              />
              {formik.touched.hora && formik.errors.hora && (
                <div className="text-danger mt-1">
                  <span role="alert">{formik.errors.hora}</span>
                </div>
              )}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ModalEditar;
