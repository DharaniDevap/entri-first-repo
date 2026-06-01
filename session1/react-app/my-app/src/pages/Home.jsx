import { Link } from "react-router-dom"

function Home(){
    return (
        <div>
            <h1> Welcome to Home Page</h1>
            <Link to= {'/about'}>
            <button>About</button>
            </Link>
            <link to= {'/contact'}>
            <button>Contact Info</button>
            </Link>

        </div>
    )
}
export default Home