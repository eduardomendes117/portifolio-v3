import React from "react";

const Footer = () => (
    <footer className="text-center text-gray-900 w-full max-w-5xl mx-auto py-4">
        <p>
            &copy; {new Date().getFullYear()} Eduardo Mendes. Todos os direitos reservados.
        </p>
    </footer>
);

export default Footer;