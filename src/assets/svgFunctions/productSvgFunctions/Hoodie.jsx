import React from "react"

class Hoodie extends React.Component {
    render() {
        const { className } = this.props
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800"
                height="800"
                fill="#000"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                className={className}
            >
                <path d="M470.935 395.182l-9.128-268.983c-.785-23.138-15.101-43.844-36.473-52.748L390.149 58.79l-28.237-46.673C357.391 4.643 349.157 0 340.421 0H171.58c-8.735 0-16.971 4.643-21.492 12.117L121.851 58.79 86.666 73.451c-21.371 8.905-35.687 29.609-36.473 52.748l-9.128 268.982c-.232 6.807 3.811 13.135 10.067 15.8l-1.433 30.098c-.323 6.793 3.641 13.202 9.864 15.947l60.154 26.53v11.877c0 9.136 7.432 16.568 16.568 16.568h239.432c9.136 0 16.568-7.432 16.568-16.568v-11.877l60.153-26.53c6.223-2.745 10.187-9.153 9.864-15.947l-1.433-30.098c6.255-2.666 10.298-8.994 10.066-15.799zM347.81 19.864c.13.183.268.358.386.553l16.899 27.934-3.714-1.548a25.134 25.134 0 00-23.147 1.996L265.47 95.103c-5.095 3.243-11.509 3.608-16.906 1.104l99.246-76.343zm-21.316-3.831l-67.991 52.3-71.912-52.3h139.903zm-162.688 4.383c.158-.262.34-.506.523-.748l80.927 58.856-11.217 8.628-60.271-38.354a25.134 25.134 0 00-23.147-1.996l-3.714 1.548 16.899-27.934zM66.031 442.355a.538.538 0 01-.316-.514l1.158-24.315 36.763 15.272-.571 19.234a25.237 25.237 0 00.805 7.012l-37.839-16.689zm310.22 36.068v17.009a.535.535 0 01-.534.534H136.284a.535.535 0 01-.534-.534v-16.959-.677h240.501v.627zm69.716-36.067l-37.841 16.69c.589-2.265.869-4.629.807-7.045l-.57-19.202 36.764-15.272 1.158 24.315a.536.536 0 01-.318.514zm8.615-46.119l-46.727 19.411-7.024-236.846c-.131-4.425-3.859-7.919-8.251-7.775a8.016 8.016 0 00-7.775 8.251l8.1 273.166a9.009 9.009 0 01-2.576 6.574 9.01 9.01 0 01-6.506 2.744H128.178a9.015 9.015 0 01-6.506-2.744 8.993 8.993 0 01-2.577-6.542l8.101-273.198a8.017 8.017 0 00-7.775-8.251c-4.408-.143-8.119 3.349-8.251 7.775l-7.024 236.846-46.727-19.411a.537.537 0 01-.329-.512l9.128-268.982c.573-16.884 11.02-31.994 26.615-38.492l63.954-26.648a9.097 9.097 0 018.373.721l65.721 41.824v117.647a8.017 8.017 0 0016.034 0V112.623a33.931 33.931 0 0018.171 0v109.172a8.017 8.017 0 0016.034 0V104.149l65.722-41.824a9.095 9.095 0 018.372-.722l63.954 26.648c15.595 6.498 26.042 21.608 26.615 38.492l9.128 268.983a.538.538 0 01-.329.511z"></path>
                <path d="M356.937 414.347c-.248-.415-24.916-42.034-33.142-99.623a8.016 8.016 0 00-7.937-6.883H196.143a8.018 8.018 0 00-7.937 6.883c-8.201 57.406-32.897 99.213-33.142 99.623a8.016 8.016 0 006.874 12.141h188.125a8.015 8.015 0 006.874-12.141zm-181.661-3.892c7.958-16.172 21.184-47.305 27.737-86.58H308.99c6.552 39.275 19.779 70.408 27.737 86.58H175.276z"></path>
            </svg>
        )
    }
}

export default Hoodie
