import React from 'react';
import noteAppLogo from "../assets/images/noteAppIcon.png"

function Header() {
    return (
        <div className="flex items-center gap-2 mb-4">
            <img
                src={noteAppLogo}
                alt="logo"
                className="w-[72px] h-[72px] md:w-[86px] md:h-[86px]"
            />
            <h1 className="text-[32px] md:text-[48px] font-semibold leading-none">Note App</h1>
        </div>
    );
}

export default Header;