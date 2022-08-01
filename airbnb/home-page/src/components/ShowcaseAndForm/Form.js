import React from "react";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

const Form = () => {
    return (
        <section className="my-4 mx-5">
            <div>
                <h3 className="font-bold text-2xl mb-1">
                    Find places to stay on Airbnb
                </h3>
                <p className="font-light text-gray-600">
                    Discover entire homes and private rooms perfect for any
                    trip.
                </p>
            </div>

            <form action="" className="mt-4">
                <div className="border rounded-lg border-1">
                    <label
                        htmlFor="location"
                        className="pt-2 pl-3 text-xs font-semibold"
                    >
                        LOCATION
                    </label>
                    <input
                        type="text"
                        id="location"
                        className="mt-0 pt-0 pl-3 pb-1 w-full border-none text-gray-900 focus:outline-none"
                        placeholder="Anywhere"
                    />
                </div>

                <div className="border rounded-lg border-1 mt-2 flex">
                    <div className="border-r ">
                        <label
                            htmlFor="checkin"
                            className="pt-2 pl-3 text-xs font-semibold"
                        >
                            CHECK IN
                        </label>
                        <input
                            type="text"
                            id="checkin"
                            className="mt-0 pt-0 pl-3 pb-1 w-full border-none text-gray-900 focus:outline-none"
                            placeholder="Add Date"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="location"
                            className="pt-2 pl-3 text-xs font-semibold"
                        >
                            CHECK OUT
                        </label>
                        <input
                            type="text"
                            id="location"
                            className="mt-0 pt-0 pl-3 pb-1 w-full border-none text-gray-900 focus:outline-none"
                            placeholder="Add Date"
                        />
                    </div>
                </div>

                <div className="border rounded-lg border-1 mt-2 flex">
                    <div className="border-r ">
                        <label
                            htmlFor="checkin"
                            className="pt-2 pl-3 text-xs font-semibold"
                        >
                            ADULT
                        </label>
                        <input
                            type="number"
                            id="checkin"
                            className="mt-0 pt-0 pl-3 pb-1 w-full border-none text-gray-900 focus:outline-none"
                            value="2"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="location"
                            className="pt-2 pl-3 text-xs font-semibold"
                        >
                            CHILDREN
                        </label>
                        <input
                            type="number"
                            id="location"
                            className="mt-0 pt-0 pl-3 pb-1 w-full border-none text-gray-900 focus:outline-none"
                            value="0"
                        />
                    </div>
                </div>

                <div>
                    <p className="text-xs font-semibold ml-5 mt-3">AMENITIES</p>
                </div>

                <div className="mt-3">
                    <button className="border rounded-3xl pr-4 pl-4 pt-2 pb-2 mr-1 hover:border-black">
                        Hot tub
                    </button>
                    <button className="border rounded-3xl pr-4 pl-4 pt-2 pb-2 mr-1 hover:border-black">
                        Pool
                    </button>
                    <button className="border rounded-3xl pr-4 pl-4 pt-2 pb-2 mr-1 hover:border-black">
                        Wifi
                    </button>
                </div>

                <button className="main_color mt-5 p-2 w-full rounded-lg text-center">
                    <div className="flex items-center justify-center">
                        <IconContext.Provider
                            value={{ color: "white", size: ".8em" }}
                        >
                            <FaSearch className="search_button" />
                        </IconContext.Provider>
                        <p className="search_button pl-2 text-white font-medium">
                            Search
                        </p>
                    </div>
                </button>
            </form>
        </section>
    );
};

export default Form;
