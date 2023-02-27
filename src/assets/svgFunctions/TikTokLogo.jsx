import React from "react"

class TikTokLogo extends React.Component {
    render() {
        const {className} = this.props
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                className={className}
            >
                <path d="M48 8H16a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8V16a8 8 0 00-8-8zm2 19c-3.964 0-6.885-1.09-9-2.695V38.5C41 44.841 35.841 50 29.5 50S18 44.841 18 38.5 23.159 27 29.5 27h2v5h-2c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5V14h5c.018 1.323.533 8 9 8v5z"></path>
            </svg>
        )
    }
}

export default TikTokLogo
