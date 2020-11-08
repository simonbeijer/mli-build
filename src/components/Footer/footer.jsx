import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="container-fluid">
        <div className="row">
          
        <div className="footerCols col-xs-12 col-sm-4 ">
          <a rel="noopener noreferrer" href="https://www.facebook.com/Middle-Lake-Industries-104515494669235/" target="_blank"><i className="fa fa-facebook-square"></i> Facebook</a>
        </div>
        <div className="footerCols col-xs-12 col-sm-4">
          <a rel="noopener noreferrer" href="https://instagram.com/middle_lake_industries?igshid=hlydb1g4s71n" target="_blank"><i className="fa fa-instagram"></i> Instagram</a>
        </div>
        <div className="footerCols col-xs-12 col-sm-4">
          <a rel="noopener noreferrer"  href="https://www.facebook.com/Middle-Lake-Industries-104515494669235/" target="_blank"><i className="fa fa-envelope"></i> Mail</a>
        </div>
      </div>
      </div>

      <div className="copy d-flex align-items-center justify-content-center">

        <h6>Middle lake industries &copy;</h6>
      </div>
    </footer>
  );
}

export default Footer;
