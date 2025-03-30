import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
import "swiper/css";

const cardsData = [
  {
    img: "tequila.webp",
    title: "Visita Tequila",
    desc: "Descubre Tequila, México, con un recorrido por sus icónicas destilerías, donde podrás conocer el proceso artesanal de producción del tequila y degustar sus mejores variedades. Explora el pintoresco pueblo mágico, su historia, gastronomía y paisajes agaveros, declarados Patrimonio de la Humanidad por la UNESCO.",
    itinerary: [
      {
        title: "Tour de Fábricas",
        status: "Faltante",
        desc: "Visita destilerías artesanales y conoce a los productores locales mientras pruebas tequilas exclusivos no disponibles en tiendas comerciales.",
      },
      {
        title: "Recorrido por el Pueblo Mágico",
        status: "Faltante",
        desc: "Descubre las encantadoras calles de Tequila, disfruta de su arquitectura colonial y visita sus plazas y mercados, ideales para compras artesanales.",
      },
      {
        title: "Degustación de Tequila",
        status: "Faltante",
        desc: "Participa en una cata de tequilas premium y aprende sobre sus diferentes tipos y procesos de destilación en una de las mejores casas tequileras.",
      },
    ],
  },
  {
    img: "mazamitla.webp",
    title: "Visita Mazamitla",
    desc: "Mazamitla, conocido como el 'Pueblo Mágico' de la sierra, te ofrece un paisaje impresionante de bosques y montañas. Disfruta de actividades al aire libre como caminatas, paseos a caballo, y explora su pintoresco centro histórico lleno de encanto.",
    itinerary: [
      {
        title: "Caminata en el Bosque",
        status: "Faltante",
        desc: "Haz una caminata guiada por los hermosos bosques de Mazamitla, rodeado de naturaleza y tranquilidad, ideal para los amantes de la naturaleza.",
      },
      {
        title: "Paseo a Caballo",
        status: "Faltante",
        desc: "Disfruta de un paseo a caballo por los paisajes de montaña, una forma única de explorar el pueblo y sus alrededores mientras aprecias la belleza natural.",
      },
      {
        title: "Visita a Cascada El Salto",
        status: "Faltante",
        desc: "Explora la majestuosa cascada El Salto, uno de los atractivos más populares de Mazamitla, y disfruta de un paisaje impresionante mientras te conectas con la naturaleza.",
      },
    ],
  },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="section">
      <Swiper className="swiper">
        {cardsData.map((card, index) => (
          <SwiperSlide className="slide" key={index}>
            <div className="card">
              <div>
                <img className="cardImg" src={card.img} alt={card.title} />
                <div className="cardContent">
                  <div className="cardTitle">{card.title}</div>
                  <div className="cardDesc">{card.desc}</div>
                </div>
              </div>

              <div className="cardBottom">
                <div
                  className={!open ? "cardBtn" : "cardBtnColapsado"}
                  onClick={() => setOpen(!open)}
                >
                  Ver más
                </div>
                {open && (
                  <div className="itinerario">
                    <div className="itinerarioTitulo">Itinerario</div>
                    {card.itinerary.map((activity, index) => (
                      <div className="actividad" key={index}>
                        <div className="actividadTop">
                          <div className="actividadTitulo">
                            {activity.title}
                          </div>
                          <div className="actividadEstatus">
                            {activity.status}
                          </div>
                        </div>
                        <div>{activity.desc}</div>
                        <div>{activity.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
                <div
                  className={open ? "cardBtn" : "cardBtnColapsado"}
                  onClick={() => setOpen(!open)}
                >
                  Cerrar
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
