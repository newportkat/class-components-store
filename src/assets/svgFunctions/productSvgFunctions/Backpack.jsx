import React from "react"

class Icon extends React.Component {
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
                <path d="M367.165 290.739h-222.33c-13.851 0-25.119 11.268-25.119 25.119v136.818c0 13.851 11.268 25.119 25.119 25.119h222.33c13.851 0 25.119-11.268 25.119-25.119V315.858c0-13.851-11.268-25.119-25.119-25.119zm9.086 161.937c0 5.01-4.076 9.086-9.086 9.086h-222.33c-5.01 0-9.086-4.076-9.086-9.086V315.858c0-5.01 4.076-9.086 9.086-9.086h222.33c5.01 0 9.086 4.076 9.086 9.086v136.818z"></path>
                <path d="M350.063 342.046H161.937a8.017 8.017 0 000 16.034H299.29v10.939c-9.93 3.354-17.102 12.752-17.102 23.8 0 13.851 11.268 25.119 25.119 25.119 13.851 0 25.119-11.268 25.119-25.119 0-11.048-7.172-20.446-17.102-23.8V358.08h34.739a8.017 8.017 0 000-16.034zm-33.67 50.772c0 5.01-4.076 9.086-9.086 9.086-5.01 0-9.086-4.076-9.086-9.086 0-5.01 4.076-9.086 9.086-9.086 5.01.001 9.086 4.076 9.086 9.086z"></path>
                <path d="M444.125 290.739h-9.086V161.937c0-14.813-3.003-29.249-8.562-42.548.002-.069.011-.138.011-.207V16.568C426.489 7.432 419.057 0 409.921 0h-34.205c-9.136 0-16.568 7.432-16.568 16.568v34.753c-.179-.003-.355-.014-.534-.014h-34.739V33.67c0-18.566-15.105-33.67-33.67-33.67h-68.409c-18.566 0-33.67 15.105-33.67 33.67v17.637h-34.739c-.18 0-.356.01-.534.014V16.568C152.852 7.432 145.42 0 136.284 0h-34.205c-9.136 0-16.568 7.432-16.568 16.568v102.614c0 .069.009.137.011.206-5.559 13.299-8.562 27.736-8.562 42.549v128.802h-9.086c-13.851 0-25.119 11.268-25.119 25.119v136.818c0 13.851 11.268 25.119 25.119 25.119h9.858C81.49 497.255 98.642 512 119.182 512h273.637c20.54 0 37.691-14.745 41.448-34.205h9.858c13.851 0 25.119-11.268 25.119-25.119V315.858c0-13.851-11.268-25.119-25.119-25.119zM76.96 461.762h-9.086c-5.01 0-9.086-4.076-9.086-9.086v-94.597H76.96v103.683zm0-119.716H58.789v-26.188c0-5.01 4.076-9.086 9.086-9.086h9.086v35.274zM375.182 16.568c0-.295.239-.534.534-.534h34.205c.295 0 .534.239.534.534v75.916a110.54 110.54 0 00-28.351-24.946 25.217 25.217 0 00-6.922-9.97v-41zM204.159 33.67c0-9.725 7.912-17.637 17.637-17.637h68.409c9.725 0 17.637 7.912 17.637 17.637v17.637H204.159V33.67zm-59.858 42.756c0-5.01 4.076-9.086 9.086-9.086h205.228c5.01 0 9.086 4.076 9.086 9.086v85.511c0 42.731-34.764 77.495-77.495 77.495h-9.086v-26.188a8.017 8.017 0 00-8.017-8.017h-34.205a8.017 8.017 0 00-8.017 8.017v26.188h-9.086c-42.731 0-77.495-34.764-77.495-77.495V76.426zm120.785 144.835V247.454c-.003 5.008-4.077 9.08-9.086 9.08-5.01 0-9.086-4.076-9.086-9.086V221.26h18.172zM101.545 16.568c0-.295.239-.534.534-.534h34.205c.295 0 .534.239.534.534v41.001a25.203 25.203 0 00-6.922 9.97 110.507 110.507 0 00-28.351 24.946V16.568zm317.461 453.211c0 14.44-11.748 26.188-26.188 26.188H119.182c-14.44 0-26.188-11.748-26.188-26.188V161.937c0-28.758 13.233-55.853 35.274-73.665v73.665c0 51.572 41.956 93.528 93.528 93.528H232.2c3.354 9.93 12.752 17.102 23.8 17.102s20.446-7.172 23.8-17.102h10.405c51.572 0 93.528-41.956 93.528-93.528V88.272c22.041 17.812 35.273 44.907 35.273 73.665v307.842zm34.205-17.103c0 5.01-4.076 9.086-9.086 9.086h-9.086V358.079h18.171v94.597zm0-110.63H435.04v-35.273h9.086c5.01 0 9.086 4.076 9.086 9.086v26.187z"></path>
            </svg>
        )
    }
}

export default Icon
