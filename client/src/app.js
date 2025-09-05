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
  fetch("https://techedweek4assignment.onrender.com/add-PawsomeDaycare", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

// TODO: Get database data from the server and render (display) on the page
// - Connect our client with the specific server route that GETs my data
// - In some sort of loop, create new HTML elements to display each piece of data, and append to the DOM

// This function will fetch the reviews and display them on the page
async function getAndDisplayReviews() {
  // Fetching the data from the server
  const response = await fetch(
    "https://techedweek4assignment.onrender.com/add-PawsomeDaycare"
  );
  const reviews = await response.json();

  // Linking with my div within the HTML
  const reviewsContainer = document.getElementById("reviews-container");

  // Loop through each review object and create HTML to display it
  // Create new HTML elements for each review
  reviews.forEach((review) => {
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review-card");

    // This is what will displayed for each review
    reviewDiv.innerHTML = `
      <h3>Review from ${review.fullname}</h3>
      <p>Pet's Name: ${review.petname}</p>
      <p>Review: "${review.review}"</p>
    `;

    // Append the new review card to the reviews container
    reviewsContainer.appendChild(reviewDiv);
  });
}

// Calling the function
getAndDisplayReviews();
