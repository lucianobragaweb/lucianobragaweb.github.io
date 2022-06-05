import Icon from '../assets/Icon.js'
export default () => {
    return (
        <footer className="flex-shrink-0 relative h-12 flex items-center border-t border-gray-200">
            <div className="left-0 px-4 border-r border-gray-200">
                <a href='#test' className="flex items-center justify-center h-12 focus:outline-none rounded-bl">
                    find me in:
                </a>
            </div>

            <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between h-12">
                <div className="min-w-0 flex-1">
                    <nav aria-label="Global" className="flex">
                        <a href='#test' className="text-sm font-medium text-gray-100 hover:text-gray-50 flex items-center justify-center h-12 w-12 border-r border-gray-200">
                            <Icon icon='linkedin' />
                        </a>
                    </nav>
                </div>

                <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
                    <nav aria-label="Global" className="flex space-x-10">
                        <a href='#test' className="text-sm font-medium text-gray-100 hover:text-gray-50 flex space-x-4">
                            <span>@lucianobragaweb</span>
                            <Icon icon='github' />
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
