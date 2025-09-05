// console.log("HELLO!");

// Select the form from the DOM
const pawsomeForm = document.getElementById("PawsomeDaycare");

// Add a submit event to the form
pawsomeForm.addEventListener("submit", handleSubmit);

// Handle the submit event
function handleSubmit(event) {
  // Prevent the data from going to the url
  event.preventDefault();
  // Create a new template object using my form inputs
  const formData = new FormData(pawsomeForm); // This is the box to store our input data
  // Fill the input data in to the template object
  const formValues = Object.fromEntries(formData);
  console.log(formValues);

  // Send the data to the server
  fetch("http://localhost:8080/add-PawsomeDaycare", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

//TODO: Get database data from the server and render (display) on the page
// - connect our client with the specific server route that GETs my data
// - in some sort of loop, create new HTML elements to display each piece of data, and append to the DOM
