import React, { Component } from "react"
import FacebookLogo from "../assets/svgFunctions/FacebookLogo"
import InstagramLogo from "../assets/svgFunctions/InstagramLogo"
import TikTokLogo from "../assets/svgFunctions/TikTokLogo"
import TwitterLogo from "../assets/svgFunctions/TwitterLogo"

export default class Footer extends Component {
    render() {
        return (
            <div className="flex flex-col gap-10 bg-slate-200 px-6 py-8 ">
                <div className="flex flex-wrap items-center justify-center gap-16 sm:px-36">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-sm text-slate-500">SHOPPING</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-slate-900 underline">
                                My Account
                            </p>
                            <p className="text-slate-900 underline">
                                Track Order
                            </p>
                            <p className="text-slate-900 underline">
                                Order History
                            </p>
                            <p className="text-slate-900 underline">
                                Store Locator
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h2 className="text-sm text-slate-500">
                            CUSTOMER SERVICE
                        </h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-slate-900 underline">
                                Shipping & Returns
                            </p>
                            <p className="text-slate-900 underline">FAQs</p>
                            <p className="text-slate-900 underline">
                                Sizing Guide
                            </p>
                            <p className="text-slate-900 underline">
                                Contact Us
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h2 className="text-sm text-slate-500">
                            MORE FROM SOLAE
                        </h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-slate-900 underline">About Us</p>
                            <p className="text-slate-900 underline">Blog</p>
                            <p className="text-slate-900 underline">Careers</p>
                            <p className="text-slate-900 underline">
                                Partnerships
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-sm text-slate-500">INSPIRATION</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-slate-900 underline">
                                What's Hot
                            </p>
                            <p className="text-slate-900 underline">
                                Style Tips
                            </p>
                            <p className="text-slate-900 underline">
                                Outfit Ideas
                            </p>
                            <p className="text-slate-900 underline">
                                Color Trends
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-end justify-between sm:px-12">
                    <p className="text-sm text-slate-500">
                        Copyright © 2023 Solae.
                    </p>
                    <div className="flex flex-col">
                        <h1 className="font-gugi text-4xl">SOLAE</h1>
                        <div className="flex justify-between">
                            <FacebookLogo className="h-6 w-6 cursor-pointer fill-slate-400 transition hover:scale-125" />
                            <InstagramLogo className="h-6 w-6 cursor-pointer fill-slate-400 transition hover:scale-125" />
                            <TwitterLogo className="h-6 w-6 cursor-pointer fill-slate-400 transition hover:scale-125" />
                            <TikTokLogo className="h-6 w-6 cursor-pointer fill-slate-400 transition hover:scale-125" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
