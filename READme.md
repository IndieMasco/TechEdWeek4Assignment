# Reflection

This week, we've been learning about clients and servers and, most importantly, how to get them to communicate with each other. For this week's assignment, we'll be making a Guestbook, like the ones in hotels, for users to leave a review for other users to see.

# Requirements

- 🎯 Ensure your HTML form is working and submitting data into the database as expected.
- 🎯 Confirm that your project is functional on multiple screen sizes using either Responsive Design or media queries.
- 🎯 Create a working GET API route in your server.
- 🎯 Create a working POST API route in your client.
- 🎯 Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.

# Stretch Requirements

- 🏹 Provide additional functionality on the form, for example, by adding form validation or other options.
- 🏹 Style the page excellently, for example, by adding extra UX considerations or animations.
- 🏹 Add a delete button to each message and a DELETE route in the server.
- 🏹 Create an option for users to like others’ posts.

# Wireframe

The provided wireframe outlines the desktop and mobile layouts for a customer review page. Its primary purpose is to create a seamless user experience for pet owners who want to share their feedback. Both versions feature a dedicated form for users to submit new reviews and a prominent section to display existing customer reviews. This dual functionality ensures that visitors can easily contribute their own stories while also seeing positive feedback from other clients, building trust and credibility for the business.

The layout is designed to be clean ensuring that pet owners can navigate the page effortlessly on any device. The desktop version provides a spacious layout for the review form and a clear view of multiple customer reviews, while the mobile version is optimized for smaller screens, making it quick and simple for users on the go to share their experiences.

<div align="center">

![Wireframe](./images/wireframe.png)
</div>

# Errors or Bugs I Encountered

- I encountered an error while attempting to run my repo on Render within the Web Service stage. The issue was traced to the line `import { db } from "./dbConnection.js";` in my server.js file. This line was causing an import error because it was not used, which in turn caused the Render deployment to fail.

# What went really well and what could have gone better?

.........

# External sources

### Info

- My own repo - https://github.com/IndieMasco/TechEdSoftwareDeveloper021
- Tech Ed repo - https://github.com/Tech-Educators/software-dev-021
- FigJam - https://www.figma.com/board/JjN2Zgtoynrau06MjWJs6q/SD021?node-id=0-1&p=f&t=V1WCGcrmVKnoxJDr-0
- MDN - https://developer.mozilla.org/en-US/
- W3School - https://www.w3schools.com/

### Render & Supabase

- My own READme - https://github.com/IndieMasco/TechEdSoftwareDeveloper021/blob/main/week4/render-and-supabase/READme.md
