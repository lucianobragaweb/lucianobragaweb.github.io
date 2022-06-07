import Icon from '../assets/Icon.js'
export default () => {
    return (
        <footer className="h-12 flex items-center border-t border-gray-200">
            <div className="left-0 px-4 border-r border-gray-200">
                <span className="flex items-center justify-center h-12 focus:outline-none rounded-bl">
                    find me in:
                </span>
            </div>

            <div className="flex flex-1 items-center justify-between h-12">
                <div>
                    <nav aria-label="Global" className="flex">
                        <a href='https://www.linkedin.com/in/lucianobragaweb/' className="text-sm font-medium text-gray-100 hover:text-gray-50 flex items-center justify-center h-12 w-12 border-r border-gray-200" target='_blank'>
                            <Icon icon='linkedin' />
                        </a>
                        <a href='https://www.instagram.com/lucianobragaweb/' className="text-sm font-medium text-gray-100 hover:text-gray-50 flex items-center justify-center h-12 w-12 border-r border-gray-200" target='_blank'>
                            <Icon icon='instagram' />
                        </a>
                    </nav>
                </div>

                <div>
                    <nav aria-label="Global" className="flex">
                        <a href='https://github.com/lucianobragaweb' className="text-sm font-medium text-gray-100 hover:text-gray-50 flex items-center justify-center h-12 min-w-12 px-3 border-l border-gray-200" target='_blank'>
                            <span className='hidden lg:block mr-2'>@lucianobragaweb</span>
                            <Icon icon='github' />
                        </a>
                        {/* <a href='https://github.com/lucianobragaweb' className="text-sm font-medium text-gray-100 hover:text-gray-50 flex space-x-4" target='_blank'>
                            <span className='hidden'>@lucianobragaweb</span>
                            <Icon icon='github' />
                        </a> */}
                    </nav>
                </div>

                {/* <div className="min-w-0 flex-1">
                    <nav aria-label="Global" className="flex">
                        <a href='https://github.com/lucianobragaweb' className="text-sm font-medium text-gray-100 hover:text-gray-50 flex space-x-4" target='_blank'>
                            <span className='hidden'>@lucianobragaweb</span>
                            <Icon icon='github' />
                        </a>
                    </nav>
                </div> */}
            </div>
        </footer>
    )
}
