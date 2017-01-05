import React from "react";


import Header from "./Header";

export default class Layout extends React Component {
	/*getVal(val) {
		return "Will" + val;
	}
	*/
	//instead you can use a constructor. Not you have to call super() on the 
	//first line of the constructor
	constructor() {
		super();
		this.name = "Will";
	}

	render() {
		var list = [
			<Header />,
			<Header />,
			<Header />	
		]
		//return ( <h1>It works {this.getVal(iAm)}</h1>)
		return (
			<div>
				<h1>It works {this.name}</h1>
					<ul>
						{list}
					</ul>
			</div
		)
	}
}