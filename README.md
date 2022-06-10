# MYP POC Project - React Case Study

This project was built by Gustavo for the MapYourProperty case study, for the frontend dev position.

## Remote Access | Deployed

I've deployed the project on a free webhost, you can checkout on the link below :)

**https://stupendous-pony-0997eb.netlify.app/**

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

### - Comments

Firstly I thought about using the context API to make the use of what button is selected or not then display the content on the menu, but since you want redux, and I think makes more sense for this POC, thats what I did.

I've never worked with Google Maps API before. So on the first time I planned and started developing the solution I didn't know that the CollapsibleMenu was supposed to be inside the GoogleMaps components for the Search to work. So I developed all the css structure and components outside the GoogleMaps components, then when I started working on the search, I faced maaaaany troubles. So in the last minute, after researching a lot I discovered it was supposed to be inside the Maps, then I started refactoring all the structural css, the code was burning on fire everywhere and not working, but then I fixed on time and now everything is fine and organized :)

### - Small Details

On the conditional render of the collapsible menu content I used string to specify what menu to display, I had just a few experience before with redux, so I didn`t had much time to dive in this time and find a better solution (if there is any better one), on real life software I would be more cautious to be sure it's a good way :)

I could not find the arrow on phosphoricons for the collapse menu button.

### - Contact

You can contact me via email:
gustavoschulmann@outlook.com
