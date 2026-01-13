# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package*.json ./

# Instalar todas las dependencias (incluyendo devDependencies para construir)
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM node:20-alpine

WORKDIR /app

# Copiar archivos necesarios desde la etapa de construcción
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Puerto que usa CapRover por defecto (80)
EXPOSE 80

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=80

# Comando para iniciar
# Ejecutamos el servidor directamente para evitar problemas con scripts de package.json
CMD ["node", "dist/index.js"]
