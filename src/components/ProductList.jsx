import React, { Component } from "react"
import { brandData } from "../brandData"
import { categoryData } from "../categoryData"
import { productData } from "../productData"
import ProductCard from "./ProductCard"

export default class ProductList extends Component {
    state = {
        filters: {
            priceSort: "",
            brandFilter: "",
            categoryFilter: "",
        },
        singleProductData: {},
        showSingleProduct: false,
        filteredData: productData,
    }

    handleFilterChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        // update filters object
        const filters = { ...this.state.filters, [name]: value }

        // apply filters
        let filteredData = productData
        if (filters.brandFilter) {
            filteredData = filteredData.filter(
                (product) => product.brand === filters.brandFilter
            )
        }
        if (filters.categoryFilter) {
            filteredData = filteredData.filter(
                (product) => product.category === filters.categoryFilter
            )
        }
        if (filters.priceSort) {
            filteredData = filteredData.sort((a, b) => {
                const aPrice = a.onSale ? a.price * 0.85 : a.price
                const bPrice = b.onSale ? b.price * 0.85 : b.price
                if (filters.priceSort === "highToLow") {
                    return bPrice - aPrice
                } else {
                    return aPrice - bPrice
                }
            })
        }

        // update state
        this.setState({ filters, filteredData })
    }

    handleClick = (id) => {
        const showcaseData = productData.filter((product) => id === product.id)
        this.setState({
            showSingleProduct: true,
            singleProductData: showcaseData[0],
        })
    }

    handleReset = () => {
        this.setState({
            filteredData: productData,
            priceSort: "",
            brandFilter: "",
            categoryFilter: "",
        })
    }

    render() {
        return (
            <div>
                <div className="flex flex-col items-center gap-16 p-8">
                    <div className="flex flex-wrap items-center justify-center gap-6 md:w-[32rem] md:gap-10">
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="priceSort"
                                className="text-semibold text-center text-sm tracking-wider text-slate-700"
                            >
                                PRICE:
                            </label>
                            <select
                                name="priceSort"
                                id="priceSort"
                                value={this.state.filters.priceSort}
                                onChange={this.handleFilterChange}
                                className="w-36 cursor-pointer rounded bg-slate-200 p-1 text-center tracking-wider text-slate-700 drop-shadow-md"
                            >
                                <option value="">Select</option>
                                <option value="highToLow">High to Low</option>
                                <option value="lowToHigh">Low to High</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="brandFilter"
                                className="text-semibold text-center text-sm tracking-wider text-slate-700"
                            >
                                BRAND:
                            </label>
                            <select
                                name="brandFilter"
                                id="brandFilter"
                                value={this.state.filters.brandFilter}
                                onChange={this.handleFilterChange}
                                className="w-36 cursor-pointer rounded bg-slate-200 p-1 text-center tracking-wider text-slate-700 drop-shadow-md"
                            >
                                <option value="" key="all-brands">
                                    Select
                                </option>
                                {brandData.map((brand) => (
                                    <option
                                        key={brand.name}
                                        value={brand.name}
                                        className="uppercase"
                                    >
                                        {/* captialize first letter */}
                                        {brand.name.charAt(0).toUpperCase() +
                                            brand.name.slice(1)}{" "}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="categoryFilter"
                                className="text-semibold text-center text-sm tracking-wider text-slate-700"
                            >
                                CATEGORY:
                            </label>
                            <select
                                name="categoryFilter"
                                id="categoryFilter"
                                value={this.state.filters.categoryFilter}
                                onChange={this.handleFilterChange}
                                className="w-36 cursor-pointer rounded bg-slate-200 p-1 text-center tracking-wider text-slate-700 drop-shadow-md"
                            >
                                <option value="" key="all-categories">
                                    Select
                                </option>
                                {categoryData.map((category) => (
                                    <option
                                        key={category.name}
                                        value={category.name}
                                    >
                                        {/* captialize first letter */}
                                        {category.name.charAt(0).toUpperCase() +
                                            category.name.slice(1)}{" "}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            onClick={this.handleReset}
                            className="w-36 self-end rounded bg-slate-200 p-1 text-center tracking-wider text-slate-700 drop-shadow-md hover:bg-slate-300 active:bg-slate-200"
                        >
                            Reset Filters
                        </button>
                    </div>
                    <div>
                        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 sm:px-24 sm:pb-20">
                            {this.state.filteredData.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    onClick={
                                        this.props
                                            .updateAndShowSingleProductData
                                    }
                                    {...product}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
