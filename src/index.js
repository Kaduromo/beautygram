import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"

import "bootstrap-icons/font/bootstrap-icons.css"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)

reportWebVitals()
