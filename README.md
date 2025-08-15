A one-page static website that displays programs from a provided json file.

It contains the following files, and the idea is to create separate files to keep the code clear and maintainable.

css/style.css -> Layout and Styling<br/>
js/api.js -> for fetch programs<br/>
js/main.js -> Main entry file<br/>
js/render.js -> Rendering functions<br/>
js/utilities.js -> Helper function can be reusable in other projects also<br/>
json/program-data.json -> Fetch programs from json<br/>
index.html -> main html page

# Instructions to Run Locally

1. Clone the repository : git clone https://github.com/reenasharma89/confed-programs.git

2. Open the project folder: cd confed-programs

3. Run with Live Server (recommended): Install the Live Server extension in Visual Studio Code.

4. Right-click index.html : Open with Live Server.

The site will open in your browser at http://127.0.0.1:5500/ (or similar).

# Deployment

Live Site URL: https://reenasharma89.github.io/confed-programs

Deployment Method: GitHub Pages (or Netlify / Vercel if used).

# Approximate Time Spent

Total: 80 minutes approx

JSON handling & validation: 40 min<br/>
UI layout & styling: 20 min<br/>
GitHub setup & deployment: 20 min

# Tradeoffs / Design Choices

1. Used Vanilla JS instead of frameworks for simplicity and fast load time.
2. Added validation to handle missing mission statements with a fallback message.
3. Removed duplicate program IDs to ensure only unique programs are displayed.
4. Used a simple grid layout for clean presentation.






