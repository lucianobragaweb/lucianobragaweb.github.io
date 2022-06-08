import Icon from '../assets/Icon.js'
import { Link } from 'react-router-dom'
export default () => {
    return (
        <nav aria-label="Sidebar" className="hidden md:block md:flex-shrink-0 bg-gray-600/40 backdrop-blur-lg md:overflow-y-auto border-r border-gray-200 z-10">
            <div className="relative w-16  flex flex-col p-3 space-y-3">
                <Link to="/" className="link-menu">
                    <span className="sr-only">Home</span>
                    <Icon icon='terminal' />
                </Link>

                {/* teste */}

                {/* <Link to="/about" className="text-gray-400 hover:text-gray-50 flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-lg">
                    <span className="sr-only">About</span>
                    <Icon icon='profile' />
                </Link> */}
            </div>
        </nav>
    )
}
