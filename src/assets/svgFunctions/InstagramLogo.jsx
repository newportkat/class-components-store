import React from "react"

class InstagramLogo extends React.Component {
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
                <path d="M21.58 7C13.541 7 7 13.545 7 21.586v20.832C7 50.458 13.545 57 21.586 57h20.832C50.458 57 57 50.455 57 42.414V21.58C57 13.541 50.455 7 42.414 7H21.58zM47 15a2 2 0 11-.001 4.001A2 2 0 0147 15zm-15 4c7.17 0 13 5.83 13 13s-5.831 13-13 13c-7.17 0-13-5.831-13-13s5.83-13 13-13zm0 4a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9z"></path>
            </svg>
        )
    }
}

export default InstagramLogo
