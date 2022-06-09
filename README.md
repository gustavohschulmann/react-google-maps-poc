# MYP POC Project - Dev React

This project was built by Gustavo for the react case study for MapYourProperty dev frontend position.

## To Install Dependencies

In the project directory, you can run:

### `npm install`

## To Run

In the project directory, you can run:

### `npm start`

## Comments

Firstly I thought about using react-router-dom to make the use of what button is selected or not then display the content on the menu, but since you want redux, and I think makes more sense for this POC, thats what I did.

On the menu collapse button, I was having a little bit of trouble to overlap the map component, so the position could stay absolute, what I did was to create a container to set the position to relative and then place the menu collapse button inside, and then import on the appcontainer, I know this is not the very best solution, since the menu button should be inside the collapsibleMenu component, but time was in a rush so I had to run! :)

I could not find the arrow on phosphoricons for the collapse menu

On the conditional render of the collapsible menu content I used string to specify what menu to display, I know that for best practices, I could use a different approach, but I had just a few experience before with redux, so I didn`t had much time to dive in this time and find a better solution, on real life software I would be more cautious to be sure it's a good way :)

I could not find fastly how to rotate the arrow of the collapse on the legends, so I just kept moving forward and manteined the default icon position there is.

I identified 4 generic components that repeat on the wireframes you passed me, the ones that I called LegendCollapse, TitleBarWithSwitch, CircleTitle and IconTextLink, respectivaly. On some cases I would create more generic components for typography, since on some parts of the menu the fontsizes change, but for this small case I thought it was not really necessary and kept going with styling directly on css alon with other props.

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
