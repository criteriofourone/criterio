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

# Copiar la carpeta dist generada
COPY --from=builder /app/dist ./dist

# Copiar package.json y package-lock.json para instalar solo dependencias de producción
COPY --from=builder /app/package*.json ./

# Instalar solo dependencias de producción para minimizar el tamaño de la imagen
RUN npm install --omit=dev

# Puerto que usa CapRover por defecto (80)
EXPOSE 80

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=80

# Comando para iniciar
CMD ["npm", "start"]
