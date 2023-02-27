import React from "react"

class Add extends React.Component {
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
                    d="M12 4.5v15m7.5-7.5h-15"
                ></path>
            </svg>
        )
    }
}

export default Add
