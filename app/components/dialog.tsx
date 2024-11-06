"use client"

import { useState } from "react";
import { createPortal } from "react-dom";


interface DialogProps {
    children: React.ReactNode,
    trigger: React.ReactNode,
    open?: boolean
}
export function Dialog({ children, trigger, open }: DialogProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(open || false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <>
            <div
                onClick={openModal}
            >
                {trigger}
            </div>

            {isModalOpen && createPortal
                (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                            <button
                                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                                onClick={closeModal}
                            >
                                &times;
                            </button>
                            {children}
                        </div>
                    </div>, document.body
                )
            }
        </>
    )
}