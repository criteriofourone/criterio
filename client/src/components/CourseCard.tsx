import { Check, AlertCircle, ExternalLink, Award } from "lucide-react";
import { motion } from "framer-motion";
import type { Course } from "@shared/schema";

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mb-12 last:mb-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Content Side */}
        <div className="lg:col-span-8 p-6 md:p-8 lg:p-10 flex flex-col h-full">
          <div className="mb-6">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary mb-4 leading-tight">
              {course.title}
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mb-6"></div>
            <p className="text-foreground/90 text-lg font-medium leading-relaxed text-balance italic border-l-4 border-primary pl-6 py-2 bg-primary/5">
              {course.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Learning Points */}
            <div className="space-y-3">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Qué aprenderás
              </h3>
              <ul className="space-y-2">
                {course.learningPoints.map((point, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal Profile */}
            <div className="space-y-3">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Perfil ideal
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {course.idealProfile}
              </p>
              
              {course.certification && (
                <div className="mt-4 pt-4 border-t border-border/50 flex items-start gap-2 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">
                  <Award className="w-5 h-5 shrink-0" />
                  <span>
                    <strong>Certificación:</strong> {course.certification}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Pros & Cons Section */}
          <div className="bg-secondary/20 rounded-lg p-5 md:p-6 mb-8 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-700 text-sm uppercase tracking-wider mb-3">Lo Positivo</h4>
                <ul className="space-y-2">
                  {course.pros.map((pro, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-600 text-sm uppercase tracking-wider mb-3">A Considerar</h4>
                <ul className="space-y-2">
                  {course.cons.map((con, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></div>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Side / Sticky on Desktop */}
        <div className="lg:col-span-4 bg-secondary/10 border-t lg:border-t-0 lg:border-l border-border p-6 md:p-8 flex flex-col justify-center items-center text-center">
          <div className="sticky top-24 w-full">
            <div className="mb-8 p-6 bg-white rounded-lg border border-primary/20 shadow-xl shadow-primary/5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60 block mb-3">
                Perspectiva Estratégica
              </span>
              <p className="font-serif text-xl font-bold text-primary leading-snug">
                "Recomendado por su {course.pros[0]?.toLowerCase() || 'excelencia técnica'}."
              </p>
            </div>

            <a
              href={course.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full inline-flex items-center justify-center px-8 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 bg-primary rounded-lg hover:bg-secondary hover:shadow-2xl hover:translate-y-[-3px] active:translate-y-0"
            >
              <span>{course.ctaText}</span>
              <ExternalLink className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <p className="mt-4 text-xs text-muted-foreground/60 text-center">
              Se abrirá en una nueva pestaña segura de Hotmart.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
