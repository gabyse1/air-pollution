import { TiArrowBack } from 'react-icons/ti';
import { FaMicrophone } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';

const Navbar = () => (
  <nav className="navbar__box">
    <button type="button" className="btn__nav" aria-label="Go back to home page">
      <TiArrowBack />
    </button>
    <button type="button" className="btn__nav" aria-label="Microphone">
      <FaMicrophone />
    </button>
    <button type="button" className="btn__nav" aria-label="Settins">
      <GoGear />
    </button>
  </nav>
);

export default Navbar;
