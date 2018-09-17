import React from "react";
import ReactDom, {render} from "react-dom";
import Onepage from "./onepage.js";

const bodyContainer = document.getElementById("body-container")

render(<Onepage/>, bodyContainer);