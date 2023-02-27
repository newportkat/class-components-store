import React, { Component } from "react"
import HeroImage from "./assets/heroImage.jpg"
import Cart from "./assets/svgFunctions/Cart"
import Close from "./assets/svgFunctions/Close"
import Menu from "./assets/svgFunctions/Menu"
import SearchIcon from "./assets/svgFunctions/SearchIcon"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Product from "./components/Product"
import ProductList from "./components/ProductList"
import SearchCard from "./components/SearchCard"
import Showcase from "./components/Showcase"
import Socials from "./components/Socials"
import productData from "./productData"

export default class App extends Component {
    state = {
        searchText: "",
        searchResults: [],
        showSearchBar: false,
        showMobileMenu: false,
        showSingleProduct: false,
        showProductList: false,
        showCart: false,
        singleProductData: {
            name: "Jeans",
            category: "pants",
            description:
                "A classic pair of denim jeans that never goes out of style.",
            price: 60,
            isFeatured: false,
            isNew: true,
            onSale: true,
            brand: "fleurie",
            id: "Jeans",
            img: "jeans",
            isLimitedEdition: true,
        },
    }

    scrollUp = () => {
        window.scrollTo(0, 0)
    }

    toggleMenu = () => {
        this.setState((prevState) => ({
            showMobileMenu: !prevState.showMobileMenu,
        }))
        this.scrollUp()
    }

    toggleSearchBar = () => {
        this.setState((prevState) => ({
            showSearchBar: !prevState.showSearchBar,
        }))
    }

    toggleCart = () => {
        this.setState((prevState) => ({
            showCart: !prevState.showCart,
        }))
        this.scrollUp()
    }

    openProductList = () => {
        this.setState({ showProductList: true, showSingleProduct: false })
    }

    closeProductList = () => {
        this.setState({ showProductList: false, showSingleProduct: false })
    }

    updateAndShowSingleProductData = (id) => {
        const showcaseData = productData.filter((product) => id === product.id)
        this.setState({
            showSingleProduct: true,
            singleProductData: showcaseData[0],
            showProductList: false,
            searchText: "",
            searchResults: [],
            showSearchBar: false,
        })
        this.scrollUp()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.showMobileMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }

