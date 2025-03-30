import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
import "swiper/css";

const cardsData = [
  {
    img: "tequila.webp",
    title: "Visita Tequila",
    desc: "Descubre Tequila, México, con un recorrido por sus icónicas destilerías...",
    backgroundColor:
      "linear-gradient(-30deg, rgb(159, 182, 255) 0%, rgb(105, 73, 126) 100%)",
    itinerary: [
      {
        title: "Tour de Fábricas",
        status: "Faltante",
        desc: "Visita destilerías artesanales...",
      },
      {
        title: "Recorrido por el Pueblo Mágico",
        status: "Faltante",
        desc: "Descubre las encantadoras calles...",
      },
      {
        title: "Degustación de Tequila",
        status: "Faltante",
        desc: "Participa en una cata de tequilas premium...",
      },
      {
        title: "Tour de Fábricas",
        status: "Faltante",
        desc: "Visita destilerías artesanales...",
      },
      {
        title: "Recorrido por el Pueblo Mágico",
        status: "Faltante",
        desc: "Descubre las encantadoras calles...",
      },
      {
        title: "Degustación de Tequila",
        status: "Faltante",
        desc: "Participa en una cata de tequilas premium...",
      },
    ],
  },
  {
    img: "mazamitla.webp",
    title: "Visita Mazamitla",
    desc: "Mazamitla, conocido como el 'Pueblo Mágico' de la sierra...",
    backgroundColor:
      "linear-gradient(-30deg, rgb(105, 205, 145) 0%, rgb(27, 74, 69) 100%)",
    itinerary: [
      {
        title: "Caminata en el Bosque",
        status: "Faltante",
        desc: "Haz una caminata guiada por los hermosos bosques...",
      },
      {
        title: "Paseo a Caballo",
        status: "Faltante",
        desc: "Disfruta de un paseo a caballo...",
      },
      {
        title: "Visita a Cascada El Salto",
        status: "Faltante",
        desc: "Explora la majestuosa cascada El Salto...",
      },
    ],
  },
  {
    img: "tapalpa.webp",
    title: "Visita Tapalpa",
    desc: "Tapalpa es un encantador Pueblo Mágico...",
    backgroundColor:
      "linear-gradient(-30deg, rgb(183, 212, 171) 0%, rgb(59, 99, 104) 100%)",
    itinerary: [
      {
        title: "Recorrido por el Pueblo",
        status: "Faltante",
        desc: "Pasea por las calles empedradas de Tapalpa...",
      },
      {
        title: "Senderismo en el Bosque",
        status: "Faltante",
        desc: "Haz una caminata por los hermosos paisajes...",
      },
      {
        title: "Visita al Cerro de la Cruz",
        status: "Faltante",
        desc: "Sube al Cerro de la Cruz para obtener una vista panorámica...",
      },
    ],
  },
  {
    img: "sansebastian.webp",
    title: "Visita San Sebastián del Oeste",
    desc: "San Sebastián del Oeste es un Pueblo Mágico...",
    backgroundColor:
      "linear-gradient(-30deg, rgb(204, 163, 118) 0%, rgb(69, 56, 54) 100%)",
    itinerary: [
      {
        title: "Recorrido Histórico",
        status: "Faltante",
        desc: "Explora el centro histórico de San Sebastián...",
      },
      {
        title: "Senderismo y Naturaleza",
        status: "Faltante",
        desc: "Realiza un recorrido por los senderos del bosque...",
      },
      {
        title: "Visita a las Minas",
        status: "Faltante",
        desc: "Conoce las antiguas minas de San Sebastián...",
      },
    ],
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const [itineraryHeight, setItineraryHeight] = useState(0);
  const itineraryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<(HTMLDivElement | null)[]>([]);

  const swiperRef = useRef<(HTMLDivElement | null)[]>([]);

  const animationRef = useRef<number | null>(null); // Properly typed
  const animationStartTime = useRef<number>(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

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
          setItineraryHeight(adjustedHeight - 300);
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

  return (
    <>
      <div
        className="section"
        style={{
          background: "orange",
          marginBottom: `${itineraryHeight}px`,
        }}
      >
        <Swiper
          ref={swiperRef}
          className="swiper"
          slidesPerView={"auto"}
          centeredSlides
          initialSlide={2}
          spaceBetween={50}
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

      <div className="section" style={{ background: "pink" }}>
        uwu
      </div>
    </>
  );
}
export default App;
