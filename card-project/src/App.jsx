import "bulma/css/bulma.css";
import "./App.css";
import { Course } from "./Course";
import imgAngular from "./images/angular.jpg";
import imgBootstrap from "./images/bootstrap5.png";
import imgCsharp from "./images/ccsharp.png";
import imgKompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Course
                title="Angular"
                desc="
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Voluptate numquam, nesciunt dicta odio exercitationem earum nostrum saepe illo quasi perferendis placeat tempora vitae at. 
          Reprehenderit doloribus quaerat unde optio quam."
                img={imgAngular}
              />
            </div>
            <div className="column">
              {" "}
              <Course
                title="Bootstrap 5"
                desc="
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Voluptate numquam, nesciunt dicta odio exercitationem earum nostrum saepe illo quasi perferendis placeat tempora vitae at. 
          Reprehenderit doloribus quaerat unde optio quam."
                img={imgBootstrap}
              />
            </div>
            <div className="column">
              <Course
                title="Komple Web"
                desc="
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Voluptate numquam, nesciunt dicta odio exercitationem earum nostrum saepe illo quasi perferendis placeat tempora vitae at. 
          Reprehenderit doloribus quaerat unde optio quam."
                img={imgKompleWeb}
              />
            </div>
            <div className="column">
              <Course
                title="Frontend"
                desc="
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Voluptate numquam, nesciunt dicta odio exercitationem earum nostrum saepe illo quasi perferendis placeat tempora vitae at. 
          Reprehenderit doloribus quaerat unde optio quam."
                img={imgCsharp}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
