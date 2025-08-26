# Como rodar o projeto

## 1. Pré-requisitos
- Node.js (versão 16+ recomendada)  
- NPM (vem junto com Node.js)  
- Terminal ou CMD para rodar comandos  
- (Opcional) Postman ou curl para testar os endpoints  

---

## 2. Instalação

1. Clone o projeto:
```
git clone <url-do-projeto>
cd inventory-system
```

2. Instale as dependências:
```
npm install
```

3. Verifique se a pasta data/ contém os arquivos JSON simulando o estoque das lojas:

```
data/
 ├─ store1.json
 └─ store2.json
 ```

Exemplo de store1.json:
```
{
  "p1": { "qty": 100, "version": 1 },
  "p2": { "qty": 50, "version": 1 }
}
```

## 3. Executando o servidor

Para iniciar o backend:
```
node server.js
```

O servidor rodará na porta padrão 3000: http://localhost:3000
