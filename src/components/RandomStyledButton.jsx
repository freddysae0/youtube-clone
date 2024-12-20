import { useState } from "react";

export default function RandomStyledButton({ children, onClick }) {
    const possibleClasses = [
        "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
        "focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700"
    ];
    const [_class, set_class] = useState(possibleClasses[Math.floor(Math.random() * possibleClasses.length)])
    return (
        <button className={_class}>
            {children}
        </button>
    );
}