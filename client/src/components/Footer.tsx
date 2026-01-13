import { Link } from "wouter";
import logoFooter from "@assets/Criterio___Four_One_20260113_014323_0000_1768289064360.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-white border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <img 
              src={logoFooter} 
              alt="Criterio | Four One Solutions" 
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Soluciones estratégicas y análisis de alto nivel para la formación empresarial, contable y de gestión de resultados.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-white">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="/#courses" className="hover:text-primary transition-colors">Análisis de Cursos</a></li>
              <li><a href="/#methodology" className="hover:text-primary transition-colors">Metodología</a></li>
              <li><a href="/#faq" className="hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="cursor-not-allowed opacity-50">Política de Privacidad</span></li>
              <li><span className="cursor-not-allowed opacity-50">Términos de Uso</span></li>
              <li><span className="cursor-not-allowed opacity-50">Aviso Legal</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-xs text-gray-400">
            <p className="mb-2">
              <strong className="text-white">Aviso de afiliación:</strong> Este sitio participa en el programa de afiliados de Hotmart.
              Podemos recibir una comisión si realiza una compra a través de nuestros enlaces, sin costo adicional para usted.
            </p>
            <p>&copy; {new Date().getFullYear()} Criterio Four One Solutions. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
