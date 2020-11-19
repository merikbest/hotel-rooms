import React from 'react';

function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    );
}

// watch in css file
Hero.defaultProps = {
    hero: "defaultHero"
}

export default Hero;