import  { useState, useEffect } from 'react';
import NumberCell from './NumberCell';

const Grid = () => {
  const [rows, setRows] = useState(10); // first start with 10 rows
  const [sharedDivisors, setSharedDivisors] = useState([]); //shared divisors numbs array

  // function to create new rows
  const addRows = () => {
    setRows((prevRows) => prevRows + 10); // add 10 more rows
  };


  //listener to scroll
  useEffect(() => {
    const handleScroll = () => {
      // check if you near the end of page
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
        addRows();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMouseUp = () => {
      setSharedDivisors([]); // clear state
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // check if num is prime
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const getSharedDivisors = (clickedNum) => {
    return Array.from({ length: rows * 10 }, (_, idx) => idx + 1).filter(
      (num) => num % clickedNum === 0 || clickedNum % num === 0
    );
  };


    // handle mouse down on number
    const handleMouseDown = (num) => {
      setSharedDivisors(getSharedDivisors(num)); // עדכון רשימת המחלקים המשותפים
    };

  


  // create number table
  const numbers = Array.from({ length: rows * 10 }, (_, idx) => idx + 1);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-10 gap-3"> 
        {numbers.map((num) => (
         <NumberCell
         key={num}
         num={num}
         isPrime={isPrime(num)}
         isClicked={sharedDivisors.includes(num)}
         onMouseDown={handleMouseDown}
       />
        ))}
      </div>

    </div>
  );
};

export default Grid;
