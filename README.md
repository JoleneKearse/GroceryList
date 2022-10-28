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

## My Process

### Setting Up The Project

To follow along ensure you have:

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

### Spinning Up The Servers

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
