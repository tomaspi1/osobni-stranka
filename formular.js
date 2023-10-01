(function () {
    emailjs.init("8j8kiOQnJ994Rljxb");
  })();
  
  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const serviceID = "service_ciehsef";
    const templateID = "template_106433v";
    const form = this;
  
    emailjs.sendForm(serviceID, templateID, form).then(
      (response) => {
        console.log("Odesláno", response.status, response.text);
        clearFormFields(form);
        alert("Odesláno");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
      }
    );
  });
  
  function clearFormFields(form) {
    const inputs = form.getElementsByTagName("input");
    const textarea = form.getElementsByTagName("textarea")[0];
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    textarea.value = "";
  }