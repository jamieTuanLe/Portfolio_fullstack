import React, { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight} from 'react-icons/hi'

import { urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Orientation.scss'

function Orientation() {
    const [orientation, setOrientation] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClick = (index) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        const query = '*[_type == "orientation"]'

        client.fetch(query)
            .then((data) => {
                setOrientation(data)
            })
    }, [])

    const test = orientation[currentIndex]

    return (
        <>  
            <h2 className="head-text">
                Job <span>Orientation</span>
            </h2>
            {orientation?.length && (
                <>
                    <div className="app__orientation-item">
                        <img src={urlFor(test.imageUrl)} alt="orientation" />
                        <div className="app__orientation-content">
                            <p className="p-text">{test.feedback}</p>
                            <div>
                                <h4 className="bold-text">{test.name}</h4>
                                <p className="p-text">{test.company}</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__orientation-btns app__flex">
                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? orientation.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>
                        <div className="app__flex" onClick={() => handleClick(currentIndex ===  orientation.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default AppWrap(
    MotionWrap(Orientation, 'app__orientation'),
    'orientation',
    'app__primarybg'
    )