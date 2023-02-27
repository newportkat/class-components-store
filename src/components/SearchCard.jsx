import React, { Component } from "react"

export default class ProductCard extends Component {
    state = {
        SvgComponent: null,
    }

    async componentDidMount() {
        const { default: SvgComponent } = await import(
            `../assets/svgFunctions/productSvgFunctions/${this.props.id}.jsx`
        )
        this.setState({ SvgComponent })
    }

    render() {
        const discountedPrice = this.props.price * 0.8

        return (
            <div
                className="flex flex-col gap-1"
                onClick={() => {
                    this.props.updateAndShowSingleProductData(this.props.id)
                }}
            >
                <div className=" group relative cursor-pointer">
                    <div>
                        <img
                            src={`/images/${this.props.img}.jpg`}
                            className="h-24 w-24 rounded-lg object-cover"
                            alt={this.props.name}
                        />
                    </div>

                    <a className="opacity-0 group-hover:opacity-100">
                        {this.state.SvgComponent && (
                            <this.state.SvgComponent className="absolute top-0 h-24 w-24 rounded-lg bg-red-400 fill-white p-8" />
                        )}
                    </a>
                </div>
                <div className="text-center">
                    <a
                        to={`/products/${this.props.name}`}
                        className="text-md font-light hover:text-slate-500"
                    >
                        {this.props.name}
                    </a>
                </div>
            </div>
        )
    }
}
