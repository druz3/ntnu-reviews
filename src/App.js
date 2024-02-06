import './App.css';

function App() {
  return (
  <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>NTNU-reviews</title>
          <link rel="stylesheet" href="style.css" />
      </head>
      <body>
          <header>
              <nav>
                  <div id="logo">NTNU Reviews</div>

                  <div class="box">Info</div>
              </nav>
          </header>

          <main>
              <div id="search-container">
                  <input
                      class="box"
                      id="search"
                      type="text"
                      placeholder="Search Subject: "
                  />
              </div>
          </main>

          <footer></footer>
          <script src="script.js"></script>
      </body>
  </html>
  );
}

export default App;
