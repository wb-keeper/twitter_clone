import React, {useCallback, useState} from 'react';
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegister";
import Input from "@/components/Input";
import Modal from "@/components/Modal";

const LoginModal = () => {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onToggle = useCallback(() => {
        if (isLoading) {
            return ;
        }
        registerModal.onOpen()
        loginModal.onClose()
    },[isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async() => {
    try {
    setIsLoading(true)


        loginModal.onClose()
    }catch (error){
        console.log(error)
    } finally {
        setIsLoading(false)
    }
    },[loginModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            />
            <Input
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            />


        </div>
    )

    const footerContent = (
        <div className='text-neutral-400 text-center mt-4'>
            <p>First time using Twitter?</p>
            <span
                onClick={onToggle}
                className='
        cursor-pointer
        text-white
        hover:underline
        '>
            Create an account</span>
        </div>
    )

    return (
        <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title='Login'
        actionLabel='Sign in'
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
        />

    );
};

export default LoginModal;