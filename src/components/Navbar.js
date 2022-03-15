import { TiArrowBack } from 'react-icons/ti';
import { FaMicrophone } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { useNavigate, useParams } from 'react-router-dom';

const Navbar = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <nav className="navbar__box">
      {
        name ? (
          <button type="button" className="btn__nav" aria-label="Go to back page" onClick={() => navigate(-1)}>
            <TiArrowBack />
          </button>
        ) : null
      }
      <button type="button" className="btn__nav" aria-label="Microphone">
        <FaMicrophone />
      </button>
      <button type="button" className="btn__nav" aria-label="Settins">
        <GoGear />
      </button>
    </nav>
  );
};

export default Navbar;
