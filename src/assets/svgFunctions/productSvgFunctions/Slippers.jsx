import React from "react"

class Slippers extends React.Component {
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
          <path d="M510.279 246.76c-3.486-4.458-35.223-37.778-218.991-62.837a8.015 8.015 0 00-6.751 2.275c-1.07 1.07-25.869 26.344-51.164 91.715H16.568C7.432 277.912 0 285.344 0 294.48v17.102c0 9.136 7.432 16.568 16.568 16.568h316.395c42.59 0 78.399-5.603 100.939-10.304 25.865-5.395 47.898-12.509 57.501-18.569 13.86-8.744 20.598-18.846 20.598-30.885v-16.668-.046-.009-.011a7.989 7.989 0 00-1.722-4.898zM293.28 200.382c5.705.792 11.235 1.593 16.633 2.4-10.155 14.596-24.425 38.763-38.784 75.131h-20.517c16.631-41.341 33.699-67.046 42.668-77.531zm189.567 85.336c-12.313 7.768-72.929 26.398-149.885 26.398H16.568a.535.535 0 01-.534-.534V294.48c0-.294.239-.534.534-.534h333.495c62.251 0 115.716-5.318 139.53-13.877.345-.124.687-.249 1.024-.375-1.877 1.88-4.396 3.895-7.77 6.024zm1.322-20.737c-21.856 7.855-74.495 12.932-134.107 12.932H288.41c15.44-37.7 30.289-60.518 39.3-72.364 123.953 20.077 160.21 43.206 168.153 49.54-.397 3.93-2.325 6.524-11.694 9.892z"></path>
      </svg>
  )
    }
}

export default Slippers
