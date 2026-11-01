import { Component } from "react";
import "./index.css";
class Carditem extends Component {
  state={dark:false}
  onchange=()=>{
    this.setState(prev=>({dark:!prev.dark}))
  }
  render() {
    const {dark}=this.state
    return (
      <div className="container" style={{backgroundColor:dark?"white":"black",color:dark?"black":"white"}}>
        <section className="section1">
          <div>
            <nav className="img-container">
              <ul>
                <li className="align-left">
                
                  <img
                    src="https://res.cloudinary.com/dkvjzljuz/image/upload/v1793460655/GEARVEX_Sport_vxtbgm.png"
                    className="ims-size"
                  />
                </li>
                <li>
                  <input type="search" />
                </li>
                <li>
                    <button onClick={this.onchange}>{dark?"Dark":"Light"}</button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Carditem;
