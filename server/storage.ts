import { Course, InsertCourse, Faq, InsertFaq } from "@shared/schema";

export interface IStorage {
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  getFaqs(): Promise<Faq[]>;
  createFaq(faq: InsertFaq): Promise<Faq>;
}

export class MemStorage implements IStorage {
  private courses: Map<number, Course>;
  private faqs: Map<number, Faq>;
  private courseId: number;
  private faqId: number;

  constructor() {
    this.courses = new Map();
    this.faqs = new Map();
    this.courseId = 1;
    this.faqId = 1;

    // Initialize with default data
    this.initData();
  }

  private initData() {
    const defaultCourses: InsertCourse[] = [
      {
        title: "Como Calcular los Costos Reales de tu Negocio",
        affiliateLink: "https://go.hotmart.com/F103838473V",
        description: "Emprendedores que no saben si su negocio realmente genera ganancias.",
        learningPoints: ["Identificación de costos reales", "Separación de finanzas personales y empresariales", "Cálculo correcto de precios"],
        idealProfile: "Pequeños empresarios, emprendedores, profesionales independientes",
        pros: ["Práctico", "Claro", "Aplicable de inmediato"],
        cons: ["No sustituye asesoría contable personalizada"],
        certification: "No especificado",
        ctaText: "Ver curso en Hotmart",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
      },
      {
        title: "¡Formaliza tu negocio ya! Guía definitiva para emprendedores en RD",
        affiliateLink: "https://go.hotmart.com/A103838549L",
        description: "Guía práctica para formalizar negocios en República Dominicana.",
        learningPoints: ["Tipos de empresas en RD", "Régimen fiscal", "Errores comunes al formalizar"],
        idealProfile: "Emprendedores dominicanos que desean operar legalmente",
        pros: ["Enfoque local (RD)", "Lenguaje claro", "Pasos concretos"],
        cons: ["Formato guía / ebook", "No incluye asesoría personalizada"],
        certification: "No incluye constancia formal",
        ctaText: "Acceder a la guía en Hotmart",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
      },
      {
        title: "Abre tu propia empresa LLC en Florida, EEUU",
        affiliateLink: "https://go.hotmart.com/U103838513C",
        description: "Curso paso a paso para abrir una LLC en Florida desde el extranjero.",
        learningPoints: ["Conceptos legales básicos", "Proceso de registro", "Documentación fiscal inicial"],
        idealProfile: "Emprendedores que desean expandirse o internacionalizar su negocio",
        pros: ["Enfoque estructurado", "Alta demanda"],
        cons: ["No reemplaza asesoría legal especializada"],
        certification: "Certificado de finalización disponible",
        ctaText: "Ver curso completo en Hotmart",
        imageUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000"
      }
    ];

    const defaultFaqs: InsertFaq[] = [
      {
        question: "¿Este sitio vende cursos?",
        answer: "No, este sitio solo analiza y recomienda cursos. La compra se realiza directamente en la plataforma segura de Hotmart."
      },
      {
        question: "¿Qué es un enlace de afiliado?",
        answer: "Es un enlace especial que nos permite recibir una pequeña comisión si decides comprar el curso, sin costo adicional para ti."
      },
      {
        question: "¿Pago más por comprar desde aquí?",
        answer: "No. El precio es exactamente el mismo que si compraras directamente al productor."
      },
      {
        question: "¿Los cursos son oficiales de Hotmart?",
        answer: "Los cursos están alojados y vendidos a través de la tecnología de Hotmart, que garantiza la entrega y la seguridad del pago."
      }
    ];

    defaultCourses.forEach(c => this.createCourse(c));
    defaultFaqs.forEach(f => this.createFaq(f));
  }

  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: number): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = this.courseId++;
    const course: Course = {
      ...insertCourse,
      id,
      certification: insertCourse.certification ?? null,
      imageUrl: insertCourse.imageUrl ?? null
    };
    this.courses.set(id, course);
    return course;
  }

  async getFaqs(): Promise<Faq[]> {
    return Array.from(this.faqs.values());
  }

  async createFaq(insertFaq: InsertFaq): Promise<Faq> {
    const id = this.faqId++;
    const faq: Faq = { ...insertFaq, id };
    this.faqs.set(id, faq);
    return faq;
  }
}

export const storage = new MemStorage();
