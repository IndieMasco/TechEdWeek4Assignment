console.log("HELLO!");

//select the form from the DOM
const pawsomeForm = document.getElementById("PawsomeDaycare");

//add a submit event to the form
pawsomeForm.addEventListener("submit", handleSubmit);

//handle the submit event
function handleSubmit(event) {
  //prevent the data from going to the url
  event.preventDefault();
  //create a new template object using my form inputs
  const formData = new FormData(pawsomeForm); //this is the box to store our input data
  //fill the input data in to the template object
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  //send the data to the server
  //- we have a POST route called add-staff in the server, ready to receive our formValues
  //- connect client with specific server route --> fetch
  //- add the formValues to the fetch request --> body
  fetch("http://localhost:8080/add-PawsomeDaycare", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}
