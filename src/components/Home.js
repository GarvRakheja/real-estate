"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import banner from "../assets/images/real-estate-banner.jpg";
import { IoIosArrowDown } from "react-icons/io";
import CityModal from './CityModal';
import { usePathname } from 'next/navigation';

const Home = () => {
    const [selectedCity, setSelectedCity] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    const handleCityChange = (city) => {
        setSelectedCity(city);
        setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const pathParts = pathname.split('/');
        const city = pathParts[pathParts.length - 1];
        if (city && city !== "city") {
            setSelectedCity(city);
        } else {
            setSelectedCity(null);
        }
    }, [pathname]);

    return (
        <>
            <div className="relative w-full">
                <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] relative">
                    <Image
                        src={banner}
                        alt="Real Estate"
                        layout="fill"
                        objectFit="cover"
                        priority
                        quality={100}
                        className="z-0"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 space-y-4 px-4 lg:gap-6">
                            <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium drop-shadow-md">Real Homes</h1>
                        <h1 className="text-2xl md:text-4xl lg:text-7xl text-[#ffc72d]">Encyclopedia For All New Projects</h1>
                        <button className="flex justify-center items-center gap-5"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <h1 className='text-xl md:text-3xl lg:text-5xl  text-white'>In</h1>
                            <div className='flex justify-center items-center gap-3'>
                                <h1 className='text-xl md:text-3xl lg:text-5xl text-white italic underline'> {selectedCity ? selectedCity : "City"}</h1>
                                <IoIosArrowDown className='h-12 w-12' />
                            </div>
                        </button>
                    </div>
                </div>
                {
                    selectedCity &&
                    <div className='text-center py-3 md:text-[27px] font-extrabold underline underline-offset-8 decoration-red-500'>
                        <h1>All New Projects in {selectedCity}</h1>
                    </div>
                }
            </div>

            {isModalOpen && (
                <CityModal
                    handleCityChange={handleCityChange}
                    closeModal={closeModal}
                />
            )}
        </>
    );
};

export default Home;
