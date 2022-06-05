export default () => {
    return (
        <>
            <section className="flex-1 pt-16 pb-20 text-center lg:py-48 lg:text-left lg:order-first">
                <div className="px-4 sm:px-8 xl:pr-16">
                    <h1 className="text-4xl tracking-tight font-light text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">Hi all. I am</p>
                        <span className="block text-white text-5xl">Luciano Braga</span>
                        <p className="mt-3 max-w-md mx-auto text-lg text-green-link sm:text-xl md:mt-5 md:max-w-3xl"> &gt; Software Developer</p>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto font-extralight text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">Always with great interest in solving everyday problems through technology, especially computer programming, using languages for Web, Mobile or Desktop.</p>
                </div>
            </section>

            <section aria-labelledby="primary-heading" className="min-w-0 h-full flex flex-col flex-1 overflow-y-auto lg:order-last" >
                <h1 id="primary-heading" className="sr-only">Home</h1>
            </section>
        </>
    )
}
