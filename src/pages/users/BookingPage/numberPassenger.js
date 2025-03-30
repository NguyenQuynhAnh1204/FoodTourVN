import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaPlus, FaMinus } from "react-icons/fa6";

function NumberPassenger({type, age}) {
     const [numberPass, setNumberPass] = useState(0);
    
        const handleDecrease = () => {
            setNumberPass((prev) => prev < 1 ? 0 : prev-1);
        }
    
        const handleIncrease = () => {
            setNumberPass((prev) => prev +1);
        }
    return (
        <div className="type-passenger_item">
        <span><p>{type}</p>{age}</span>
        <div className='number-passenger'>
            <Button type='button' onClick={handleDecrease}>
                <FaMinus />
            </Button>
            <div>{numberPass}</div>
            <Button type='button' onClick={handleIncrease}>
                <FaPlus />
            </Button>
        </div>
        </div>
    )
}

export default NumberPassenger;