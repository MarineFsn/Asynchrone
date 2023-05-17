document.getElementById("dynamicBtn").addEventListener("click", function() {
  fetch("./Assets/your-json-file.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let ul = document.createElement("ul");

      data.members.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name;
        ul.appendChild(li);
      });

      document.body.appendChild(ul);
    })
});
