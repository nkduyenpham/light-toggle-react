import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Switch = ({ toggle, onClick }) => {
    // basing on 'toggle' state
    const switchClass = toggle ? "bg-gray-700 justify-end" : "bg-blue-300 justify-start";
    const imgSrc = toggle ? "/moon.png" : "/sun.png";

    return (
        <motion.div animate className={`flex items-center w-[170px] h-[100px] rounded-full p-[10px] cursor-pointer z-2 transition duration-500 ease-in-out ${switchClass}`} onClick={onClick}>
          <motion.div animate className="w-[80px] h-[80px] rounded-full overflow-hidden">
            <img src={imgSrc} alt="Toggle" />
          </motion.div>
        </motion.div>
    );
};

const App = () => {
    // State to track the on/off status of the switch
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        // Change the background color of the body based on `toggle` state
        document.body.style.backgroundColor = toggle ? "#1c1c1c" : "#f1ebe1";
    }, [toggle]);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Switch
                toggle={toggle}
                onClick={() => setToggle(!toggle)}
            />
        </div>
    );
};

export default App;