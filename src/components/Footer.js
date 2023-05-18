import React from "react";

function Footer() {
    return (
        <footer className="footer col-3">
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'bottom',
                justifyContent: 'center',
                position: 'fixed',
                bottom: '0',
            }}>
                <a href="https://github.com/d-lil">
                    <img src="https://img.icons8.com/?size=1x&id=52539&format=png" alt="GitHub" />
                </a>
                <a href="">
                    <img src="https://img.icons8.com/?size=1x&id=43625&format=png" alt="Instagram" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;