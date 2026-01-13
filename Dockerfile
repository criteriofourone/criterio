# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package*.json ./

# Instalar dependencias (incluyendo devDependencies para construir)
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM node:20-alpine

WORKDIR /app

# Copiar archivos necesarios
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Puerto que usa CapRover por defecto (80)
EXPOSE 80

# Variables de entorno
# Se asegura de que use MemStorage por defecto en producción al no configurar DATABASE_URL
ENV NODE_ENV=production
ENV PORT=80

# Comando para iniciar
CMD ["npm", "start"]
