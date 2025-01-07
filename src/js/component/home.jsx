import React, { useEffect, useState } from "react";

const Home = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return; 

        const timer = setInterval(() => {
            setCount((prevCount) => {
                if (isCountingDown && prevCount <= 0) {
                    clearInterval(timer); 
                    return 0; 
                }
                return prevCount + (isCountingDown ? -1 : 1); 
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isCountingDown, isRunning]);

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        setInputValue(value);
        setCount(value);
    };

    const toggleCountingMode = () => {
        setIsCountingDown(!isCountingDown); 
    };

    const toggleRunning = () => {
        setIsRunning(!isRunning); 
    };


    const resetCounter = () => {
        setCount(0);
        setInputValue("");
        setIsRunning(true);  
        setIsCountingDown(false); 
    };


    const four = Math.floor(count / 1000) % 10;
    const three = Math.floor(count / 100) % 10;
    const two = Math.floor(count / 10) % 10;
    const one = Math.floor(count / 1) % 10;

    return (
        <div className="container">
            <div className="bigCounter">
                <div className="calendar">
                    <i className="far fa-clock"></i> 
                </div>
                <div>{four}</div>
                <div>{three}</div>
                <div>{two}</div>
                <div>{one}</div>
            </div>

            <div className="controls">
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="inputField"
                    placeholder="Cuenta a partir de..."
                />
                <button className="btn btn-success" onClick={toggleCountingMode}>
                    {isCountingDown ? "Cambiar a cuenta ascendente" : "Cambiar a cuenta descendiente"}
                </button>
                <button className="btn btn-danger" onClick={toggleRunning}>
                    {isRunning ? "Pausar" : "Continuar"}
                </button>
                <button className="btn btn-warning" onClick={resetCounter}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
};

export default Home;
