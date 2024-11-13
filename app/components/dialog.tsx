"use client"

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";


interface DialogProps {
    children: React.ReactNode,
    trigger?: React.ReactNode,
    open: boolean
    setOpen: (open: boolean) => void
}
export function Dialog({ children, trigger, open, setOpen }: DialogProps) {
    //const [isModalOpen, setIsModalOpen] = useState<boolean>(open || false);

    // useEffect(() => {
    //     if (open != undefined)
    //         setIsModalOpen(open)
    // }, [open])

    //const openModal = () => setIsModalOpen(true);
    //const closeModal = () => setIsModalOpen(false);


    return (
        <>
            {trigger && (
                <div
                    onClick={() => setOpen(true)}
                >
                    {trigger}
                </div>
            )}

            {open && createPortal
                (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg min-w-md max-w-lg relative">
                            <button
                                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                                onClick={() => setOpen(false)}
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