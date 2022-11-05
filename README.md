# Grocery List App

<p>
   <img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" title="HTML5" alt="HTML5">
   <img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white" title="CSS3" alt="CSS3">
   <img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" title="React" alt="React">
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" title="JavaScript" alt="JavaScript">
   <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white" title="Vite" alt="Vite">
   <img src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style=for-the-badge&logo=Yarn&logoColor=white" title="Yarn" alt="Yarn">
</p>

This is a _test_ app for me; I'm coding from memory with minimal checks of my notes. My aim is to gain a greater understanding of state and practice using memory. I notice that I didn't put the notes in one central place, so I'll be documenting the process.

## MVP

This is **Grocery List App** can:

- Add new items to the list either by pressing `Enter` or clicking the plus button
- Display current items with the ability to check them off and delete
- A count of remaining items in the list
- Search ability

## Table of Contents

- [The Process](https://github.com/JoleneKearse/GroceryList#the-process)
- [Add the Dependencies](https://github.com/JoleneKearse/GroceryList#add-the-dependencies)
  - [Set Up the Project](https://github.com/JoleneKearse/GroceryList#set-up-the-project)
  - [Spin Up the Servers](https://github.com/JoleneKearse/GroceryList#spin-up-the-servers)
  - [Use Dracula Ui](https://github.com/JoleneKearse/GroceryList#use-dracula-ui)
- [On to the Code!](https://github.com/JoleneKearse/GroceryList#on-to-the-code)
  - [Add a Component: `Header`](https://github.com/JoleneKearse/GroceryList#add-a-component-header)
  - [ItemList](https://github.com/JoleneKearse/GroceryList#itemlist)
    - [Set Up a Default List](https://github.com/JoleneKearse/GroceryList#set-up-a-default-list)
    - [Style with Dracula UI and CSS](https://github.com/JoleneKearse/GroceryList#style-with-dracula-ui-or-css)
    - [Use Font Awesome Icons](https://github.com/JoleneKearse/GroceryList#use-font-awesome-icons)
    - [HandleChecks](https://github.com/JoleneKearse/GroceryList#handle-checks)
  - [`AddItem` Component](https://github.com/JoleneKearse/GroceryList#additem-component)
    - [Set Up State](https://github.com/JoleneKearse/GroceryList#set-the-state)

## The Process

[top](https://github.com/JoleneKearse/GroceryList#table-of-contents)

I'm working in **VS Code** on a **Windows 11** computer, so all shortcuts I use are for those. I'm also using the **ES7+ React/Redux/React-Native snippets** extension.

## Add the Dependencies

### Set Up the Project

To follow along, ensure you have:

- the **latest [Node version](https://nodejs.org/en/) installed**. You can check in the **terminal** with

```
node -v
```

- dido for **[Yarn](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-the-yarn-package-manager-for-node-js)**

<hr>

1. Create a new React project from the command line using the Vite tool by typing:

```
yarn create vite
```

2. Enter your project name at the prompt after the quick installation.

   ![Installation with project name prompt](screenshots/setup1.png)

3. Press `Enter` to have the package automatically named.
4. Use the arrow keys to choose a framework.

   ![React project selected](screenshots/setup2.png)

5. Pick JavaScript or TypeScript (_I went with JavaScript_)

   ![JavaScript chosen](screenshots/setup3.png)

6. Check out the cool file structure!

   ![file structure](screenshots/setup4.png)

   > I later moved README and screenshots folder up one level.

   And the message that the scaffolding is complete.

   ![complete message](screenshots/setup5.png)

7. Change directories. _I got my first learning moment here as I had used two words, so I had to enclose it in commas._

   ![correct way to cd with whitespace](screenshots/setup6.png)

8. Install dependencies with:

```
yarn
```

Super-fast success is proven with the `node_modules` folder being added to our file structure and this command line message:

![node modules in the file structure and cli messages](screenshots/setup7.png)

### Spin Up the Servers

[top](https://github.com/JoleneKearse/GroceryList#table-of-contents)

1. Start the development server on your computer with

```
yarn run dev
```

`Ctrl` + click the blue link to verify everything's working.

![Hyperlink](screenshots/server1.png)

2. Check it out on your mobile - _Yes, you heard that right!_ Either stop the current server with `Ctrl` + `C`, or just open up a new terminal.

![opening a new terminal](screenshots/server2.gif)

`cd` back to your directory, and type:

```
yarn dev run --host
```

You will get

![server options](screenshots/server3.png)

Type the network address (_the one with all the numbers_), then you can check out your changes on desktop and/or mobile!

### Rid Ourselves of the Boilerplate

[top](https://github.com/JoleneKearse/GroceryList#table-of-contents)

Now it's time to get rid of the defaults!

1. It's all coming from our `/src` folder, as you can see by **l**i**s**ting all the files:

```
ls src/
```

2. Remove all the files **except `main.jsx`** with

```
rm src/App.css
```

3. Now we can actually work within our files! In `main.jsx`, remove the reference to `index.css` on _line 4_.

![delete the css import on line 4](screenshots/boilerplate1.png)

### Use Dracula UI

[top](https://github.com/JoleneKearse/GroceryList#table-of-contents)

![Dracula UI possibilities](screenshots/drac1.png)

I had come across [Dracula UI](https://ui.draculatheme.com/) in my reading and really wanted to try it out! It describes itself as a:

> Dark-first collection of UI patterns and components.

First we need to install it to our project.

1. In your terminal, type `yarn add dracula-ui`.

2. I like to verify things, so you can check `package.json` to see it listed as a dependency on _line 11_.

![dracula_ui version 1.0.3 showing as a dependency](screenshots/drac7.png)

Let's take advantage of the **in-editor docs** and **autocomplete** function in VS Code, by installing an extension to bring in **Design System Packages**.

1. `Ctrl` + `Shift` + `X` to open **Extensions** and search for **Adobe XD extension**.

![Adobe XD extension showing 45, 909 downloads](screenshots/drac2.png)

2. Click on the extension icon in the **sidebar**, probably in the **bottom right corner**.

![XD icon in status bar](screenshots/drac3.png)

3. Click on **Load package**.

![extension start screen to load DSPs](screenshots/drac4.png)

4. Choose `node_modules/dracula-ui/dsp` by navigating through all the files.

![Windows load window showing Grocery List to node_modules to dracula_ui to dsp](screenshots/drac5.png)

5. Choose the Code Snippets for CSS and React, click Next and you can see the docs!

![select CSS and React code snippets](screenshots/drac6.png)

## On to the Code!

[top](https://github.com/JoleneKearse/GroceryList#table-of-contents)

1. In the `src` folder, add a new file called (_capital!_) `App.jsx`.

2. Create a exported function component called `App`.

3. Add the import statements at the top.

4. **Check it's working** by adding a `main` with `h1`.

![initial App code](screenshots/App1.png)

5. Bring in the **Dracula UI** components and styling! _I'm not sure if I was doing this optimally, but..._ I set up my **reset** in `index.css` with styles on the `body`. I centered my list with **CSS Grid** and set the background colour.

```css
body {
  display: grid;
  place-items: center;
  height: 100%;
  background-color: black;
}
```

6. Import the `Box` component from Dracula UI, add it to our App JSX and style it up with colour, margin, padding, rounded and width properties special to the Design System.

![import box from dracula-ui, add it to the JSX with style properties](screenshots/App2.png)

### Add a Component: `Header`

[top](https://github.com/JoleneKearse/GroceryList#table-of-contents)

1. Add a `components` folder with `Header.jsx`.

2. Import **Heading** from Dracula UI on _line 2_.

3. Add the inline styles.

![import Heading and add the styling as ](screenshots/Header1.png)

4. Import Header in `App.jsx`, then add component.

![import statement and component in the JSX](screenshots/App3.png)

_The result so far..._

![Grocery List title](screenshots/resu1.png)

### ItemList

[top](https://github.com/JoleneKearse/GroceryList#table-of-contents)

#### Set Up A Default List

[top](https://github.com/JoleneKearse/GroceryList#table-of-contents)

> I got ahead of myself here and jumped straight to **`AddItem`**, but it does make more sense to start with a static list.

1. Create an `ItemList` component. Import it in `App.jsx` and add the component in the returned JSX:

```jsx
return (
  <Box>
    <Header />
    <ItemList />
  </Box>
);
```

2. Set up a default list of grocery items to get the list started. This goes within the `ItemList` function and before returning the JSX. Include the following import statement:

```js
import { useState } from "react";
```

Set the list as a `const` with **destructuring** of `items` and `setItems` equal to `useState()` with an **array of objects**.

![destructured items, setItems for array of objects in useState with id, checked and item properties](screenshots/App6.png)

> Add to `ItemList.jsx`, even though it may be moved later on to `App.jsx`.

<hr>

> #### Use Font Awesome Icons
>
> [top](https://github.com/JoleneKearse/GroceryList#table-of-contents)
>
> 1. Use `react-icons` from [NPMJS](https://www.npmjs.com/) to import only the icons used in this project. In your terminal, type
>    `yarn add react-icons --save-prod`
>    Then verify it in `package.json`.

> ![react-icons version 4.6.0 in our dependencies](screenshots/json1.png)

> 2. _Optional:_ Go to [Font Awesome](https://fontawesome.com/search) to search for `plus`. Make sure to click the _Free_ tab.
> 3. Add the import statement to the top of the component where it will be used. Like `import { Fa< name of icon >} from "react-icons/fa";`
> 4. Add to the JSX just like a component - `<FaCheck>`.

<hr>

3. Include two more import statements for our Dracula UI components and Font Awesome icon:

```js
import { List, Checkbox } from "dracula-ui";
import { FaTrashAlt } from "react-icons/fa";
```

4. Have the `ItemList` function return a `<List>` component from **Dracula UI**.

5. Get ready to have lots of fun creating the `<li>`s! Use `.map()` on `items` created on _line 8_. This will go over each `item`, creating the JSX.

```jsx
{items.map((item) => (...))}
```

6. Create an `<li>` with a couple important attributes to enclose each line.

```jsx
<li className="item" key={item.id}>
  ...
</li>
```

7. Use the Dracula UI checkbox component passing all the properties _(pictured below)_.

8. Use the `label` as the actual item to display. _Don't worry, I'll go over all that's going on there later!_

9. Add the **Font Awesome** trash can icon on _line 55_.

![List component with map function creating each list item including a checkbox, label, and trash icon](screenshots/ItemList1.png)

#### Style with Dracula UI or CSS

[top](https://github.com/JoleneKearse/GroceryList#table-of-contents)

1. Style it! Much of this could be done through Dracula UI including: `py`, `pb`, `size` on `List` and `li`, and `color` on `Checkbox`.

2. Some were easier to control with regular CSS, like `font-size` and **hover/focus effects**. The **icons** can be targetted by the `svg` selector.

3. The most complex thing was getting the item text to change colour when the li was hovered on. I had to grab the class name using **DevTools**.

```css
li.item:hover .drac-text,
li.item:focus .drac-text {
  color: #ff80bf;
}
```

#### Handle Checks

[top](https://github.com/JoleneKearse/GroceryList#table-of-contents)

1. Set up the `handleCheck` function to take in the `id`. Create a `listItems` variable to **map over** each item: checking if it is the clicked **id**, if so create a **new array so we don't directly change the state** and then flip that item's checked value. After **set the items to the updated state**.

![handleCheck function mapping over items in listItems to check id, create a new array, then change checked value](screenshots/ItemList2.png)

2. Set up **conditional styling** to add a line through the item. To the `label` tag, add a `style` attribution with curly brackets, `{ }` so we can use a **ternary operator** to only apply the rule when the item has been checked.

![style attribute checking if item checked and applying a line through text decoration or nothing](screenshots/ItemList3.png)

3. Improve UX by adding a **double click event** on the item to trigger `handleCheck` like on _line 51_ above.

4. _This is an intermediate step, to be changed later._ To have the app store the user changes, add this line to the function:

```jsx
localStorage.setItem("shoppinglist", JSON.stringify(listItems));
```

This saves the state to **local storage**.

#### Handle Delete

1. Add an `onClick` event to the **trash can icon** and use an **anonymous function** so we can pass in the **item's id**.

![on click event added to delete button calling the handleDelete function with id passed in](screenshots/ItemList4.png)

2. Write the function which will create an array of only the items not matching that `id`, set the state, and save to `localStorage`.

![handle delete function creating a new list items variable filtering out the clicked item, setting state and saving to local storage](screenshots/ItemList5.png)

### Add Empty List Message

1. Add `<>` and `</>` tags as the first item, then tab everything over. This is needed because we will use a ternary operator on `<List>`.

2. Next indentation over begin the ternary with `{items.length ? (`, then **cut** the `)}` - to be added afterwards. In essence, this is saying if there are items, then proceed with all the existing code.

3. Tab all the code over.

4. After the closing `</List>` tag and **one indentation in**, continue the ternary. Add a `<p>` tag with a style expression and our message.

5. Paste the `)}` to close out the ternary operator.

6. One indent **in** add the closing fragment, `</>`.

7. Close the **return statement** and **function**.

![end of the ternary operation, JSX, and function](screenshots/ItemList6.png)

> **Note**: I had quite the difficult time finding exactely which bracket (rounded, curly) was wrong. I've included a [copy of the code] up to this state to compare. I suggest using [DiffChecker](https://www.diffchecker.com/#) to compare. It's so easy to make a single, critical mistake here! 😭

### `AddItem` Component

[top](https://github.com/JoleneKearse/GroceryList#table-of-contents)

1. Create the component with imports of Dracula UI and Input component. Add `Input` tag to JSX with the style attributes.

![AddItem component with import of Dracula UI and Input component. Input with attributes included in the JSX](screenshots/AddItem1.png)

2. Add the import line and component to `App.jsx`.

![import and component added to App.jsx](screenshots/App4.png)

5. In `AddItem.jsx` and add `import { FaPlus } from 'react-icons/fa'` to the top of the file.

6. Because we have more than one item in the JSX, add the `<div className="inputBlock"></div>` tags to enclose `<Input>` and the button.

7. Add `FaPlus` with attributes to add it's `role` and `tabIndex`.

![import icon as FaPlus, add containing tags, add icon as component](screenshots/AddItem2.png)

8. Over in `index.css`, put `flex` on our `inputBlock` class.

![centering input and button with flexbox](screenshots/css1.png)

#### Set the State

[top](https://github.com/JoleneKearse/GroceryList#table-of-contents)

1. In `App.jsx`, import `useState` on _line 6_.

2. Handle the **state** to immediately _react_ to changes our user makes in the input. Define the what's used in state, `newItem` and `setNewItem`, using the **array destructuring** from `useState`.

![import useState from react and destructuring useState](screenshots/App5.png)

> I just noticed that I had `Header` as my export function in `AddItem.jsx`, so interesting that I was able to use it in `App.jsx` as `<AddItem />` - the correct name!

> ![change function name to AddItem](screenshots/err1.png)

3. Pass the props to `AddItem.jsx`, remembering to place them in **curly brackets**.

![pass newItem and setNewItem into the function](screenshots/AddItem3.png)

```

```
