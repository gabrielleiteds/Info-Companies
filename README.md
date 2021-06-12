## Info-Companies

## context
Construir um microsserviço que retorne para o usuário os dados do Cartão CNPJ de
uma empresa. Os dados das empresas deverão estar cacheados em uma base de
dados local ou então devem ser buscados no serviço Brasil.io.


## Diagram
![image](https://user-images.githubusercontent.com/50277844/121778220-6e28b480-cb6c-11eb-846d-3dafde947e95.png)

## install 
 - Run: npm i 
 - Run: npm run dev (rodando em ts)
 - Run: npm run build -> npm run start (rodar em js)

## Folders Architeture 
![image](https://user-images.githubusercontent.com/50277844/121779501-5b18e300-cb72-11eb-8b83-5853857eedc9.png)



## Technologies
- Database
  - MongoDB
- Development 
  - NodeJS (With TypeScript)
  - Axios (access external apis)
  - cors (access my api)
- Helpers
  - dotenv
  - eslint
  - 
## patterns
- Clean Architeture
- Clean Code
- Dependency Injection

## use 
 - access localhost:3333/getCompany 
 - send a json with cnpj
 
