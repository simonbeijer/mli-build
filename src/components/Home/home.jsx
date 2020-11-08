import React from 'react';
import './home.scss';
import ControlledCarousel from '../Carousel/carousel'



function Home() {

  return (
    <main className="App-home container-fluid">
      <ControlledCarousel className="carousel"/>
      <div className="row">

        <div className="text-center">
          <div className="col-8 mx-auto">
            <h1>Middle Lake Industries</h1>
            <div className="col-3 mx-auto">
            </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae optio eveniet facilis error reiciendis quas molestias culpa aliquid quo tenetur, dolore, quis itaque eius ratione ea iusto omnis fugiat recusandae.         </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;



