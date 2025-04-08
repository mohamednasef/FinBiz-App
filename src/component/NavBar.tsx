import React, { FC } from 'react';
import Button from '../shared/Button';
const NavBar: FC = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-responsive">
                    <div className="logo">
                        <img src="/logo-dark.svg" alt="Logo" className="dark" />
                        <img src="/logo-white.svg" alt="Logo" className="white" />
                    </div>
                    <div className="menu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="25" height="25" x="0" y="0" viewBox="0 0 464.205 464.205"  xmlSpace="preserve" ><g><path d="M435.192 406.18H29.013C12.989 406.18 0 393.19 0 377.167s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013zM435.192 261.115H29.013C12.989 261.115 0 248.126 0 232.103s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012zM435.192 116.051H29.013C12.989 116.051 0 103.062 0 87.038s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z" fill="#828282" opacity="1" data-original="#000000" ></path></g></svg>
                    </div>
                </div>
                <div className="nav-bar">

                    <div className="logo">
                        <img src="/logo-dark.svg" alt="Logo" className="dark" />
                        <img src="/logo-white.svg" alt="Logo" className="white" />
                    </div>
                    <ul>
                        <li><a href="#Product">Product</a></li>
                        <li><a href="#about">Pages</a></li>
                        <li><a href="#services">Integrations</a></li>
                        <li><a href="#contact">Blog</a></li>
                        <li><a href="#contact">Pricing</a></li>
                    </ul>

                    <Button variant="primary"  >Get started </Button>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;
