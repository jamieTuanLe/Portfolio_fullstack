import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

function AppWrap(Component, idName, classNames) {
    return function HOC() {
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                <SocialMedia />

                <div className="app__wrapper app__flex">
                    <Component />

                    <div className="copyright">
                        <p className="p-text">@2022 Vincent (Anh Tuan)</p>
                        <p className="p-text">All right reserved</p>
                    </div>
                </div>

                <NavigationDots active={idName} />
            </div>
        )
    }
}

export default AppWrap