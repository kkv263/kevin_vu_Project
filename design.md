## Design
Live Link: https://kevin-vu-project-82ue.vercel.app/

Before reading on, I recommend you have the live link open to compare and have as a visual reference.

## Structure
#### Folder Structure and Relevant files
```
├── src
│   ├── _includes
│   │   ├── fetchlotr.tsx
│   ├── app
│   │   ├── character
│   │   │   ├── [id]
│   │   │   │   ├── page.tsx
│   │   ├── movie
│   │   │   ├── [id]
│   │   │   │   ├── page.tsx
│   │   ├── quote
│   │   │   ├── [id]
│   │   │   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── styles
│   │   ├── *.scss
├── public
│   ├── [images and icons]
├── .env
├── ...
└── README.md
```

- `_includes`: Utility functions that is reused throughout project
- `app`: Uses [app router](https://nextjs.org/docs/app) structure from NextJS 
	- `character / movie / quote`: Each folder contains dynamic routes for each model based on their id.
	- `page / layout`: html/css of the home page and a template for each page.
- `styles`: styling files live in here
- `public`: assets
- `.env`: file with API key

## Code Implementation 
#### Tech Stack:
- NextJS Framework (React)
- Typescript
- SCSS

I used this tech stack since it's the stack I am most comfortable with and utilized within the role.

#### General:
- I found myself using fetching information a lot so I created an `_includes` folder for utility functions I'll reuse. If my method changes, I can change it in one place instead of multiple.
- Same methodlogy above for the styles file, I have a `_vars.scss` file for variables like color I reuse in styling.
- Since we use NextJS's App router methodology, we're able to implement dynamic routing for potentially any number of pages that we have for each character, movie, and quote.
- Since data is static, we fetch data on build time and access the data when we need it (clicking into an item page). This makes the site very performant. 
- In terms of accessibility (a11y) Buttons and Link's are natively accessible, and HTML is semantic and makes sense.
- Normalize.css is used to make styling look consistent across browsers, something I always add to my projects.
- Anything sensitive or private is added to an .env file.
- Suspense React Component to show "Loading" until data is completely loaded.

#### Homepage:
Once you land on the homepage, you're met with information off the bat listing movies, characters, and quotes in that order. Each section is separated and every other item is slightly tinted to show separation of each item.

There is also a nav bar that stays fixed to the top of the browser. Clicking a link brings you straight to the start of the section since there is a lot of information.

Clicking on an item brings you to an "item" page where there is more information about the item.

#### Movie Page:
Lists some information pulled from the API about a movie. There are placeholder image for the movie and a placeholder synopsis. 

**Improvements:** 
- Definitely a lot more assets like the movie cover to make the page a little more livelier. If the API included relational information like characters (there is a quotes endpoint though), we could list out characters as well.

#### Character Page:
Lists some information pulled from the API about a character. There is a placeholder image, and a character biography. 

**Improvements:** 
- Definitely a lot more assets like the movie cover to make the page a little more livelier. If the API included relational information like movies (there is a quotes endpoint though), we could list out characters as well. 
- API isn't fleshed out and some information for some characters are missing. I opted for N/A here but we could also not render that information if it's not available.

#### Quote Page:
Lists some information pulled from the API about a quote. The quote has information linked to a character and a movie, so we're able to link to the character and movie.

**Improvements:** 
- Since the quote doesn't have that much info, we could have the quote be linked to either a movie or a character. (Probably character). This way we could cut down on the number of "pages" we need.

## UI/UX
- We use a simple white / black theme with blue as our `primary` color.
- Use icons on each item to denote and remind user what the item might be.
- Hovering on an item clearly shows the user that it's clickable.
- Use a sticky nav to click into sections make it easy to jump from section to section.
- Each model page shows information about the item. Some items link to other items based on the information available in the API.

**Improvements:** 
- Because there is a lot of characters listed. User does have to scroll a lot down a page to find a certain character. A search field, filter or some sort of pagination for each model would prove to be more helpful for a user.