# Movie Watchlist

This is a simple web app that lets users keep track of movies they want to watch.  
You can add movie titles, view your watchlist, and remove movies after watching them.

---
## What This App Does
- Add a movie name to your watchlist  
- Show all movies you’ve added on the page  
- Remove movies by clicking **Watched**  
- The list updates right away when you add or remove a movie  

---
## How It Works
The app uses **JavaScript functions and an array** to make everything work:
- The array `movies` stores all movie titles.  
- The `addMovie()` function adds a new movie to the array.  
- The `removeMovie()` function removes a movie from the array.  
- The `showMovies()` function displays the movies on the webpage by creating HTML list items.  
- Every time a change happens, `showMovies()` updates the page so you always see the newest version.

---
## How to Use
1. Open **index.html** in your web browser.  
2. Type a movie name in the input box.  
3. Click the **Add Movie** button.  
4. The movie appears in your watchlist.  
5. Click **Watched** next to a movie to remove it from the list.  

---
## Files
- **index.html** → main webpage structure  
- **styles.css** → styling for the page  
- **main.js** → JavaScript that makes the app work  
