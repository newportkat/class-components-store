import React from "react"

class Close extends React.Component {
    render() {
        const { className } = this.props

        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={className}
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                ></path>
            </svg>
        )
    }
}

export default Close
