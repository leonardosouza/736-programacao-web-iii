console.log("=== CADASTRO ===");

const btnCadastrar = document.querySelector("#btnCadastrar");

btnCadastrar.onclick = () => {
  
  const fields = document.querySelectorAll("input");
  const data = {};

  fields.forEach((field) => {
    // console.log(field, field.id, field.value);
    data[field.id] = field.value;
  });

  console.log(data);

  const endpoint = "http://localhost:5000/customers";

  const config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({
      "content-type": "application/json"
    })
  };

  fetch(endpoint, config)
    .then((res) => {
        if(res.statusText === "Created") {
          location.href = "/";
        }
    })
    .catch((err) => console.warn(err));

}

