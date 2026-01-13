import { Link } from "wouter";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-muted-foreground" />
        </div>
        
        <h1 className="font-serif text-4xl font-bold text-primary mb-4">
          Página no encontrada
        </h1>
        
        <p className="text-muted-foreground text-lg mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        <Link href="/">
          <a className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </a>
        </Link>
      </div>
    </div>
  );
}
