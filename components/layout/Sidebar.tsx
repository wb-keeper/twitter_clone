import React from 'react';
import {BsBellFill, BsHouseFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";
import SidebarLogo from "@/components/layout/SidebarLogo";
import SidebarItem from "@/components/layout/SidebarItem";
import {BiLogOut} from "react-icons/bi";
import SidebarTweetButton from "@/components/layout/SidebarTweetButton";


const Sidebar = (props) => {

    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill
        },
        {
            label: 'Profile',
            href: '/users/123',
            icon: FaUser
        }
    ]

    return (
        <div className='col-span-1 h-full pr-4 md:pr-6'>
        <div className='flex flex-col items-end'>
            <div className='space-y-2 lg:w-[230px]'>
                <SidebarLogo />
                {items.map((e) => (
                    <SidebarItem
                    key={e.href}
                    href={e.href}
                    label={e.label}
                    icon={e.icon}
                    />
                    ))}
                <SidebarItem onClick={() => {}} icon={BiLogOut} label='Logout' />
                <SidebarTweetButton />
            </div>
        </div>
        sidebar
    </div>

        )
}

export default Sidebar;