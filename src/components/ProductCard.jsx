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
            <div>
                <div
                    className="group relative cursor-pointer"
                    onClick={() => this.props.onClick(this.props.id)}
                >
                    {this.props.isNew && (
                        <p className="absolute right-3 top-3 rounded bg-white p-1 tracking-widest text-slate-800">
                            NEW
                        </p>
                    )}

                    <div>
                        <img
                            src={`/images/${this.props.img}.jpg`}
                            className="h-96 w-72 rounded-lg object-cover"
                            alt={this.props.name}
                            onClick={() =>
                                this.props.updateAndShowSingleProductData(
                                    this.props.id
                                )
                            }
                        />
                    </div>

                    <div className="opacity-0 group-hover:opacity-100">
                        {this.state.SvgComponent && (
                            <this.state.SvgComponent
                                onClick={() =>
                                    this.props.updateAndShowSingleProductData(
                                        this.props.id
                                    )
                                }
                                className="absolute top-0 h-96 w-72 rounded-lg bg-red-400 fill-white p-8"
                            />
                        )}
                    </div>
                </div>

                <div className="flex items-start justify-between p-2">
                    <div>
                        <h4 className="text-xs uppercase">
                            {this.props.brand}
                        </h4>
                        <h1
                            onClick={() => this.props.onClick(this.props.id)}
                            className="cursor-pointer text-xl font-semibold hover:text-slate-500"
                        >
                            {this.props.name}
                        </h1>
                    </div>
                    <div className="flex gap-2">
                        {this.props.onSale && (
                            <h5>${discountedPrice.toFixed(0)}</h5>
                        )}
                        <h5
                            className={`${
                                this.props.onSale && "text-red-500 line-through"
                            }`}
                        >
                            ${this.props.price.toFixed(0)}
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}
