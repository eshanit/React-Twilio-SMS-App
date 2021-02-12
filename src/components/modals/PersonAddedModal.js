import React, { useEffect } from 'react';

const PersonAddedModal = ({ closeModal ,modalContent, modalHeader, modalHeaderTextColor}) => {

    useEffect(() => {
        setTimeout(()=>{
            closeModal();
        }, 3000)
    })

    return (
        <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"        
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h4 className = {`font-semibold text-center ${modalHeaderTextColor}`}>
                    {modalHeader}
                </h4>
                </div>
                {/*body*/}

                    <div className="relative p-6 flex-auto">
                        <p className="my-4 text-gray-600 text-lg leading-relaxed">{modalContent}</p>
                    </div>
            </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default PersonAddedModal