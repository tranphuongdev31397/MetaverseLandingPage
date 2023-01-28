import React from 'react';
import styles from '../styles';
import { Text, TitleText } from './CustomTexts';

function WorldCard({
    bgImage = "bg-[url('../public/planet-02.png')]",
    bgBlur = 'blur-pink',
    title = 'The Upside Down',
}) {
    return (
        <div className="p-2 rounded-3xl bg-gray-500 bg-opacity-50 w-full h-full z-2 relative">
            <div className={`world-card-blur ${bgBlur} absolute z-1`} />
            <div
                className={`w-full h-full  bg-cover bg-no-repeat bg-center ${bgImage}  relative rounded-3xl z-10 flex items-end gap-2`}
            >
                <div className="flex flex-col p-4">
                    <div className="flex flex-row gap-2">
                        <div className="relative w-[44px] min-h-[24px]">
                            <img
                                src="./people-02.png"
                                className="w-[24px] h-[24px] object-contain z-[3] absolute left-0"
                            />
                            <img
                                src="./people-01.png"
                                className="w-[24px] h-[24px] object-contain z-[2] absolute left-[12px]"
                            />
                            <img
                                src="./people-03.png"
                                className="w-[24px] h-[24px] object-contain z-[1] absolute left-[24px]"
                            />
                        </div>
                        <p className="flex-1 font-normal text-white text-[12px] flex items-center">+ 264 has joined</p>
                    </div>
                    <TitleText title={title} textStyles={'text-[18px]'} />
                </div>
            </div>
        </div>
    );
}

export default WorldCard;
