import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

import AppTheme from "../Colours";

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]

    return (
        <div
            style={{
                padding: '1rem',
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,
                textAlign: 'center'
            }}
        >
            <h1>
                Context API
            </h1>
            <p>This is a nice paragraph</p>
            <button
                style={{
                    backgroundColor: '#26ae60',
                    padding: '10px 150px',
                    color: '#fff',
                    border: `${currentTheme.border}`
                }}
            >
                Display Here
            </button>
        </div>
    )
}
export default HeroSection;