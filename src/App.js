import React from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typist from "react-typist";

const sectionStyle = {
  width: `${window.innerWidth}px`,
  height: `${window.innerHeight}px`,
  display: "flex",
  flex: 1,
  zIndex: 0,
  postion: "relative",
  backgroundImage: `url('https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')`
};

class App extends React.Component {
  render() {
    return (
      <div>
        <section className="back-img" style={sectionStyle}>
          <div>
            <Link style={{ textDecoration: "none" }} to="/main">
              <Button
                style={{
                  postion: "absolute",
                  top: `${window.innerHeight / 2 - 10}px`,
                  left: `${window.innerWidth / 2 - 100}px`,
                  textTransform: "none"
                }}
                variant="contained"
                color="secondary"
              >
                <Typist hideWhenDone="true">
                  <span>
                    WELCOME TO{" "}
                    <span style={{ color: "black", fontSize: 15 }}>
                      HealthEasy
                    </span>{" "}
                  </span>
                  <Typist.Backspace
                    count={22}
                    delay={200}
                    hideWhenDone="true"
                  />
                  <span>CLICK HERE TO START </span>
                </Typist>
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
