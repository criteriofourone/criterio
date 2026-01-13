import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.courses.list.path, async (req, res) => {
    const courses = await storage.getCourses();
    res.json(courses);
  });

  app.get(api.courses.get.path, async (req, res) => {
    const course = await storage.getCourse(Number(req.params.id));
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  });

  app.get(api.faqs.list.path, async (req, res) => {
    const faqs = await storage.getFaqs();
    res.json(faqs);
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingCourses = await storage.getCourses();
  if (existingCourses.length === 0) {
    // Course 1
    await storage.createCourse({
      title: "Como Calcular los Costos Reales de tu Negocio",
      affiliateLink: "https://go.hotmart.com/F103838473V",
      description: "Emprendedores que no saben si su negocio realmente genera ganancias.",
      learningPoints: [
        "Identificación de costos reales",
        "Separación de finanzas personales y empresariales",
        "Cálculo correcto de precios"
      ],
      idealProfile: "Pequeños empresarios, emprendedores, profesionales independientes",
      pros: ["Práctico", "Claro", "Aplicable de inmediato"],
      cons: ["No sustituye asesoría contable personalizada"],
      certification: "No especificado",
      ctaText: "Ver curso en Hotmart",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000" // Accounting/Business generic
    });

    // Course 2
    await storage.createCourse({
      title: "¡Formaliza tu negocio ya! Guía definitiva para emprendedores en RD",
      affiliateLink: "https://go.hotmart.com/A103838549L",
      description: "Guía práctica para formalizar negocios en República Dominicana.",
      learningPoints: [
        "Tipos de empresas en RD",
        "Régimen fiscal",
        "Errores comunes al formalizar"
      ],
      idealProfile: "Emprendedores dominicanos que desean operar legalmente",
      pros: ["Enfoque local (RD)", "Lenguaje claro", "Pasos concretos"],
      cons: ["Formato guía / ebook", "No incluye asesoría personalizada"],
      certification: "No incluye constancia formal",
      ctaText: "Acceder a la guía en Hotmart",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000" // Legal/Paperwork
    });

    // Course 3
    await storage.createCourse({
      title: "Abre tu propia empresa LLC en Florida, EEUU",
      affiliateLink: "https://go.hotmart.com/U103838513C",
      description: "Curso paso a paso para abrir una LLC en Florida desde el extranjero.",
      learningPoints: [
        "Conceptos legales básicos",
        "Proceso de registro",
        "Documentación fiscal inicial"
      ],
      idealProfile: "Emprendedores que desean expandirse o internacionalizar su negocio",
      pros: ["Enfoque estructurado", "Alta demanda"],
      cons: ["No reemplaza asesoría legal especializada"],
      certification: "Certificado de finalización disponible",
      ctaText: "Ver curso completo en Hotmart",
      imageUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000" // Florida/International business
    });
  }

  const existingFaqs = await storage.getFaqs();
  if (existingFaqs.length === 0) {
    await storage.createFaq({
      question: "¿Este sitio vende cursos?",
      answer: "No, este sitio solo analiza y recomienda cursos. La compra se realiza directamente en la plataforma segura de Hotmart."
    });
    await storage.createFaq({
      question: "¿Qué es un enlace de afiliado?",
      answer: "Es un enlace especial que nos permite recibir una pequeña comisión si decides comprar el curso, sin costo adicional para ti."
    });
    await storage.createFaq({
      question: "¿Pago más por comprar desde aquí?",
      answer: "No. El precio es exactamente el mismo que si compraras directamente al productor."
    });
    await storage.createFaq({
      question: "¿Los cursos son oficiales de Hotmart?",
      answer: "Los cursos están alojados y vendidos a través de la tecnología de Hotmart, que garantiza la entrega y la seguridad del pago."
    });
  }
}
