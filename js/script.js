document.addEventListener("DOMContentLoaded", ()=> {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const error = !/^[a-z0-9]{1,2}(?:[a-z0-9.!#$%&'*+\\/=?^_`{|}~-]+[a-z0-9_])?@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*(?:\.[a-z](?:[a-z]{1,61})+){1}$/i.test(
      email
    )

    alert(!error ? "Welcome to the team!" : "Email is invalid");

    if(!error) form.reset();
  });

});