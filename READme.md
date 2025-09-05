# Reflection

This week, we've been learning about clients and servers and, most importantly, how to get them to communicate with each other. For this week's assignment, we'll be making a Guestbook, like the ones in hotels, for users to leave a review for other users to see. With this week's assignment, I thought I was going to be a little behind as I missed half a day and did most of the lessons from home this week, but I seem to be doing better than I thought I would be.

It's definitely a different experience building a full-stack app compared to what we have been doing in previous assignments, as there is so much more you've got to take into consideration. One thing that got me was working with multiple JavaScript files. With this assignment, it feels like we are taking everything we did in weeks 1, 2, and 3's assignments and putting it into one, which is pretty cool to see everything we have learned go together.

If there is anything you think I could do better or improve on, I'd be happy to listen and learn from what you have to say.

# Requirements

- ✅ 🎯 Ensure your HTML form is working and submitting data into the database as expected.
- 🎯 Confirm that your project is functional on multiple screen sizes using either Responsive Design or media queries.
- ✅ 🎯 Create a working GET API route in your server.
- ✅ 🎯 Create a working POST API route in your client.
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

- I was struggling to get everything talking with each other. It took me about 15 minutes to realize we are working with multiple JavaScript files for this assignment, and I hadn't done anything with my app.js on the client side.
- I've got everything talking to each other, and my site is displaying the reviews. I just can't seem to figure out how to make the page refresh when I click Submit, so the form boxes clear and the new review displays. It's time to go down some rabbit holes to see if I can get it working. 🤞

# External sources

### Info

- My own repo - https://github.com/IndieMasco/TechEdSoftwareDeveloper021
- Tech Ed repo - https://github.com/Tech-Educators/software-dev-021
- FigJam - https://www.figma.com/board/JjN2Zgtoynrau06MjWJs6q/SD021?node-id=0-1&p=f&t=V1WCGcrmVKnoxJDr-0
- MDN - https://developer.mozilla.org/en-US/
- W3School - https://www.w3schools.com/

### Render & Supabase

- My own READme - https://github.com/IndieMasco/TechEdSoftwareDeveloper021/blob/main/week4/render-and-supabase/READme.md
