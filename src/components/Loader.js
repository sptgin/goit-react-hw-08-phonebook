import Loader from 'react-loader-spinner';
import './Loader.css';

function SpinnerLoader() {
  return (
    <Loader
      className="SpinnerLoader"
      type="Watch"
      color="#808080"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}

export default SpinnerLoader;
