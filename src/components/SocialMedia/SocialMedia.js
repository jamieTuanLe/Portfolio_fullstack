import React from 'react'

import { BsTwitter, BsGithub, BsFacebook } from 'react-icons/bs'

function SocialMedia() {
    return (
        <div className="app__social">
            <div>
                <BsTwitter />
            </div>
            <div>
                <BsGithub />
            </div>
            <div>
                <BsFacebook />
            </div>
        </div>
    )
}

export default SocialMedia