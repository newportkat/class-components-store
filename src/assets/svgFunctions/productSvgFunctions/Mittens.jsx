import React from "react"

class Mittens extends React.Component {
    render() {
              const { className } = this.props
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          fill="#000"
          version="1.1"
          viewBox="0 0 511.998 511.998"
          xmlSpace="preserve"
          className={className}
      >
          <path d="M462.828 144.956c-13.511-7.569-29.404-4.771-41.48 7.305l-22.274 22.275c-1.697 1.697-3.601 1.168-4.339.864-.739-.306-2.457-1.277-2.457-3.677V76.472c0-24.019-10.947-46.156-30.035-60.735C343.156 1.158 318.918-3.584 295.746 2.74l-45.004 12.275c-20.931 5.708-38.27 19.046-49.356 36.5-20.224-1.421-40.332 5.342-55.76 18.912-16.465 14.481-25.908 35.384-25.908 57.351v95.25c0 2.401-1.718 3.371-2.457 3.677-.739.304-2.64.835-4.337-.864l-22.275-22.276c-12.076-12.075-27.968-14.872-41.479-7.304-12.963 7.266-18.244 24.117-12.053 38.405l80.2 196.595c-3.747 3.04-6.149 7.676-6.149 12.865v51.306c0 9.136 7.432 16.568 16.568 16.568h162.469c9.136 0 16.568-7.432 16.568-16.568v-34.738h77.493c9.136 0 16.568-7.432 16.568-16.568V392.82c0-5.19-2.403-9.825-6.149-12.865l80.199-196.592c6.191-14.288.91-31.14-12.056-38.407zm-410.902 83.57a6.078 6.078 0 00-.078-.186c-2.995-6.844-.729-14.791 5.158-18.091 10.493-5.885 19.724 2.074 22.303 4.654l22.275 22.276a19.957 19.957 0 0021.809 4.339 19.956 19.956 0 0012.355-18.49v-95.25c0-17.614 7.267-33.705 20.465-45.312 10.468-9.207 23.649-14.448 37.264-15.043a84.492 84.492 0 00-5.353 29.573v80.918c0 32.787 4.032 65.539 11.984 97.349l3.695 14.777a334.385 334.385 0 019.974 81.015v7.276c-5.093 2.829-8.551 8.26-8.551 14.489v34.738H133.12L51.926 228.526zm238.81 266.907c0 .294-.24.534-.534.534h-162.47a.535.535 0 01-.534-.534v-51.306c0-.292.236-.529.528-.533l.01.001.044-.002h77.446v.534c0 9.136 7.432 16.568 16.568 16.568h68.942v34.738zm94.062-51.306h-.001a.536.536 0 01-.534.534H221.794a.535.535 0 01-.534-.534V392.82c0-.294.239-.534.534-.534h162.423l.044.002.01-.001a.536.536 0 01.528.533v51.307zm75.351-267.093a6.078 6.078 0 00-.078.186l-81.194 199.033H229.81v-5.197c0-28.596-3.517-57.162-10.453-84.905l-3.695-14.777a385.674 385.674 0 01-11.505-93.46V96.995c0-31.004 20.89-58.354 50.803-66.513l45.005-12.275c18.309-4.993 37.464-1.251 52.547 10.27s23.734 29.015 23.734 47.994v95.25A19.952 19.952 0 00388.6 190.21a19.95 19.95 0 0021.812-4.339l22.275-22.275c2.578-2.579 11.805-10.537 22.302-4.654 5.889 3.301 8.155 11.247 5.16 18.092z"></path>
      </svg>
  )
    }
}

export default Mittens
