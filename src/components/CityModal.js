import React from 'react';
import * as config from "../utils/config";
import { RxCross2 } from "react-icons/rx";

const CityModal = ({ handleCityChange, closeModal }) => {
    return (
        <div id="default-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Select a City
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={closeModal}>
                            <RxCross2  className='h-10 w-10'/>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="md:p-5 space-y-4">
                        <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-3 ">
                            {config?.cities?.map((city) => (
                                <a
                                    key={city.id}
                                    href={city.href}
                                    className="block py-3 px-4 text-[12px] md:text-xl  hover:bg-gray-100 rounded-lg"
                                    onClick={() => handleCityChange(city.name)}
                                >
                                    {city.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CityModal;
