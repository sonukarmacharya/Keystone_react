// Export our app routes
exports = module.exports = function (app) {
  // Set up the default app route to  http://localhost:3000/index.html
  app.get("/", function (req, res) {
    // Render some simple boilerplate html
    function renderFullPage() {
      // Note the div class name here, we will use that as a hook for our React code
      return `
     <!doctype html>
     <html>
       <head>
         <title>Orbit Medical Entrance Preparation</title>
       </head>
       <body>
         <div class="react-container">
         </div>
         <script src="bundle.js"></script>
       </body>
     </html>
          `;
    }
    // Send the html boilerplate
    res.send(renderFullPage());
  });
};
