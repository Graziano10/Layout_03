

const Navbar = () => {

    const logo = {
        backgroundImage:
          "url('/src/assets/Progetto senza titolo (1).svg')",
      };

    return <>
        <nav>
            <div className="flex justify-around items-center h-14 font-bold text-tertiary tracking-wider">
                <div className="hover:text-invert">HOME</div>
                <div className="hover:text-invert">EXPERIENCES</div>
                {/* <div className="w-[200px] h-[150px] bg-cover bg-center" style={logo}></div> */}
                <div className="hover:text-invert">LOGO</div>
                <div className="hover:text-invert">SERVICES</div>
                <div className="hover:text-invert">CONTACT</div>
            </div>
        </nav>
    </>;
};

export default Navbar;