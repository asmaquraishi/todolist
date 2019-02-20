import React, { Component } from 'react';
import './App.css';
import './index.css';

class Itemlist extends Component {
    render() {
        return (
            <div >         
                <form className="forminput" style={{textDecorationLine:this.props.listData.textline}}> 
                    <label className={"container"}>
                        <input type='checkbox' checked={this.props.listData.textline === 'line-through'} name='checkbutton' onClick={() => this.props.checkbox(this.props.index)}></input>
                        <span className="checkmark" ></span>
                        {this.props.listData.title}
                    </label> 
                </form> 
                <button className="clearbtn" onClick={() => this.props.removelist(this.props.index)}>✖️</button>
            </div>
        );
             
    }

}

  export default Itemlist;