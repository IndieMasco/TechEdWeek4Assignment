Thank you for your submission, Sam!

What a brilliant full-stack project!! Setting up both a client and a server at this stage is no small feat and you’ve done superbly! The great communication between the different layers of this project is really impressive and sets a strong foundation for future weeks!

### HTML:

Your HTML is clear, semantic and well structured. Labels are correctly paired with inputs and the form area is easy to navigate. This is an excellent foundation for styling, accessibility and JS interactivity, and makes future changes nice and straightforward!

Some things to think about:

- Labels not bound to inputs -> `<label for="fullname">` targets an id="fullname", but inputs only have name. Add matching id attributes (e.g., id="fullname", id="petname", id="email", id="review"), and keep 'for' values in sync.

- Email validation -> type="text" on the email field misses the built-in validation! Use type="email".

- Star rating values -> radio inputs have no intrinsic values so the submitted value will be "on". Think about how you might give each radio a numeric value (e.g., 1–5) and maybe also give it 'required' if you want it mandatory.

- Unused rating field -> The server only stores fullname, petname, email, review; the rating isn’t persisted. Either remove the rating UI or extend the API/DB to store it.

### CSS:

Lovely styling with strong visual hierarchy and responsive behaviour! NOICE!
The layout scales gracefully on mobile, your focus states are visible, and colour contrast reads well! It feels polished and user-friendly, with spacing and typography supporting the content really nicely!

Some things to think about:

- Contrast & focus -> Your buttons use some nice subtle hover effects but no explicit focus styles. Try adding a visible :focus outline for keyboard navigation users.

### Javascript:

Your end-to-end flow is working really well!! Form submission, POST to server, DB persistence, GET to display, and clean DOM updates! Phenomenal!! Your async/await usage reads clearly to me and the overall structure shows your strong understanding! Your server is set up nicely and is showing me that you've already got to grips with the mono-repo pattern very well!

Some things to think about:

- Route casing mismatch -> POST goes to /add-PawsomeDaycare (capital P), server route is /add-pawsomeDaycare (lowercase p). Express isn’t case-sensitive by default, but it’s safer to match the exact casing in both places for the work we'll do in the future.

- Character counter calculation -> You display ${currentLength} / ${maxLength} Characters remaining. That’s “used”, not “remaining”. If you mean remaining, use ${maxLength - currentLength} in the text.

- Full page reload after submit: On success you call window.location.reload(). For a smoother UX, you could append the new review to #reviews-container and reset the form without having to reload the page.

- No rating field: If you also wanted to store the rating to the DB, update the POST handler to accept it and extend the INSERT to include it (plus a DB column).

### Reflection:

Thank you for another thoughtful reflection, the quality of your reflection continues to blow me away each and every week! Your wireframing is particularly excellent!!!
You’ve identified your successes and challenges clearly and tied them back to this week’s goals, exactly what enables targeted feedback!Keep noting specific errors and fixes, as that speeds up future debugging too!

From your reflection:

Favicon issue ->
My top tip here is to pop the favicon asset into the public folder. This means that you don't have to include a full path to the asset in src, you can just specify src = "/favicon.ico". The slash does all the work as long as you use the public folder!

Git problems ->
A little tweak to your workflow will make this clearer. Read around the following topics (we'll cover more git content in class too):
Git fetch,
Git pull --rebase,
Git stash,
Git pop.

### Deployment:

Well done deploying both the client and server too!! Remember as we go forward, to always update client-side URLs from localhost to your Render server URL and set environment variables in both services. Also, remember that you can check the Render logs for 404/500 errors, as they usually point straight to the line that needs attention!

This is an outstanding piece of full-stack work and you should be very proud of yourself! We’re definitely proud of you!! You’ve implemented all of the core goals and pushed into stretch features like your clever rating system and how your review container fits so much functionality into such an efficient space, all while keeping the app usable and tidy.
I can see that, even though all of the implementation for some of the stretch goals wasn't completed you have thoroughly considered how you might achieve them in the future.
Super powers, big fan!!!!

I’m giving you an 8/8 overall for this assignment:

**Web Fundamentals: 4, Programming Logic: 4** — because you’ve demonstrated true excellence in structure, responsiveness, deployment, clean routing and database integration. Truly impressive work this week, keep this momentum going!!! Well done!!!

~Joe
