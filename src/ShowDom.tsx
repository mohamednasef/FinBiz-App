import React, { useState, ReactNode } from 'react';

interface ShowDomProps {
    children: ReactNode;
}

const ShowDom: React.FC<ShowDomProps> = ({ children }) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div>
            {children}
        </div>
    );
};

export default ShowDom;
