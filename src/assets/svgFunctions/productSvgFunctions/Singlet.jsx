import React from "react"

class Singlet extends React.Component {
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
                <path d="M409.386 121.623V8.017A8.017 8.017 0 00401.369 0a8.017 8.017 0 00-8.017 8.017V124.19c-26.795 23.337-80.11 38.281-137.353 38.281-57.242 0-110.558-14.944-137.353-38.281V8.017c0-4.427-3.588-8.017-8.017-8.017s-8.017 3.589-8.017 8.017v113.606c-26.783 19.159-42.756 50.151-42.756 83.07 0 30.25 13.232 57.464 34.205 76.173v214.567c0 9.136 7.432 16.568 16.568 16.568H401.37c9.136 0 16.568-7.432 16.568-16.568V280.866c20.973-18.709 34.205-45.923 34.205-76.173-.001-32.92-15.974-63.911-42.757-83.07zm-7.482 373.809a.535.535 0 01-.534.534H110.63a.535.535 0 01-.534-.534v-17.637h291.808v17.637zm-51.841-204.693c-4.428 0-8.017 3.589-8.017 8.017s3.588 8.017 8.017 8.017c18.913 0 36.637-5.177 51.841-14.178v169.167H110.096V292.595c15.204 9.001 32.928 14.178 51.841 14.178 4.428 0 8.017-3.589 8.017-8.017s-3.588-8.017-8.017-8.017c-47.446 0-86.046-38.6-86.046-86.046 0-26.482 12.267-51.485 33.013-67.755 30.178 25.734 85.819 41.567 147.096 41.567s116.918-15.834 147.096-41.567c20.746 16.27 33.013 41.273 33.013 67.755 0 47.446-38.6 86.046-86.046 86.046z"></path>
            </svg>
        )
    }
}

export default Singlet
