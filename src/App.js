import background from "./images/header.jpg"
function App() {
  return (
    <div className="App">
<header>
<div style={{backgroundImage: `url(${background})`}}>
  
</div>


<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

</header>
    </div>
  );
}

export default App;
