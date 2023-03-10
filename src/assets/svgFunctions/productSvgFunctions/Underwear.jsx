import React from "react"

class Underwear extends React.Component {
    render() {
    const { className } = this.props
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800"
                height="800"
                fill="#000"
                version="1.1"
                viewBox="0 0 512.001 512.001"
                xmlSpace="preserve"
                           className={className}
 >
                <path d="M511.981 464.945L486.328 97.246a8.016 8.016 0 00-7.997-7.459h-.534v-43.29a8.017 8.017 0 00-8.017-8.017H42.222a8.017 8.017 0 00-8.017 8.017v43.29h-.535a8.016 8.016 0 00-7.997 7.459L.019 464.945a8.014 8.014 0 007.998 8.574H236.76a8.017 8.017 0 007.88-6.539L256 406.39l11.36 60.59a8.018 8.018 0 007.88 6.539h228.743c2.223 0 4.346-.924 5.863-2.549s2.29-3.807 2.135-6.025zm-281.875-7.458H16.613l1.268-18.171h215.633l-3.408 18.171zm6.415-34.205H18.999l22.148-317.461H155.11l34.711 215.208c4.552 28.226 28.157 48.883 56.528 49.832l-9.828 52.421zm11.463-68.418c-21.183-.192-38.954-15.432-42.333-36.388l-34.299-212.655h76.632v249.043zM50.238 89.787V54.514h411.524v35.274H50.238zm213.78 16.034h76.632l-34.299 212.655c-3.38 20.956-21.15 36.196-42.334 36.388V105.821zm1.633 265.039c28.372-.949 51.975-21.606 56.528-49.832l34.71-215.208h113.963l22.149 317.461h-217.52l-9.83-52.421zm16.243 86.627l-3.408-18.171H494.12l1.268 18.171H281.894z"></path>
            </svg>
        )
    }
}

export default Underwear
