body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center; /* Center the navigation */
}

nav li {
  display: inline;
  margin: 0 15px;
}

/* Add more styles for sections, images, buttons, etc. */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px;
  padding: 20px;
}
img{
  max-width: 100%;
  height: auto;
}
/* Responsive design using media queries */
@media (max-width: 768px) {
  nav li {
      display: block; /* Stack navigation on smaller screens */
      margin: 10px 0;
  }
}