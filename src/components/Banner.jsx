import React, { Component } from "react"

export default class Socials extends Component {
    render() {
        return (
            <div className="flex h-16 items-center justify-center text-center bg-gradient-to-r from-cyan-400 to-blue-400 p-10 sm:h-28">
                <h1 className="text-white font-semibold text-3xl">
                    <span className=" font-bold">{this.props.title} </span>{this.props.subtitle}
                </h1>
            </div>
        )
    }
}
