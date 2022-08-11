import React from 'react';

function Footer () {
    function thisYear () {
        const year = new Date().getFullYear();
        return year;
    };

    return (
        <div>
            <p>Copyright &copy; <span>{thisYear()}</span></p>
        </div>
    )
}

export default Footer;