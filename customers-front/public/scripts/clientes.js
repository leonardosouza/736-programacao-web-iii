console.log("=== CLIENTES ===");

/*
      Promise - fetch()
         |
      pending
      /     \
rejected   fullfilled
catch()    then()
*/

// Declaração de Função
function getCostumers() {
  console.log("Buscando clientes...");

  const endpoint = `http://localhost:5000/customers`;

  const config = {
    method: "GET" 
  };

  fetch(endpoint, config)
    .then((res) => res.json())
      .then((customers) => {

        const table = customers.map((customer, index) => {
            const { name, email, cpf, birthday, typeAccount, id } = customer; 
            const row = `<tr>
                          <th scope="row">${++index}</th>
                          <td>${name}</td>
                          <td>${email}</td>
                          <td>${cpf}</td>
                          <td>${birthday}</td>
                          <td>${typeAccount}</td>
                          <td><a href="?id=${id}&action=delete">Excluir</a></td>
                        </tr>`;
            return row;
          }).join("");
        
        document.querySelector("tbody").innerHTML = table;
      })
    .catch((err) => {
      console.error("L1", err);
    });
}

function removeCustomer() {
    const obj = {};
    const { id, action } = location.search.substring(1).split("&").map((data) => {
      const field = data.split("=")[0];
      const value = data.split("=")[1];
  
      obj[field] = value;
      return obj;
    })[0];

    if(id && action === "delete") {
      
      const endpoint = `http://localhost:5000/customers/${id}`;
      
      const config = {
        method: "DELETE"
      };

      fetch(endpoint, config)
        .then(() => { location.href = location.origin })
        .catch(() => { console.error("Falha ao excluir!") });

    }
}

// Execução da Função
getCostumers();
removeCustomer();
