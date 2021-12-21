/** @jsx h */
import {
  h,
  jsx,
  serve,
  serveStatic,
} from "https://deno.land/x/sift@0.4.2/mod.ts";

const App = () => (
  <html>
    <head>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <div>
        <h1>Hello world!</h1>
      </div>
    </body>
  </html>
);

const NotFound = () => (
  <html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div>
      <h1>Page not found</h1>
    </div>
  </body>
</html>
);

serve({
  "/": () => jsx(<App />),
  404: () => jsx(<NotFound />, { status: 404 }),
  "/style.css": serveStatic("style.css", { baseUrl: import.meta.url }),
});
