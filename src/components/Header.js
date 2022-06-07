import React from "react"
import { Link } from 'react-router-dom'
export default () => {
    return (
        <header className="flex-shrink-0 relative h-12 flex items-center border-b border-gray-200 bg-gray-600/40 backdrop-blur-lg z-10">
            <div className="left-0 px-4 border-r border-gray-200 max-w-80">
                <Link to="/" className="flex items-center justify-center h-12 focus:outline-none hover:text-gray-50">luciano-braga</Link>
            </div>

            <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
                <div className="min-w-0 flex-1">
                    <nav aria-label="Global" className="flex">
                        <ul className='flex justify-center'>
                            {/* <li className='border-gray-200 border-b-4 hover:border-orange-700 h-12 py-2.5 text-gray-100 hover:text-gray-50'>
                                <Link to="/about" className="text-sm font-medium border-r border-gray-200 h-12 px-4 py-3.5">_about-me</Link>
                            </li>
                            <li className='border-gray-200 border-b-4 hover:border-orange-700 h-12 py-2.5 text-gray-100 hover:text-gray-50'>
                                <Link to="/projects" className="text-sm font-medium border-r border-gray-200 h-12 px-4 py-3.5">_projects</Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>

                <div className="ml-10 flex-shrink-0 flex items-center space-x-10">
                    <nav aria-label="Global" className="flex">
                        <ul className='flex justify-center'>
                            <li className='border-gray-200 border-b-4 hover:border-orange-700 h-12 py-2.5 text-gray-100 hover:text-gray-50'>
                                <a href="https://lucianobragaweb.github.io/resume" className="text-sm font-medium border-l border-gray-200 h-12 px-4 py-3.5" target="_blank">_resume</a>
                            </li>
                        </ul>
                        {/* <ul className='flex justify-center'>
                            <li className='border-gray-200 border-b-4 hover:border-orange-700 h-12 py-2.5 text-gray-100 hover:text-gray-50'>
                                <Link to="/contact" className="text-sm font-medium border-l border-gray-200 h-12 px-4 py-3.5">_contact</Link>
                            </li>
                        </ul> */}
                    </nav>
                </div>
            </div>
        </header>
    )
}
