import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        inicio: "HOME",
        nosotros: "ABOUT US",
        galeria: "GALLERY",
        contacto: "CONTACT",
        reserva: "MAKE A RESERVATION",
        login: "Log in",
        ubicacion: "Location",
        idioma: "Lenguage",
        descripcion:
          "Welcome to our sophisticated Italian corner in the heart of Puerto Madero, Buenos Aires. In our restaurant, you will delight your senses with an authentic Italian gastronomic experience. Discover the diversity of flavors we offer, from exquisite pastas and artisan pizzas to select wines and delicious desserts. Our cozy modern atmosphere invites you to enjoy unforgettable moments with your loved ones. Immerse yourself in the culinary culture of Italy and let yourself be captivated by our unique and distinguished flavor!",
        informacion: "Info",
        dias: "Tuesday to Sunday",
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
      },
    },
    es: {
      translation: {
        inicio: "INICIO",
        nosotros: "QUIENES SOMOS",
        galeria: "GALERIA",
        contacto: "CONTACTO",
        reserva: "HAZ TU RESERVA",
        login: "Iniciar Sesion",
        ubicacion: "Ubicacion",
        idioma: "Idioma",
        descripcion:
          "Bienvenido a nuestro sofisticado rincón italiano en el corazón de Puerto Madero, Buenos Aires. En nuestro restaurante, deleitarás tus sentidos con una auténtica experiencia gastronómica italiana. Descubre la diversidad de sabores que ofrecemos, desde exquisitas pastas y pizzas artesanales hasta selectos vinos y deliciosos postres. Nuestro acogedor ambiente moderno te invita a disfrutar de momentos inolvidables con tus seres queridos. ¡Sumérgete en la cultura culinaria de Italia y déjate cautivar por nuestro sabor único y distinguido",
        informacion: "Informacion",
        dias: "Martes a Domingo",
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
      },
    },
  },
  lng: "en",
  fallbackLng: "es",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;