import React, {FC, ReactElement, useCallback} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import Button from "@/components/Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: ReactElement;
    footer?: ReactElement;
    actionLabel: string;
    disabled?: boolean;
}

const Modal: FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
                                   disabled

                               }) => {

    const handlerClose = useCallback(() => {
        if(disabled) {
            return;
        }
        onClose()
    },[disabled, onClose])

    const handlerSubmit = useCallback(() => {
        if(disabled) {
            return;
        }
        onSubmit()
    },[disabled, onSubmit])

    if (!isOpen) {
        return null
    }

    return (
        <>
            <div className='
            justify-center
            items-center
            flex
            overflow-x-hidden
            overflow-y-auto
            fixed
            inset-0
            z-50
            outline-none
            focus:outline-none
            bg-neutral-800/70
            '>
                <div className='
                relative
                w-full
                lg:w-3/6
                my-6
                mx-auto
                lg:max-w-3xl
                h-full
                lg:h-auto
                '>
                {/* Content */}
                    <div className='
                    h-full
                    lg:h-auto
                    border-0
                    rounder-lg
                    shadow-lg
                    relative
                    flex
                    flex-col
                    w-full
                    bg-black
                    outline-none
                    focus:outline-none
                    '>
            {/*  Header */}
                        <div className='
                        flex
                        item-center
                        justify-between
                        p-10
                        rounded-t
                        '>
                            <h3 className='text-3xl font-semibold text-white'>{title}</h3>
                            <button
                                onClick={handlerClose}
                                className='
                        p-1
                        ml-auto
                        border-0
                        text-white
                        hover:opacity-70
                        transition
                        '>
                                <AiOutlineClose size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className='relative p-10 flex-auto'>
                            {body}
                        </div>
                        {/*  Footer  */}
                        <div className='flex flex-col gap-2 p-10'>
                            <Button
                                disabled
                                label={actionLabel}
                                secondary
                                fullWidth
                                onClick={handlerSubmit}/>
                            {footer}
                        </div>
                    </div>

                </div>

            </div>
        </>

    );
};

export default Modal;