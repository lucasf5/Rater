# Stage para construir o backend
FROM node:18-alpine as backend

WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend .
RUN npm run build

# Stage para construir o frontend
FROM node:18-alpine as frontend

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# Stage final
FROM node:18-alpine

# Copiando o build do backend e frontend para a imagem final
COPY --from=backend /app/backend /app/backend
COPY --from=frontend /app/frontend /app/frontend

# Definindo o diretório de trabalho
WORKDIR /app

# Comando final para rodar os dois serviços
CMD ["sh", "-c", "cd backend && npm run prisma && npm run start & cd ../frontend && npm run dev"]
