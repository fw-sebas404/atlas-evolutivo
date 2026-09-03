/* Atlas Evolutivo — estado de utilidad tratado como ficha extraviada: papel, tinta, sello y CTA exploratorio. */
import { ArrowLeft, Compass } from "lucide-react";



export default function NotFound() {
  return (
    <main className="lost-sheet">
      <div className="lost-topline"><span className="mono">ATLAS EVOLUTIVO</span><span className="mono">CUADERNO 02 · HOJA SUELTA</span></div>
      <section className="lost-card" aria-labelledby="lost-title">
        <div className="lost-seal"><span className="lost-orbit" /><span className="lost-branch" /></div>
        <div className="lost-index mono">FICHA 404 / OBSERVACIÓN AUSENTE</div>
        <span className="lost-number">404</span>
        <h1 id="lost-title">Esta pista se salió del mapa.</h1>
        <p>La página que buscas no aparece en este recorrido. Puede que la ficha todavía no exista o que haya tomado otra ruta entre los linajes.</p>
        <a className="lost-cta" href="/"><Compass size={18} /> Volver a la mesa de observación <ArrowLeft size={16} /></a>
        <div className="lost-note"><span className="mono">NOTA DE CAMPO</span><p>Cuando una pista desaparece, volvemos al último punto conocido y miramos con más atención.</p></div>
      </section>
      <div className="lost-footer mono">PAPEL HUESO · TINTA CARBÓN · VERDE LIQUEN</div>
    </main>
  );
}
