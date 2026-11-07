import { Component } from "react";
import "./index.css";
class Cards extends Component {
  state={count:0}

  addcart=()=>{
    this.setState(prev=>({count:prev.count+1}))
  }

  render() {
    const {count}=this.state
    const {item}=this.props 
    const {headText,para,price,url}=item
    return (
      <section className="box-container">
        <div className="cards1">
          <div className="img-containers">
            <img
              src={url}
              className="img-size"
            />
          </div>

          <div className="cards2">
            <h1 className="title">{headText}</h1>
            <p className="para">{para}</p>
            <div className="btn-container">
             <button className="price-btn">{price}</button>
             <button className="cart-btn" onClick={this.addcart}><i class="fa-solid fa-dolly"></i>{count}</button>
          </div>
           </div>
          
        </div>
      </section>
    );
  }
}

export default Cards;
