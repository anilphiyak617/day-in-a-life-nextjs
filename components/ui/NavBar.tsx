import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="">
            <section>
                <h1> Day in a life of a Dreamer </h1>

                <div className="navContent">
                    <div className="navLinks">
                        Posts
                        {/* <Link to="/">Posts</Link> */}
                    </div>
                </div>
            </section>
        </nav>
    )
}