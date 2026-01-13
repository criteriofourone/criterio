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

# Instalar solo dependencias de producción para mantener la imagen ligera
COPY package*.json ./
RUN npm install --omit=dev

# Copiar archivos necesarios
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/shared ./shared

# Exponer el puerto 80
EXPOSE 80

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=80

# Comando para iniciar
# El template genera dist/index.cjs como bundle del servidor
CMD ["node", "dist/index.cjs"]
