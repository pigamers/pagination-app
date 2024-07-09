import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

export default function Products() {
    // https://fakestoreapi.com/products
    const [Products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                await axios
                    .get("https://fakestoreapi.com/products")
                    .then(res => {
                        setProducts(res.data);
                    })
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    })


    return (
        <>
            <div class="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                {
                    Products.map((product) => {
                        return (
                            <div class="rounded-md border h-full" id={product.id}>
                                <img
                                    src={product?.image}
                                    alt="Laptop"
                                    class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
                                />
                                <div class="p-4">
                                    <h1 class="inline-flex items-center text-lg font-semibold">
                                        {product.title}
                                    </h1>
                                    <p class="mt-3 text-sm text-gray-600">
                                        {product.description}
                                    </p>
                                    <div class="mt-4">
                                        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            # {product.category}
                                        </span>
                                    </div>
                                    <div class="mt-3 flex items-center space-x-2">
                                        <span class="block text-sm font-semibold pr-1">Colors : </span>
                                        {product.rating.rate}
                                    </div>
                                    <div class="mt-5 flex items-center space-x-2">
                                        <span class="block text-sm font-semibold pr-1">Size : </span>
                                        {product.rating.count}
                                    </div>
                                    <button
                                        type="button"
                                        class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        $ {product.price}
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}
