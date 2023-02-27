import React, { Component } from "react"
import Add from "../assets/svgFunctions/Add"
import Minus from "../assets/svgFunctions/Minus"

export default class Product extends Component {
    state = {
        SvgComponent: null,
        quantity: 1,
    }

    async componentDidMount() {
        const { default: SvgComponent } = await import(
            `../assets/svgFunctions/productSvgFunctions/${this.props.id}.jsx`
        )
        this.setState({ SvgComponent })
    }

    increaseQuantity = () => {
        this.setState({ quantity: this.state.quantity + 1 })
    }

    decreaseQuantity = () => {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    render() {
        const discountedPrice = this.props.price * 0.8

        return (
            <div className="flex flex-col items-center justify-center gap-2 px-6 pt-4 pb-10 text-slate-700 sm:flex-row sm:items-start sm:gap-8 sm:p-16">
                <div className="group relative cursor-pointer">
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
                            onClick={() => this.props.onClick(this.props.id)}
                        />
                    </div>

                    <div className="opacity-0 group-hover:opacity-100">
                        {this.state.SvgComponent && (
                            <this.state.SvgComponent
                                onClick={() =>
                                    this.props.onClick(this.props.id)
                                }
                                className="absolute top-0 h-96 w-72 rounded-lg bg-red-400 fill-white p-8"
                            />
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3 sm:items-start">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-center text-xs uppercase underline sm:text-left">
                            {this.props.brand}
                        </h4>
                        <h1 className="text-2xl font-semibold">
                            {this.props.name}
                        </h1>
                    </div>
                    <div className="flex gap-3 text-3xl">
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
                    <div className="flex items-center gap-2">
                        <div onClick={this.decreaseQuantity}>
                            <Minus className="h-6 w-6 cursor-pointer rounded bg-slate-300 p-1 hover:bg-slate-400 active:bg-slate-300" />
                        </div>
                        <p>{this.state.quantity}</p>
                        <div onClick={this.increaseQuantity}>
                            <Add className="h-6 w-6 cursor-pointer rounded bg-slate-300 p-1 hover:bg-slate-400 active:bg-slate-300" />
                        </div>
                    </div>
                    <button className="rounded-lg bg-red-400 p-3 text-sm font-medium tracking-wider text-white hover:bg-red-500 active:bg-red-400">
                        ADD TO CART
                    </button>
                    <p className="mt-2 max-w-[20rem] text-center sm:text-left">
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}
