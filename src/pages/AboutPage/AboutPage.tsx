import "./AboutPage.css";

export default function AboutPage(props: any) {
  return (
    <div className="rooted">
      <div className="about">
        <div className="circle">
          <h3>What Donversity <br/> is All About</h3>
          <br/>
          <a href = "#ok"><img className = "imgarrow" src = "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_300,h_300/https://radonauthority.com/wp-content/uploads/2019/09/white-down-arrow-png-2-300x300.png" alt = "arrow" /></a>
        </div>
      </div>
      <div id = "ok" className="ok">
        <div className = "what">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.luta rerum maxime! Dolores quasi a iste nisi tempora?</p>
        </div>
        <div className = "who">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.luta rerum maxime! Dolores quasi a iste nisi tempora?</p>
        </div>
      </div>
      <div className="meetTheTeam">
          <h1>Meet The Team</h1>
        </div>
      <div id = "people" className="people">
        <div className="p p1">
          <h3>Dwayne Johnson</h3>
          <h6>Big Boi Wrestler</h6>
        </div>
        <div className="p p2">
        <h3>Dwayne Johnson</h3>
        <h6>Big Boi Wrestler</h6>
        </div>
        <div className="p p3">
        <h3>Dwayne Johnson</h3>
        <h6>Big Boi Wrestler</h6>
        </div>
        <div className="p p4">
        <h3>Dwayne Johnson</h3>
        <h6>Big Boi Wrestler</h6>
        </div>
        <div className="p p5">
        <h3>Dwayne Johnson</h3>
        <h6>Big Boi Wrestler</h6>
        </div>
        <div className="p p6">
        <h3>Dwayne Johnson</h3>
        <h6>Big Boi Wrestler</h6>
        </div>
        <div className="p p1">
        <h3>Dwayne Johnson</h3>
        <h6>Big Boi Wrestler</h6>
        </div>
        <div className="p p1">
        <h3>Dwayne Johnson</h3>
        <h6>Big Boi Wrestler</h6>
        </div>
        <div className="p p1">
        <h3>Dwayne Johnson</h3>
        <h6>Big Boi Wrestler</h6>
        </div>
      </div>
    </div>
  );
}
