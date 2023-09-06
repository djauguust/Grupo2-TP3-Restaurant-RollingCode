import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        inicio: "HOME",
        nosotros: "ABOUT US",
        galeria: "GALLERY",
        contacto: "CONTACT US",
        reserva: "MAKE A RESERVATION",
        login: "Log in",
        ubicacion: "Location",
        idioma: "Lenguage",
        descripcion:
          "Welcome to our sophisticated Italian corner in the heart of Puerto Madero, Buenos Aires. In our restaurant, you will delight your senses with an authentic Italian gastronomic experience. Discover the diversity of flavors we offer, from exquisite pastas and artisan pizzas to select wines and delicious desserts. Our cozy modern atmosphere invites you to enjoy unforgettable moments with your loved ones. Immerse yourself in the culinary culture of Italy and let yourself be captivated by our unique and distinguished flavor!",
        informacion: "Info",
        dias: "Everyday",
        direccion: "Address",
        pastas: "Pasta",
        pizzas: "Pizza",
        bebidas: "Drinks",
        postres: "Desserts",
        descripcionSpageti: "Exquisite Spaghetti with bolognese sauce, beef and aromatic herbs",
        descripcionRavioles: "Ravioli with creamy carbonara sauce and crispy bacon.",
        descripcionCanelones: "Chicken and vegetable cannelloni, gratin with cheese and bathed in a smooth sauce.",
        descripcionLasagna: "Meat lasagna with layers of pasta, tasty ragù and melted cheese au gratin.",
        pizza1: "With ripe tomato, fresh mozzarella, fragrant basil and a touch of olive oil.",
        pizza2: "With tomato sauce, garlic, oregano and olives, evoking the essence of the Mediterranean.",
        pizza3: "With four different cheeses: mozzarella, gorgonzola, parmesan and provolone.",
        pizza4: "Neapolitan style, with tomato, buffalo mozzarella, basil and olive oil.",
        vino: "WINE",
        gaseosas: "SODA",
        opcionesRavioles: "RICOTTA | VEGETABLES | CHEESE",
        opcionesHelado: "Vanilla | Chocolate | Strawberry",
        reseñas: "REVIEWS",
        reseña1: "Exceptional Italian dining experience: authentic flavors, impeccable service and welcoming atmosphere. Delight for the senses!",
        reseña2: "A true Italian gem: delicious dishes, charming atmosphere and exceptional service. A must see!",
        reseña3: "The taste of Italy at its best: exquisite dishes, a cozy atmosphere and impeccable service. Incredible.",
        bienvenido: "Welcome",
        micuenta: "My Account",
        misreservas: "My Reservations",
        configurarcuenta: "Set Up Account",
        cerrarsesion: "Sign out",
        nombreusuario: "Username: ",
        perfil: "My profile",
        ingles: "English",
        español: "Spanish",
        descripcionContacto: "Your satisfaction is our priority! If you have any questions, concerns or need assistance making a reservation, please do not hesitate to contact us.",
        completa: "Complete the form and we will contact you shortly",
        nombreCompleto: "Full Name",
        email:"Email",
        enviar: "Send",
        mensaje: "Message",
        motivo: "Reason to contact",
        introduce: "Introduce your name",
        aboutDescripcion: "We are a team of developers committed to creating an innovative project for RollingCode. Our group is made up of creative and dedicated minds. We take advantage of this great opportunity that technology offers us to design solutions that address the unique needs of the institute and contribute our value. We work collaboratively, combining our skills in software development, user experience design, and project management. Our vision is to bring our humble experience to deliver a restaurant management system, committed to making that vision a reality in every line of code we write and every feature we design.",
        tipoUsuario: "User type:",
        administrador: "Administrator",
        cliente: "Customer",
        portero: "Host",
        miPerfil: "My Profile",
        nombre : "Name",
        apellido: "Lastname",
        editarPerfil: "Edit Profile",
        ingreseContraseña: "Enter your current password :",
        ingreseContraseñaNueva: "Enter your new password :",
        ingreseContraseñaNuevamente: "Enter your new password again :",
        guardarCambios: "SAVE CHANGES",
        cambiaDatos : "Change your account details :",
        cambiaContraseña : "Change Password",
        numeroPersonas: "No. of people",
        eligeFecha: "Choose a date",
        eligeHora: "Choose a time",
        reservar: "RESERVE"

      },
    },
    es: {
      translation: {
        inicio: "INICIO",
        nosotros: "NOSOTROS",
        galeria: "GALERIA",
        contacto: "CONTACTO",
        reserva: "HAZ TU RESERVA",
        login: "Iniciar Sesion",
        ubicacion: "Ubicacion",
        idioma: "Idioma",
        descripcion:
          "Bienvenido a nuestro sofisticado rincón italiano en el corazón de Puerto Madero, Buenos Aires. En nuestro restaurante, deleitarás tus sentidos con una auténtica experiencia gastronómica italiana. Descubre la diversidad de sabores que ofrecemos, desde exquisitas pastas y pizzas artesanales hasta selectos vinos y deliciosos postres. Nuestro acogedor ambiente moderno te invita a disfrutar de momentos inolvidables con tus seres queridos. ¡Sumérgete en la cultura culinaria de Italia y déjate cautivar por nuestro sabor único y distinguido",
        informacion: "Informacion",
        dias: "Todos los dias",
        direccion: "Direccion",
        pastas: "Pastas",
        pizzas: "Pizzas",
        bebidas: "Bebidas",
        postres: "Postres",
        descripcionSpageti: "Exquisito Spaghetti con salsa bolognesa, carne de res y hierbas aromáticas",
        descripcionRavioles: "Ravioles con cremosa salsa carbonara y panceta crujiente.",
        descripcionCanelones: "Canelones de pollo y verdura, gratinados con queso y bañados en una suave salsa.",
        descripcionLasagna: "Lasaña de carne con capas de pasta, sabroso ragú y gratinado queso derretido.",
        pizza1: "Con tomate maduro, mozzarella fresca, albahaca fragante y un toque de aceite de oliva.",
        pizza2: "Con salsa de tomate, ajo, orégano y aceitunas, evocando la esencia mediterránea.",
        pizza3: "Con cuatro quesos diferentes: mozzarella, gorgonzola, parmesano y provolone.",
        pizza4: "De estilo napolitano, con tomate, mozzarella de búfala, albahaca y aceite de oliva.",
        vino: "VINOS",
        gaseosas: "GASEOSAS",
        opcionesRavioles: "RICOTA | VERDURA | QUESO",
        opcionesHelado: "Vainilla | Chocolate | Frutilla",
        reseñas: "RESEÑAS",
        reseña1: "Experiencia gastronómica italiana excepcional: auténticos sabores, servicio impecable y ambiente acogedor. ¡Delicia para los sentidos!",
        reseña2: "Una auténtica joya italiana: deliciosos platos, encantador ambiente y servicio excepcional. ¡Una visita obligada!",
        reseña3: "El sabor de Italia en su máximo esplendor: platos exquisitos, ambiente acogedor y atención impecable. Increíble.",
        bienvenido: "Bienvenido",
        micuenta: "Mi Cuenta",
        misreservas: "Mis Reservas",
        configurarcuenta: "Configurar Cuenta",
        cerrarsesion: "Cerrar Sesion",
        nombreusuario: "Nombre de Usuario: ",
        perfil: "Ver perfil",
        ingles: "Ingles",
        español: "Español",
        descripcionContacto: "¡Tu satisfacción es nuestra prioridad! Si tienes alguna pregunta, inquietud o necesitas asistencia para hacer una reserva, no dudes en contactarnos.",
        completa: "Completa el formulario y lo contactaremos a la brevedad",
        nombreCompleto: "Nombre completo",
        email:"Email",
        enviar: "Enviar",
        mensaje: "Mensaje",
        motivo: "Motivo de contacto",
        introduce: "Introduce tu nombre",
        aboutDescripcion: "Somos un equipo de desarrolladores comprometidos en la creación de un proyecto innovador para RollingCode. Nuestro grupo está formado por mentes creativas y dedicadas. Aprovechamos esta gran oportunidad que nos brinda la tecnologia para diseñar soluciones que aborden las necesidades únicas del instituto y aportar nuestro valor. Trabajamos en colaboración, combinando nuestras habilidades en desarrollo de software, diseño de experiencia de usuario y gestión de proyectos. Nuestra visión es brindar nuestra humilde experiencia para cumplir con un sistema de gestion para un restaurante, comprometidos a hacer realidad esa visión en cada línea de código que escribimos y en cada función que diseñamos.",
        tipoUsuario: "Tipo de usuario:",
        administador: "Administrador",
        cliente: "Cliente",
        portero: "Portero",
        miPerfil: "Mi Perfil",
        nombre : "Nombre",
        apellido: "Apellido",
        editarPerfil: "Editar Perfil",
        ingreseContraseña: "Ingrese su contraseña actual :",
        ingreseContraseñaNueva: "Ingrese su nueva contraseña :",
        ingreseContraseñaNuevamente: "Ingrese nuevamente su nueva contraseña :",
        guardarCambios: "GUARDAR CAMBIOS",
        cambiaDatos : "Cambia los datos de tu cuenta :",
        eligeFecha: "Elige una fecha",
        eligeHora: "Elige un horario",
        numeroPersonas: "N° de Personas",
        reservar: "RESERVAR",
        cambiaContraseña: "Cambiar Contraseña",
      },
    },
  },
  lng: "es",
  fallbackLng: "es",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;