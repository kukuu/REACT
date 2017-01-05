
//Building REACT Components

import React from "react";
import ReactDom from "react-dom";

import Layout from "./commponents/Layout"

// Moved this bit into commponents folder. See js/components


const app = document.getElementById('app');

ReactDom.render(< Layout/>,app);