import { Component } from "react";
import Cards from "../AssignItem";
import "./index.css";

const bikeProducts = [
  {
    id: "bike-001",
    headText: "BOBO BM14 Pro Bike Phone Mount",
    para: "Quick-release handlebar mobile mount featuring an integrated vibration damper for secure navigation on uneven roads.",
    price: "$1999",
    url: "https://res.cloudinary.com/dkvjzljuz/image/upload/v1793615790/mount_lrgad1.jpg",
  },
  {
    id: "bike-002",
    headText: "MRF Nylogrip Ezeeride Rear Tyre",
    para: "High-durability commuter rear motorcycle tyre designed for dependable grip and stable handling across all road conditions.",
    price: "$1850",
    url: "https://res.cloudinary.com/dkvjzljuz/image/upload/v1793615790/tyre_j20i6j.jpg",
  },
  {
    id: "bike-003",
    headText: "SMX-1 Genuine Leather Gloves",
    para: "Reinforced leather street riding gloves featuring knuckle impact shields and breathable paneling for everyday commutes.",
    price: "$2849",
    url: "https://res.cloudinary.com/dkvjzljuz/image/upload/v1793615790/gloves_j1yc3v.jpg",
  },
  {
    id: "bike-004",
    headText: "Tanax Napoleon 3.0 Bar Mirrors",
    para: "Universal anti-glare handlebar mirrors designed to reduce vibrations and provide a clear, wide rear view.",
    price: "$1849",
    url: "https://res.cloudinary.com/dkvjzljuz/image/upload/v1793615790/mirror_v1afdc.jpg",
  },
  {
    id: "bike-005",
    headText: "Korda Evo Chief Gloss Helmet",
    para: "Aerodynamic full-face helmet built with an impact-resistant shell and optimized ventilation channels for comfort.",
    price: "$6999",
    url: "https://res.cloudinary.com/dkvjzljuz/image/upload/v1793615790/fullface_hemet_ceyq4v.jpg",
  },
];

class Carditem extends Component {
  state = { dark: false, searchs: ""};

  onchange = () => {
    this.setState((prev) => ({ dark: !prev.dark }));
  };

  search = (event) => {
    this.setState({ searchs: event.target.value });
  };

  render() {
    const { dark, searchs } = this.state;

    const searchit = bikeProducts.filter((each) =>
      each.headText.toLowerCase().includes(searchs.toLowerCase()),
    );
    const btnColor=dark?"btn":"btnchange"
    return (
      <div
        className="container"
        style={{
          backgroundColor: dark ? "#F7F4EE" : "#0B0E1B",
          color: dark ? "white" : "white",
        }}
      >
        <section
          className="section1"
          style={{ backgroundColor: dark ? "#0B0E1B" : "#bc9547" }}
        >
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
                  <input type="search" onChange={this.search} placeholder="Search the accessories"/>
                </li>
                <li>
                  <button className={btnColor} onClick={this.onchange}>
                    {dark?(<i class="fa-regular fa-sun"></i>):(<i class="fa-regular fa-moon"></i>)}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <div className="items-container">
          {searchit.map((each) => (
            <Cards item={each} key={each.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Carditem;
