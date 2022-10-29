# Grocery List App

<p>
   <img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" title="HTML5" alt="HTML5">
   <img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white" title="CSS3" alt="CSS3">
   <img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" title="React" alt="React">
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" title="JavaScript" alt="JavaScript">
   <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white" title="Vite" alt="Vite">
   <img src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style=for-the-badge&logo=Yarn&logoColor=white" title="Yarn" alt="Yarn">
</p>

This is a _test_ app for me; I'm coding from memory with minimal checks of my notes. I notice that I didn't put the notes in one central place, so I'll be documenting the process.

## MVP

## The Process

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

   And the message that the scaffolding is complete.

   ![complete message](screenshots/setup5.png)

7. Change directories. _I got my first learning moment here as I had used two words, so I had to enclose it in commas._

   ![correct way to cd with whitespace](screenshots/setup6.png)

8. Install dependencies with:

```
yarn
```

Super-fast success is proven with the `node_modules` folder being added to our file structure and this command line message:

![](screenshots/setup7.png)

### Spin Up the Servers

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

Type the network address, then you can check out your changes on desktop and/or mobile!

### Rid Ourselves of the Boilerplate

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

### On to the Code!

1. In the `src` folder, add a new file called capital `App.jsx`.

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

6. Import the `Box` component from Dracula UI and style it up with colour, margin, padding, rounded and width properties special to the Design System.

![import box from dracula-ui, add it to the JSX with style properties](screenshots/App2.png)

7. Add a `components` folder with `Header.jsx`.

![](screenshots/Header1.png)