        if (this.state.searchText !== prevState.searchText) {
            let searchResults
            if (this.state.searchText === "") {
                searchResults = []
            } else {
                searchResults = productData.filter((product) =>
                    product.name
                        .toLowerCase()
                        .includes(this.state.searchText.toLowerCase())
                )
            }
            this.setState({ searchResults })
        }
    }

    render() {
        return (
            <div>
                {/* //navbar */}
                <div className="flex items-center justify-between p-4 sm:px-24">
                    <div onClick={this.toggleMenu}>
                        <Menu className="h-6 w-6 cursor-pointer transition hover:scale-110 sm:invisible" />
                    </div>
                    <a
                        href="#"
                        onClick={this.closeProductList}
                        className="font-gugi text-4xl text-cyan-400"
                    >
                        SOLAE
                    </a>
                    <Cart className="h-6 w-6 origin-top cursor-pointer fill-sky-100 transition hover:rotate-[-12deg]" />
                </div>
                <div className="hidden justify-center gap-16 p-5 tracking-wider sm:flex">
                    <div className="group relative">
                        <a href="#new" onClick={this.closeProductList}>
                            New Arrivals
                        </a>
                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
                    </div>
                    <div className="group relative">
                        <a href="#featured" onClick={this.closeProductList}>
                            Featured
                        </a>
                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
                    </div>
                    <div className="group relative">
                        <a href="#sale" onClick={this.closeProductList}>
                            On Sale
                        </a>
                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
                    </div>
                    <div className="group relative">
                        <button onClick={this.openProductList}>Shop All</button>
                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
                    </div>
                    <div onClick={this.toggleSearchBar}>
                        <SearchIcon className="h-5 w-5 cursor-pointer transition hover:scale-125" />
                    </div>
                </div>

                <div
                    className={`${
                        this.state.showSearchBar ? "flex" : "hidden"
                    } flex-col items-center`}
                >
                    <div>
                        <input
                            type="text"
                            className="z-20 mb-4 w-[40rem] rounded-lg bg-slate-200 py-2 text-center tracking-wider text-slate-700 placeholder-slate-700"
                            placeholder="Explore our collection"
                            value={this.state.searchText}
                            onChange={(event) =>
                                this.setState({
                                    searchText: event.target.value,
                                })
                            }
                        />
                    </div>

                    {this.state.searchResults.length > 0 && (
                        <div className="flex flex-wrap gap-12 p-10">
                            {this.state.searchResults.map((product) => (
                                <SearchCard
                                    key={product.id}
                                    {...product}
                                    updateAndShowSingleProductData={
                                        this.updateAndShowSingleProductData
                                    }
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div
                    className={`absolute ${
                        this.state.showMobileMenu ? "" : "-translate-y-full"
                    } top-0 z-50 flex h-2/3 w-full flex-col items-center justify-around bg-cyan-50 p-8 transition duration-500`}
                >
                    <div onClick={this.toggleMenu}>
                        <Close className="h-10 w-10 hover:cursor-pointer hover:stroke-cyan-600" />
                    </div>
                    <div>
                        <div className="flex flex-col items-center gap-16 p-5 tracking-wider">
                            <div
                                className="group relative"
                                onClick={this.toggleMenu}
                            >
                                <a href="#new">New Arrivals</a>
                                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
                            </div>
                            <div
                                className="group relative"
                                onClick={this.toggleMenu}
                            >
                                <a
                                    href="#featured"
                                    onClick={this.closeProductList}
                                >
                                    Featured
                                </a>
                                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
                            </div>
                            <div
                                className="group relative"
                                onClick={this.toggleMenu}
                            >
                                <a href="#sale" onClick={this.closeProductList}>
                                    On Sale
                                </a>
                                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
                            </div>
                            <div
                                className="group relative"
                                onClick={this.toggleMenu}
                            >
                                <button onClick={this.openProductList}>
                                    <a onClick={this.closeProductList}>
                                        Shop All
                                    </a>
                                </button>
                                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
                            </div>
                        </div>
                    </div>
                    <div onClick={this.toggleMenu}>
                        <a to="/" className="font-gugi text-4xl text-cyan-400">
                            SOLAE
                        </a>
                    </div>
                </div>

                {/* single product */}
                {this.state.showSingleProduct && (
                    <Product {...this.state.singleProductData} />
                )}

                {/* product list */}
                {this.state.showProductList && (
                    <ProductList
                        updateAndShowSingleProductData={
                            this.updateAndShowSingleProductData
                        }
                    />
                )}

                {!this.state.showProductList &&
                    !this.state.showSingleProduct && (
                        <div>
                            <div
                                className="h-screen bg-cover bg-center bg-no-repeat md:bg-fixed"
                                style={{ backgroundImage: `url(${HeroImage})` }}
                            >
                                <div className="flex flex-col items-end gap-6 px-6 text-right tracking-wider">
                                    <h1 className="mt-44 max-w-lg text-5xl font-bold leading-[4rem] text-white drop-shadow-md sm:mr-24 sm:text-7xl sm:leading-[7rem] lg:mr-64">
                                        Fashion that{" "}
                                        <span className="text-red-400 underline shadow-white drop-shadow-[0_0px_10px_rgba(200,255,255,.4)]">
                                            fits
                                        </span>{" "}
                                        your lifestyle
                                    </h1>
                                    <a
                                        href="#"
                                        className="rounded-lg bg-red-400 p-3 text-xl font-medium text-white hover:bg-red-500 active:bg-red-400 sm:mr-24 lg:mr-64"
                                        onClick={this.openProductList}
                                    >
                                        Get inspired
                                    </a>
                                </div>
                            </div>

                            <div id="featured">
                                <Showcase
                                    type="isFeatured"
                                    heading="HOT STUFF"
                                    updateAndShowSingleProductData={
                                        this.updateAndShowSingleProductData
                                    }
                                />
                            </div>

                            <Socials />

                            <div id="new">
                                <Showcase
                                    type="isNew"
                                    heading="FRESH FINDS"
                                    updateAndShowSingleProductData={
                                        this.updateAndShowSingleProductData
                                    }
                                />
                            </div>

                            <Banner
                                title="Wardrobe goals"
                                subtitle="- upgrade your style with us!"
                            />

                            <div id="sale">
                                <Showcase
                                    type="onSale"
                                    heading="SAVVY STEALS"
                                    updateAndShowSingleProductData={
                                        this.updateAndShowSingleProductData
                                    }
                                />
                            </div>

                            <Banner
                                title="Your style, our passion"
                                subtitle="- find your next outfit here!"
                            />
                        </div>
                    )}
                {/* footer */}
                <Footer />
            </div>
        )
    }
}
