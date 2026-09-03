/* Atlas Evolutivo — Cuaderno de campo editorial: lectura por pistas, composición asimétrica y voz observadora. */
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Check, CircleDashed, Leaf, Menu, MoveRight, X } from "lucide-react";

const ASSETS = {

  hero: "/manus-storage/atlas-hero_da8ae8f4.jpg",
};

const clues = [
  { id: "01", title: "Variación", copy: "Una población nunca es una fotocopia de sí misma. Hay diferencias heredables esperando a hacer algo interesante." },
  { id: "02", title: "Presión", copy: "El ambiente no elige con intención, pero sí cambia qué rasgos ayudan a dejar más descendencia." },
  { id: "03", title: "Tiempo", copy: "Cuando un pequeño cambio aparece una y otra vez en muchas generaciones, deja de ser pequeño para la historia." },
];

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-mark-shell ${className}`}>
      <span className="css-mark" aria-hidden="true" />
    </span>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="mono">{number}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeScale, setActiveScale] = useState<"micro" | "macro">("micro");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Atlas Evolutivo, volver al inicio" onClick={closeMenu}>
          <BrandMark />
          <span className="brand-copy"><strong>ATLAS</strong><em>EVOLUTIVO</em></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegación principal">
          <a href="#micro" onClick={closeMenu}>Microevolución</a>
          <a href="#macro" onClick={closeMenu}>Macroevolución</a>
          <a href="#comparar" onClick={closeMenu}>Poner en escala</a>
        </nav>
        <span className="field-stamp">CUADERNO 02 · BIOLOGÍA</span>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" style={{ backgroundImage: `url(${ASSETS.hero})` }} aria-hidden="true" />
        <div className="hero-copy">
          <SectionLabel number="00">Pregunta de entrada</SectionLabel>
          <h1>¿Qué puede cambiar antes de que cambie el paisaje?</h1>
          <p className="hero-lede">La evolución no siempre llega con una gran escena. A veces empieza con una diferencia casi invisible, se repite durante generaciones y termina dibujando una historia enorme.</p>
          <a className="text-link" href="#micro">Seguir la pista <MoveRight size={17} /></a>
        </div>
        <div className="hero-note note-card">
          <span className="mono">NOTA AL MARGEN</span>
          <p>Piensa en una población, no en un individuo. La evolución se observa cuando cambia la frecuencia de los rasgos entre generaciones.</p>
        </div>
        <div className="hero-index mono">A · 2026 / 02</div>
      </section>

      <section className="field-intro page-section">
        <div className="section-rail"><span className="vertical-text">OBSERVAR · COMPARAR · CONECTAR</span></div>
        <div className="intro-content">
          <SectionLabel number="01">Cómo leer este atlas</SectionLabel>
          <h2>Dos escalas. Una misma historia de cambios acumulados.</h2>
          <p className="intro-lede">Micro y macro no son dos evoluciones distintas. Son dos maneras de enfocar la misma película: primero acercamos la lupa a una población y después abrimos el plano para seguir linajes durante muchísimo tiempo.</p>
          <div className="clue-list">
            {clues.map((clue) => (
              <article className="clue" key={clue.id}>
                <span className="clue-number mono">{clue.id}</span>
                <div><h3>{clue.title}</h3><p>{clue.copy}</p></div>
                <CircleDashed size={22} strokeWidth={1.4} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="split-section micro-section page-section" id="micro">
        <div className="split-image">
          <div className="micro-plate" aria-label="Placa de observación con tres generaciones de picos y semillas">
            <span className="plate-kicker mono">SERIE A / A-1 / A-2</span>
            <div className="generation-row"><span className="seed seed-small" /><span className="bird-beak beak-thin" /><span className="seed seed-small" /><span className="bird-beak beak-thin" /></div>
            <div className="generation-row selected"><span className="seed seed-wide" /><span className="bird-beak beak-wide" /><span className="seed seed-wide" /><span className="bird-beak beak-wide" /></div>
            <div className="generation-row"><span className="seed seed-medium" /><span className="bird-beak beak-medium" /><span className="seed seed-medium" /><span className="bird-beak beak-medium" /></div>
            <span className="plate-note">una diferencia que se repite</span><span className="plate-grid" />
          </div>
          <span className="image-caption mono">FICHA 01 · CAMBIO CERCANO</span>
        </div>
        <div className="split-copy">
          <SectionLabel number="02">Acercar la lupa</SectionLabel>
          <h2>Microevolución: el cambio que cabe en una población.</h2>
          <p>Imagina una población de aves que encuentra semillas de tamaños distintos. Algunas tienen picos un poco más anchos, otras más finos. Si esas diferencias se heredan y cierto tipo de semilla aparece con más frecuencia, el reparto de rasgos puede cambiar generación tras generación.</p>
          <p>Eso es microevolución: una modificación en la frecuencia de variantes dentro de una población. No hace falta que aparezca una especie nueva para que la evolución esté ocurriendo.</p>
          <div className="mechanism-card">
            <span className="mono card-kicker">REGISTRO DE MECANISMOS</span>
            <div className="mechanism-row"><strong>Mutación</strong><span>introduce una variante</span></div>
            <div className="mechanism-row"><strong>Selección natural</strong><span>cambia qué variantes dejan más descendencia</span></div>
            <div className="mechanism-row"><strong>Deriva genética</strong><span>mueve frecuencias por azar, sobre todo en grupos pequeños</span></div>
            <div className="mechanism-row"><strong>Flujo génico</strong><span>trae o lleva variantes entre poblaciones</span></div>
          </div>
          <a className="text-link" href="#comparar">Ponerlo en escala <ArrowDownRight size={17} /></a>
        </div>
      </section>

      <section className="macro-section page-section" id="macro">
        <div className="macro-copy">
          <SectionLabel number="03">Abrir el plano</SectionLabel>
          <h2>Macroevolución: cuando el tiempo empieza a verse.</h2>
          <p>Ahora alejamos la mirada. En millones de años, los cambios que se acumulan en poblaciones pueden acompañar la aparición de nuevas especies, la diversificación de un linaje o la desaparición de una rama.</p>
          <p>La macroevolución estudia esos patrones grandes: cómo se distribuyen las ramas de un árbol de parentesco, cuándo se separan y qué transformaciones aparecen a lo largo de la historia de la vida.</p>
          <div className="quote-note"><span className="quote-mark">“</span><p>Una rama nueva no borra el tronco. Cuenta lo que pasó después de una separación.</p><span className="mono">ANOTACIÓN 03B</span></div>
        </div>
        <div className="macro-visual">
          <div className="branch-plate" aria-label="Diagrama editorial de un linaje que se ramifica a través del tiempo">
            <span className="plate-kicker mono">MAPA DE LINAJE / 03</span>
            <div className="branch branch-main" /><div className="branch branch-left" /><div className="branch branch-right" /><div className="branch branch-far" />
            <span className="branch-dot dot-one" /><span className="branch-dot dot-two" /><span className="branch-dot dot-three" /><span className="branch-dot dot-four" />
            <div className="strata strata-one" /><div className="strata strata-two" /><div className="strata strata-three" />
            <span className="plate-note">cada bifurcación conserva una historia</span>
          </div>
          <div className="macro-label mono">ESCALA PROFUNDA<br />MILES → MILLONES DE AÑOS</div>
        </div>
      </section>

      <section className="compare-section page-section" id="comparar">
        <div className="compare-heading"><SectionLabel number="04">Poner en escala</SectionLabel><h2>La misma película, dos encuadres.</h2><p>Elige un encuadre y observa qué pregunta aparece en primer plano.</p></div>
        <div className="scale-tabs" role="tablist" aria-label="Escalas evolutivas">
          <button className={activeScale === "micro" ? "scale-tab active" : "scale-tab"} onClick={() => setActiveScale("micro")} role="tab" aria-selected={activeScale === "micro"}><span className="mono">LUPA</span><strong>Microevolución</strong><small>poblaciones · generaciones</small></button>
          <button className={activeScale === "macro" ? "scale-tab active" : "scale-tab"} onClick={() => setActiveScale("macro")} role="tab" aria-selected={activeScale === "macro"}><span className="mono">PANORAMA</span><strong>Macroevolución</strong><small>linajes · tiempo profundo</small></button>
        </div>
        <div className="scale-result"><div className="result-marker"><span className="mono">ENFOQUE ACTIVO</span><span className="marker-line" /></div>{activeScale === "micro" ? <div className="result-content"><span className="result-icon"><Leaf size={24} /></span><div><h3>¿Qué está cambiando dentro del grupo?</h3><p>Rastrea cómo una variante se vuelve más o menos frecuente. El escenario puede ser un bosque, una ciudad o un laboratorio: lo importante es comparar generaciones de una misma población.</p><span className="mono result-tag">ESCALA: CERCANA</span></div></div> : <div className="result-content"><span className="result-icon branch-icon"><ArrowUpRight size={25} /></span><div><h3>¿Qué patrón dibujan las ramas con el tiempo?</h3><p>Rastrea separaciones, diversificaciones y extinciones. El escenario se extiende a través de estratos y fósiles: importa la forma general del árbol de la vida.</p><span className="mono result-tag">ESCALA: PANORÁMICA</span></div></div>}</div>
        <div className="notes-image note-sheet" aria-label="Ficha de observación con preguntas sobre escala"><span className="mono">FICHA DE CAMPO</span><strong>¿Qué cambia<br />cuando alejas<br />la mirada?</strong><span className="note-rule" /><span className="mono">POBLACIÓN → LINAJE</span></div>
      </section>

      <section className="check-section page-section">
        <div className="check-number mono">05 / COMPROBACIÓN</div>
        <div className="check-copy"><h2>Una última observación.</h2><p>Un grupo de lagartijas de una isla cambia el color de sus escamas a lo largo de varias generaciones. ¿Qué estás observando directamente?</p><div className="answer-list">{["Un cambio microevolutivo", "La aparición inmediata de un nuevo orden", "Una extinción masiva"].map((answer, index) => <button key={answer} className={selectedAnswer === index ? (index === 0 ? "answer correct" : "answer wrong") : "answer"} onClick={() => setSelectedAnswer(index)}>{selectedAnswer === index && index === 0 ? <Check size={17} /> : <span className="answer-dot" />}{answer}{selectedAnswer === index && <span className="answer-feedback">{index === 0 ? "Exacto: cambia la frecuencia de un rasgo dentro de la población." : "Mira de nuevo la escala: el ejemplo habla de varias generaciones en un grupo."}</span>}</button>)}</div></div>
      </section>

      <footer className="footer"><div><BrandMark className="footer-brand-mark" /><span className="brand-copy"><strong>ATLAS</strong><em>EVOLUTIVO</em></span></div><p>Una guía para mirar más de cerca.</p><span className="mono">FIN DE FICHA · 02</span></footer>
    </main>
  );
}
