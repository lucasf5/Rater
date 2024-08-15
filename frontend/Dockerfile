# Dockerfile para o frontend
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e package-lock.json (se existir) para o contêiner
COPY frontend/package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos para o contêiner
COPY frontend/ .

# Expõe a porta que a aplicação vai usar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
