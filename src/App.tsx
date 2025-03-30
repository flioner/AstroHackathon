import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
import "swiper/css";

const cardsData = [
  {
    img: "tequila.webp",
    title: "Tequila",
    desc: "Descubre Tequila, México, con un recorrido por sus icónicas destilerías, donde podrás conocer el proceso artesanal de producción del tequila y degustar sus mejores variedades. Explora el pintoresco pueblo mágico, su historia, gastronomía y paisajes agaveros, declarados Patrimonio de la Humanidad por la UNESCO.",
    backgroundColor:
      "linear-gradient(-30deg, rgb(159, 182, 255) 0%, rgb(105, 73, 126) 100%)", // Estilo de fondo dinámico
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
    title: "Mazamitla",
    desc: "Mazamitla, conocido como el 'Pueblo Mágico' de la sierra, te ofrece un paisaje impresionante de bosques y montañas. Disfruta de actividades al aire libre como caminatas, paseos a caballo, y explora su pintoresco centro histórico lleno de encanto.",
    backgroundColor:
      "linear-gradient(-30deg, rgb(105, 205, 145) 0%, rgb(27, 74, 69) 100%)", // Otro fondo dinámico
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
  {
    img: "tapalpa.webp",
    title: "Tapalpa",
    desc: "Tapalpa es un encantador Pueblo Mágico rodeado de montañas, ideal para quienes buscan tranquilidad y naturaleza. Aquí podrás disfrutar de sus hermosos paisajes, realizar actividades al aire libre y explorar su arquitectura tradicional.",
    backgroundColor:
      "linear-gradient(-30deg, rgb(183, 212, 171) 0%, rgb(59, 99, 104) 100%)", // Fondo dinámico para Tapalpa
    itinerary: [
      {
        title: "Recorrido por el Pueblo",
        status: "Faltante",
        desc: "Pasea por las calles empedradas de Tapalpa y admira su arquitectura colonial, visitando plazas, iglesias y mercados llenos de productos artesanales.",
      },
      {
        title: "Senderismo en el Bosque",
        status: "Faltante",
        desc: "Haz una caminata por los hermosos paisajes del bosque de Tapalpa, disfrutando de su flora y fauna mientras respiras aire puro.",
      },
      {
        title: "Visita al Cerro de la Cruz",
        status: "Faltante",
        desc: "Sube al Cerro de la Cruz para obtener una vista panorámica de Tapalpa y sus alrededores, un lugar perfecto para disfrutar de la naturaleza.",
      },
    ],
  },
  {
    img: "sansebastian.webp",
    title: "San Sebastián del Oeste",
    desc: "San Sebastián del Oeste es un Pueblo Mágico enclavado en la sierra, conocido por su rica historia minera y su entorno natural. Disfruta de su arquitectura colonial y paisajes montañosos, ideales para el ecoturismo.",
    backgroundColor:
      "linear-gradient(-30deg, rgb(204, 163, 118) 0%, rgb(69, 56, 54) 100%)", // Fondo dinámico para San Sebastián
    itinerary: [
      {
        title: "Recorrido Histórico",
        status: "Faltante",
        desc: "Explora el centro histórico de San Sebastián y conoce su historia minera, visitando museos y la iglesia principal del pueblo.",
      },
      {
        title: "Senderismo y Naturaleza",
        status: "Faltante",
        desc: "Realiza un recorrido por los senderos del bosque circundante, perfecto para quienes buscan una aventura en la naturaleza.",
      },
      {
        title: "Visita a las Minas",
        status: "Faltante",
        desc: "Conoce las antiguas minas de San Sebastián, una de las principales atracciones turísticas del pueblo que rememoran su pasado minero.",
      },
    ],
  },
];

const teamMembers = [
  {
    name: "Tania Topete",
    pfp: "tania",
    career: "Desconocida",
    contact: "tania.topete4973@alumnos.udg.mx",
  },
  {
    name: "Omar López",
    pfp: "omar",
    career: "Desconocida",
    contact: "jesus.lopez8692@alumnos.udg.mx",
  },
  {
    name: "Fabián Lioner",
    pfp: "fabian",
    career: "Desconocida",
    contact: "lionerrochae@gmail.com",
  },
  {
    name: "Kevin Ramírez",
    pfp: "kevin",
    career: "Desconocida",
    contact: "kevin.ramirez6122@alumnos.udg.mx",
  },
  {
    name: "Nayeli Hernández",
    pfp: "nayeli",
    career: "Desconocida",
    contact: "nayeli.hhernandez@alumnos.udg.mx",
  },
  {
    name: "María Rubio",
    pfp: "marilu",
    career: "Desconocida",
    contact: "a01568749@tec.mx",
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const initialSlide = 1;
  const [activeIndex, setActiveIndex] = useState(initialSlide);
  const [itineraryHeight, setItineraryHeight] = useState(0);
  const itineraryRefs = useRef<(HTMLDivElement | null)[]>([]);

  const animationRef = useRef<number | null>(null); // Properly typed
  const animationStartTime = useRef<number>(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  /*  Agrega Margin Bottom a la sección de experiencias para evitar que se encimen*/
  useEffect(() => {
    if (open) {
      // Start animation
      animationStartTime.current = performance.now();
      const animate = (time: number) => {
        const elapsed = time - animationStartTime.current;
        const progress = Math.min(elapsed / 100, 1); // 500ms matches your CSS animation

        const currentRef = itineraryRefs.current[activeIndex];
        if (currentRef) {
          // Get the full height (this might need adjustment based on your actual layout)
          const fullHeight = currentRef.scrollHeight;
          const adjustedHeight = fullHeight * progress;
          // Apply the current height based on animation progress
          setItineraryHeight(adjustedHeight);
        }

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Close animation
      setItineraryHeight(0);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [open, activeIndex]);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of section refs
  const sections = ["landing", "proposito", "viajes"];

  const handleNavbarClick = (section: string) => {
    const index = sections.indexOf(section);
    const targetSection = sectionRefs.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div /* Landing */
        className="landing"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <div className="navbar">
          <div
            className="navbarTitle"
            onClick={() => handleNavbarClick("landing")}
          >
            TravelCoin
          </div>
          <div className="navbarMenu">
            <div
              className="navbarItem"
              onClick={() => handleNavbarClick("proposito")}
            >
              Proposito
            </div>
            <div
              className="navbarItem"
              onClick={() => handleNavbarClick("viajes")}
            >
              Viajes
            </div>
            <div className="navbarItem">
              Conectar <img className="navbarImg" src="icons/MetaMask.png" />
            </div>
          </div>
        </div>

        <video
          className="landingVideo"
          loop
          muted
          autoPlay
          controls={false}
          src="agave1.webm"
        />

        <div className="landingCont">
          <div className="landingTitle">TravelCoin</div>
          <div className="landingText">
            Descubre Travelcoin, la plataforma que revoluciona el turismo al
            recompensarte con tokens por cada aventura. Canjea tus Travelcoins
            por descuentos en viajes, experiencias únicas o conviértelos en
            criptomonedas, todo con la seguridad y transparencia de la
            tecnología blockchain. Únete a la nueva era del turismo digital y
            viaja más, gastando menos 🚀🌍
          </div>
          <div
            onClick={() => handleNavbarClick("proposito")}
            className="landingBtn"
          >
            Conoce Más
          </div>
        </div>
      </div>

      <div /* Proposito, AboutUS & Problematica */
        className="aboutUsSection"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
      >
        <div className="quienesSomos">¿Quienes somos?</div>
        <div className="quienesSomosDesc">
          Somos un equipo apasionado por la innovación y la tecnología,
          comprometidos con transformar la industria del turismo a través de
          soluciones basadas en blockchain. Con Travelcoin, buscamos crear
          experiencias de viaje más accesibles, seguras y gratificantes para
          todos.
        </div>
        <div className="teamMembers">
          {teamMembers.map((member, index) => (
            <div key={index} className="teamMember">
              <img
                className="teamImg"
                src={`/pfps/${member.pfp}.webp`}
                alt={member.name}
              />
              <div className="teamText">
                <h3>{member.name}</h3>
                <h3>
                  <a className="teamContacto" href={`mailto:${member.contact}`}>
                    Contacto
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="problematica">
          <img className="problematicaBg" src="bg.jpg" />
        </div>
      </div>

      <div /* Experiancias, Viajes e Itinerarios */
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className="section"
        style={{
          marginBottom: `${itineraryHeight}px`,
        }}
      >
        <Swiper
          slidesPerView={"auto"}
          centeredSlides
          initialSlide={initialSlide}
          spaceBetween={0}
          onSlideChange={handleSlideChange}
        >
          {cardsData.map((card, index) => {
            const distance = Math.abs(activeIndex - index);
            const scale = 1 - distance * 0.1;

            return (
              <SwiperSlide className="slide" key={index}>
                <div
                  className="card"
                  style={{
                    background: card.backgroundColor,
                    transform: `scale(${scale})`,
                  }}
                >
                  <div>
                    <img className="cardImg" src={card.img} alt={card.title} />
                    <div className="cardContent">
                      <div className="cardTitle">{card.title}</div>
                      <div className="cardDesc">{card.desc}</div>
                    </div>
                  </div>

                  <div className="cardBottom">
                    <div className="cardBtn" onClick={() => setOpen(!open)}>
                      Ver más
                    </div>
                    <div
                      ref={(el) => (itineraryRefs.current[index] = el)}
                      className={
                        activeIndex === index && open
                          ? "itinerario"
                          : "itinerarioColapsado"
                      }
                    >
                      <div className="itinerarioTitulo">Itinerario</div>
                      {card.itinerary.map((activity, activityIndex) => (
                        <div className="actividad" key={activityIndex}>
                          <div className="actividadTop">
                            <div className="actividadTitulo">
                              {activity.title}
                            </div>
                            <div className="actividadEstatus">
                              {activity.status}
                            </div>
                          </div>
                          <div>{activity.desc}</div>
                        </div>
                      ))}
                      <div className="cardBtn" onClick={() => setOpen(!open)}>
                        Cerrar
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
export default App;
