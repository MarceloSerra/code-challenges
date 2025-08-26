# Como rodar o projeto

## 1. Pré-requisitos
- Node.js (versão 16+ recomendada)  
- NPM (vem junto com Node.js)  
- Terminal ou CMD para rodar comandos  
- (Opcional) Postman ou curl para testar os endpoints  

---

## 2. Instalação

### 1. Clone o projeto:
```
git clone https://github.com/MarceloSerra/code-challenges.git
cd meli/async-work
```

### 2. Instale as dependências:
```
npm install
```

### 3. Verifique se a pasta data/ contém os arquivos JSON simulando o estoque das lojas:

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


## 4. Endpoints e Testes
### 4.1. Obter estoque de uma loja
```
GET http://localhost:3000/inventory/store1
```

### 4.2. Atualizar estoque (venda ou reposição)
```
POST http://localhost:3000/inventory/update
Content-Type: application/json
Body:
{
  "storeId": "store1",
  "productId": "p1",
  "qtyChange": -1,
  "version": 1
}
```
- Retorna status: success se a atualização for aplicada.
- Retorna status: fail se houver conflito de concorrência (lock).


### 4.3. Obter estoque central consolidado
```
GET http://localhost:3000/inventory/central
```

## 5. Observações

Locks são aplicados no nível de produto para evitar overselling.

O estoque central é atualizado de forma assíncrona via fila simulada.

Para reiniciar o servidor, apenas pare (Ctrl+C) e execute node server.js novamente.

Adicionar novas lojas: criar um arquivo JSON em data/ e usar o storeId correspondente nos endpoints.
