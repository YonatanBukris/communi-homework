import PropTypes from 'prop-types';


const NumberCell = ({ num, isPrime, isClicked, onMouseDown }) => {
    return (
        <div
        onMouseDown={() => onMouseDown(num)}
        className={`p-2 border text-center cursor-pointer rounded shadow-lg transition-all duration-200 ${
          isClicked
            ? 'bg-blue-500 text-white font-bold scale-110' 
            : isPrime
            ? 'bg-red-500 text-white'
            : 'bg-white border-gray-300 hover:bg-gray-200' 
        }`}
      >
        {num}
      </div>
    );
  };

//define props
NumberCell.propTypes = {
    num: PropTypes.number.isRequired, 
    isPrime: PropTypes.bool.isRequired, 
    isClicked: PropTypes.bool.isRequired, 
    onMouseDown: PropTypes.func.isRequired, 
  };

export default NumberCell;
