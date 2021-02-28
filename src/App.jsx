import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Products from "./components/Products/products";
import Contact from "./components/Contact/contact";
import ProductProvider from "./components/Context/productContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <BrowserRouter basename="">
          <Header />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route component={Home} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </ProductProvider>
  );
}

export default App;
