import Navbar from 'react-bootstrap/Navbar';

import logo from '../logo.png';

const Navigation = ({ account }) => {
  return (
    <Navbar className='my-3'>
      <div className="logo">
      <img
        alt="logo"
        src={logo}
        width="128"
        height="128"        
      />
      </div>
      <Navbar.Brand href="#" className="brand-margin">NFT Punks</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {account}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
