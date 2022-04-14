import React from 'react'

function NavigationDots({ active }) {
    return (
        <div className="app__navigation">
            {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, i) => (
                <a 
                    href={`#${item}`}
                    key={item + i}
                    style={active === item ? { background: '#313BAC' } : {}}
                    className="app__navigation-dot"
                />
            ))}
        </div>
    )
}

export default NavigationDots