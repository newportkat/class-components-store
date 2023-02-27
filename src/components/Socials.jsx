import React, { Component } from "react"
import FacebookLogo from "../assets/svgFunctions/FacebookLogo"
import InstagramLogo from "../assets/svgFunctions/InstagramLogo"
import TikTokLogo from "../assets/svgFunctions/TikTokLogo"
import TwitterLogo from "../assets/svgFunctions/TwitterLogo"

export default class Socials extends Component {
    render() {
        return (
            <div className="flex h-16 items-center justify-evenly bg-gradient-to-r from-cyan-400 to-blue-400 p-10 sm:h-28">
                <FacebookLogo className="h-12 w-12 cursor-pointer fill-white transition hover:scale-125 sm:h-16 sm:w-16" />
                <InstagramLogo className="h-12 w-12 cursor-pointer fill-white transition hover:scale-125 sm:h-16 sm:w-16" />
                <TwitterLogo className="h-12 w-12 cursor-pointer fill-white transition hover:scale-125 sm:h-16 sm:w-16" />
                <TikTokLogo className="h-12 w-12 cursor-pointer fill-white transition hover:scale-125 sm:h-16 sm:w-16" />
            </div>
        )
    }
}
