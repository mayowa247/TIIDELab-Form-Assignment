const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("click", (e) => {
  e.preventDefault();

  const firstname = document.getElementById("f-name").value;
  const middlename = document.getElementById("m-name").value;
  const lastname = document.getElementById("l-name").value;
  const dateofbirth = document.getElementById("dob").value;
  const studentId = document.getElementById("student-id").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const zipCode = document.getElementById("zip-code").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;

  const data = {
    firstname,
    middlename,
    lastname,
    dateofbirth,
    studentId,
    address,
    city,
    state,
    country,
    zipCode,
    email,
    comment,
  };

  localStorage.setItem("student-data", JSON.stringify(data));
  window.location.href = "/result.html";
});
