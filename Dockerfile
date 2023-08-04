# Usa uma imagem do Node.js como base
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Expõe a porta 8080 (ou qualquer outra porta que sua aplicação Vue.js utiliza)
EXPOSE 8080

# Comando para iniciar a aplicação usando Vite
CMD ["npm", "run", "serve"]
