import "./Home.css";
import Nike from "../../Images/Nike.jpg";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <main>
        <div>
          <a href="#">Log In</a>
          <a href="#">Sign Up</a>
        </div>
        <header>
          <h2>My Jobs</h2>
          <h3>Relationship Manager</h3>
        </header>
        <div>
          <h4>Latest Jobs</h4>
          <div>
            {/* cards go here */}
            <div>
              <img src={Nike} alt="Nike Image" />
              <div>
                <span>Nike</span>
                <span>Front-End Web Developer</span>
              </div>
            </div>
          </div>
          <h4>Pas Jobs</h4>
          <div>
            {/* cards go here */}
            <div>
              <img src="" alt="" />
              <div>
                <span>Nike</span>
                <span>Front-End Web Developer</span>
              </div>
            </div>
          </div>
          <div>Load more</div>
        </div>
      </main>
    );
  }
}

export default Home;
