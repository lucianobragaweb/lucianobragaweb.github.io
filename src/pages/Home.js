import logo from '../assets/logo.svg'
export default () => {
    return (
        <>
            <section className="flex-1 pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 sm:px-8 xl:pr-16">
                    <h1 className="text-4xl tracking-tight font-light text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                        <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">Hi all. I am</p>
                        <span className="block text-white text-5xl">Luciano Braga</span>
                        <p className="mt-3 max-w-md mx-auto text-lg text-green-link sm:text-xl md:mt-5 md:max-w-3xl"> &gt; Software Developer</p>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto font-extralight text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">Always with great interest in solving everyday problems through technology, especially computer programming, using languages for Web, Mobile or Desktop.</p>
                </div>
            </section>

            <section className="flex-1 pt-16 pb-20 text-center lg:py-48 lg:text-left relative">
                <div className='h-96 w-64 absolute lg:right-72 -top-10 lg:top-32 rounded-full bg-gradient-to-b from-green-link blur-3xl -rotate-45'></div>
                <div className='h-96 w-96 absolute right-0 lg:right-0 top-32 lg:top-64 rounded-full bg-gradient-to-r from-purple-700 blur-3xl'></div>
                <div className='h-full w-96 mx-auto rounded-lg lg:shadow-lg lg:backdrop-blur-sm lg:bg-white/10 p-4 flex items-center'>
                    <img src={ logo } alt="logo" className='w-56 h-56 mx-auto opacity-90' />
                </div>
            </section>
        </>
    )
}
