# Google Maps POC Project - React Case Study

## I've deployed this site, you can access on:

**https://peppy-puppy-1885a5.netlify.app/**

Note\*: If the API Key of google maps is not set with a real value, the maps will not work and seem a little broken.

## To Install Dependencies

In the project directory, you can run:

### `npm install`

## To Run

In the project directory, you can run:

### `npm start`

## Key Feature and Components

The project is composed basically of a sidebar, to navigate beetween contents in the collapsible menu, and an app container, where the map is. The collapsible menu is built inside the map, since it's necessary for the search to work with an customized input, such as the one required from you.

I separated the components as much as I could to make the most generic and reusable possible, most of the time of the development I was in a rush so on some more simple components, such as typography and icons, I simply repeated a few css code to prioritize the development speed and end result.

The project is divided in 4 major UI/Functionallities folders:

-   **components->layout:** Thats where all the layout of the application is set, all the necessary grid-area division, the mount of the main components, such as the SideBar, Google Maps, CollapsibleMenu and MenuCollapsibleButton.

-   **components->ui:** Thats where the generic components, that we use on all over the interface are built. I made them the most generic possible, as this is the purpouse of using React. Also on a prod solution I would go further, perhaps using Atomic Design to scale from microcomponents to pages, and would create, overtime, a library to have the most basic and reusable components of the solution, with the proper design.

-   **menuPages:** Thats where all the the pages and content of the CollapsibleMenu is built, they change as the SideBar dispatch a state change using redux. The "menuPages" folder is where structurally the contents for each page are mounted.

-   **store:** Thats where all the redux structure is made, so the components SideBar can comunicate with the CollapsibleMenu to specify which menu is active.

**The project has the following outside libraries:**

-   Styled-Components
-   Redux and React-Redux
-   React Google Maps Api
-   AntDesign
-   Phosphoricons

### - Contact

You can contact me via email:
gustavoschulmann@outlook.com
