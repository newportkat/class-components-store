import React, { Component } from "react"
import ProductCard from "../components/ProductCard"
import { productData } from "../productData"

export default class Showcase extends Component {
    render() {
        const { type, heading } = this.props

        return (
            <div className="flex flex-col items-center py-8 sm:py-20">
                <h1 className="mb-10 border-b-4 border-red-400 p-1 font-gugi text-3xl font-bold tracking-widest text-red-400 sm:mb-24 sm:border-b-8 sm:text-6xl">
                    {heading.toUpperCase()}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-24 sm:px-24">
                    {productData
                        .filter((product) => product[type])
                        .map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                                onClick={
                                    this.props.updateAndShowSingleProductData
                                }
                            />
                        ))}
                </div>
            </div>
        )
    }
}
