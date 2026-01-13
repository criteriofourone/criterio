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
      title: "Dominio de Costos: Maximiza la Rentabilidad de tu Negocio",
      affiliateLink: "https://go.hotmart.com/F103838473V",
      description: "Optimice su margen de beneficio mediante un análisis técnico y preciso de sus costos operativos y financieros.",
      learningPoints: [
        "Ingeniería de costos y márgenes de contribución",
        "Blindaje financiero: separación de activos personales y corporativos",
        "Estrategias avanzadas de pricing para mercados competitivos"
      ],
      idealProfile: "Directivos, propietarios de PyMEs y consultores independientes",
      pros: ["Metodología técnica", "Implementación inmediata", "Plantillas de cálculo profesional"],
      cons: ["Requiere disciplina en el registro de datos"],
      certification: null,
      ctaText: "Adquirir Programa de Costos",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
    });

    // Course 2
    await storage.createCourse({
      title: "Estructura Legal y Fiscal: Guía de Formalización en RD",
      affiliateLink: "https://go.hotmart.com/A103838549L",
      description: "Asegure el cumplimiento normativo y acceda a beneficios corporativos formalizando su operación en la República Dominicana.",
      learningPoints: [
        "Arquitectura de sociedades comerciales en RD (SRL, EIRL, SA)",
        "Optimización del régimen fiscal y cumplimiento ante la DGII",
        "Mitigación de riesgos legales en la etapa de constitución"
      ],
      idealProfile: "Inversionistas y fundadores de startups en territorio dominicano",
      pros: ["Especialización local", "Ruta crítica de pasos legales", "Lenguaje ejecutivo"],
      cons: ["No incluye gestión de trámites ante registros públicos"],
      certification: null,
      ctaText: "Descargar Guía de Formalización",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
    });

    // Course 3
    await storage.createCourse({
      title: "Internacionalización: Constitución de LLC en Florida",
      affiliateLink: "https://go.hotmart.com/U103838513C",
      description: "Expanda su presencia global mediante una estructura corporativa eficiente en los Estados Unidos.",
      learningPoints: [
        "Marco jurídico de las LLC en Florida para no residentes",
        "Protocolo de registro y obtención de EIN",
        "Fundamentos de planificación fiscal internacional"
      ],
      idealProfile: "Empresarios con visión global y exportadores de servicios",
      pros: ["Enfoque estratégico", "Optimización de impuestos internacionales", "Guía paso a paso"],
      cons: ["Consultoría legal específica para visas no incluida"],
      certification: "Certificado de Finalización Académica",
      ctaText: "Iniciar Proceso Internacional",
      imageUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000"
    });
  }

  const existingFaqs = await storage.getFaqs();
  if (existingFaqs.length === 0) {
    await storage.createFaq({
      question: "¿Cuál es el modelo de negocio de este portal?",
      answer: "Operamos como una firma de análisis y curaduría de formación profesional. Facilitamos el acceso a programas de alta calidad mediante alianzas estratégicas con Hotmart."
    });
    await storage.createFaq({
      question: "¿Existe algún costo adicional por acceder mediante Criterio?",
      answer: "En absoluto. Usted accede a las tarifas oficiales de los productores, beneficiándose de nuestra selección experta sin cargos adicionales."
    });
    await storage.createFaq({
      question: "¿Cómo se garantiza la seguridad de mi transacción?",
      answer: "Todas las transacciones se procesan a través de la infraestructura de Hotmart, líder global en productos digitales, garantizando encriptación bancaria y protección al comprador."
    });
  }
}
