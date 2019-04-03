import React, { Component } from 'react';
import './Stars.scss'


class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {
           star1:false,
           star2:false,
           star3:false,
           star4:false,
           star5:false,
        };
    }
    handleStars(no,e) {
        if(no==="1"){
            this.setState({
                star1:true,
                star2:false,
                star3:false,
                star4:false,
                star5:false,
            });
        }
        else if(no==="2"){
            this.setState({
                star1:false,
                star2:true,
                star3:false,
                star4:false,
                star5:false,
            });
        }
        else if(no==="3"){
            this.setState({
                star1:false,
                star2:false,
                star3:true,
                star4:false,
                star5:false,
            });
        } 
        else if(no==="4"){
            this.setState({
                star1:false,
                star2:false,
                star3:false,
                star4:true,
                star5:false,
            });
        } 
        else if(no==="5"){
            this.setState({
                star1:false,
                star2:false,
                star3:false,
                star4:false,
                star5:true,
            });
        }
    }
    starNo = () => {
        if(this.state.star1){
            return "1";
        }
        else if(this.state.star2)
        {
            return "2";
        }
        else if(this.state.star3){
            return "3";
        }
        else if(this.state.star4){
            return "4";
        }
        else if(this.state.star5){
            return "5";
        }
        else{
            return "0";
        }
    }
    render() {
        // const { data } = this.state;
        return (
            // <span className="stars" data-stars={this.state.star1 ? "1" :(this.state.star2? "2" : 
            // (this.state.star3? "3" : (this.state.star4? "4" : (this.state.star5? "5" : "0"))))}>
            <span className="stars" data-stars={this.starNo()}>
            <svg height="10" width="10" className="star" data-rating="1" onClick={(e)=>this.handleStars("1",e)}>
                <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
            2.495,6.313 -0.002,3.878 3.45,3.376 " />
            </svg>
            <svg height="10" width="10" className="star" data-rating="2" onClick={(e)=>this.handleStars("2",e)}>
                <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
            2.495,6.313 -0.002,3.878 3.45,3.376 "/>
            </svg>
            <svg height="10" width="10" className="star" data-rating="3" onClick={(e)=>this.handleStars("3",e)}>
                <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
            2.495,6.313 -0.002,3.878 3.45,3.376 8"/>
            </svg>
            <svg height="10" width="10" className="star" data-rating="4" onClick={(e)=>this.handleStars("4",e)}>
                <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
            2.495,6.313 -0.002,3.878 3.45,3.376 " />
            </svg>
            <svg height="10" width="10" className="star" data-rating="5" onClick={(e)=>this.handleStars("5",e)}>
                <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
            2.495,6.313 -0.002,3.878 3.45,3.376 " />
            </svg>
        </span>
        )
    }
}
export default Stars;