import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr"

function ProductLists() {

    const fetchItem = async () => {
        try {
            const res = await axios.get("http://localhost:5000/product");
            return res.data
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const {data: products} = useSWR('product', fetchItem)
    if (!products) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <button className="btn btn-accent mx-65 mt-5">Accent</button>
            <div className="flex justify-center">
                <div className="overflow-x-auto max-w-5xl w-full border border-gray-300 rounded-xl shadow-lg mt-5 bg-white transition-all duration-300 hover:shadow-xl">
                    <table className="table w-full table-fixed border-collapse border border-gray-300">
                        {/* Head */}
                        <thead className="bg-gray-200 text-gray-700 font-semibold">
                            <tr>
                                <th className="py-3 px-6 border border-gray-300 text-left w-16">No</th>
                                <th className="py-3 px-6 border border-gray-300 text-left">Product Name</th>
                                <th className="py-3 px-6 border border-gray-300 text-left w-32">Price</th>
                                <th className="py-3 px-6 border border-gray-300 text-left w-40">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {products.map((product, index) => (
                                <tr key={product.id} className="hover:bg-gray-100">
                                    <td className="py-3 px-6 border border-gray-300 text-left">{index + 1}</td>
                                    <td className="py-3 px-6 border border-gray-300 text-left font-semibold">{product.name}</td>
                                    <td className="py-3 px-6 border border-gray-300 text-left">{product.price}</td>
                                    <td className="py-3 px-6 border border-gray-300 text-left flex justify-center">
                                        <button className="bg-blue-500 text-white px-4 py-1 rounded-md mr-2 hover:bg-blue-600">Edit</button>
                                        <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ProductLists;
