import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { useCourses, useFaqs } from "@/hooks/use-content";
import { ArrowDown, CheckCircle2, Search, SlidersHorizontal, Scale } from "lucide-react";

export default function Home() {
  const { data: courses, isLoading: loadingCourses } = useCourses();
  const { data: faqs, isLoading: loadingFaqs } = useFaqs();

  const scrollToCourses = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary overflow-x-hidden w-full">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/50 via-background to-background"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-[1.1] tracking-tight text-balance">
              Formación empresarial de élite, analizada para resultados reales
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
              Optimice su trayectoria corporativa con nuestra curaduría experta de programas en emprendimiento, contabilidad y gestión estratégica.
            </p>

            <button
              onClick={scrollToCourses}
              className="inline-flex items-center px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-xl shadow-primary/20"
            >
              Explorar Programas de Éxito
              <ArrowDown className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="py-24 bg-background border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Análisis Detallados
            </h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Hemos seleccionado y revisado en profundidad las siguientes formaciones para garantizar su calidad y relevancia.
            </p>
          </div>

          {loadingCourses ? (
            <div className="space-y-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 w-full bg-muted/20 animate-pulse rounded-xl border border-border"></div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {courses?.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section id="methodology" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Cómo evaluamos
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Nuestro proceso de revisión se centra en el valor práctico. No nos importan las promesas exageradas de marketing, sino la utilidad real para el estudiante.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-blue-700">
                    <SlidersHorizontal className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Utilidad Práctica</h3>
                    <p className="text-sm text-muted-foreground mt-1">¿Se puede aplicar lo aprendido inmediatamente al negocio?</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-700">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Claridad del Contenido</h3>
                    <p className="text-sm text-muted-foreground mt-1">Estructura lógica, audio claro y material de apoyo útil.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 text-amber-700">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Relevancia Local</h3>
                    <p className="text-sm text-muted-foreground mt-1">Adaptabilidad al contexto legal y fiscal de República Dominicana.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-2xl -rotate-6 transform scale-105"></div>
              <div className="bg-card border border-border p-8 rounded-2xl relative shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-4">Liderazgo en Curaduría</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>Criterio | Four One Solutions</strong> representa el estándar de excelencia en la evaluación de formación ejecutiva y corporativa.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Filtramos la saturación del mercado educativo para presentarle únicamente soluciones que impactan directamente en el EBITDA y la estructura legal de su organización.
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-primary">Análisis de Alto Nivel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary">Preguntas Frecuentes</h2>
          </div>

          <div className="grid gap-6">
            {loadingFaqs ? (
              <p className="text-center text-muted-foreground">Cargando preguntas...</p>
            ) : (
              faqs?.map((faq, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={faq.id}
                  className="bg-background rounded-lg border border-border p-6 shadow-sm hover:border-primary/30 transition-colors"
                >
                  <h3 className="font-bold text-lg mb-2 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
