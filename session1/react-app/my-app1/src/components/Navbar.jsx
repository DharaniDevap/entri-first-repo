function Navbar() {
    return(
        <nav className=" bg-black sticky top-0 h-20 text-white flex justify-between px-[80px] py-[20px] ">
            <img src="" alt="logo" />
            <div className="flex gap-3">
                <button>Home</button>
                <button>About</button>
                <button>Blogs</button>
                <button>Contacts</button>

            </div>

        </nav>
    );
}
export default Navbar;