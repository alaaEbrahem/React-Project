import React, { Component } from 'react';
import './StaticStars.scss'

class StaticStars extends Component {
    render() {
        return (
            <span className="sstars" data-sstars={this.props.children}>
                <svg height="10" width="10" className="sstar" data-rating="1">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 " />
                </svg>
                <svg height="10" width="10" className="sstar" data-rating="2">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 "/>
                </svg>
                <svg height="10" width="10" className="sstar" data-rating="3">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 8"/>
                </svg>
                <svg height="10" width="10" className="sstar" data-rating="4">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 " />
                </svg>
                <svg height="10" width="10" className="sstar" data-rating="5">
                    <polygon points="4.994,0.249 6.538,3.376 9.99,3.878 7.492,6.313 8.082,9.751 4.994,8.129 1.907,9.751 
                2.495,6.313 -0.002,3.878 3.45,3.376 " />
                </svg>
            </span>     
        )
    }
}
export default StaticStars;