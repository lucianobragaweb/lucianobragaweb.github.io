export default () => {
    return (
        <>
            <section aria-labelledby="primary-heading" className = "min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last" >
                <h1 id="primary-heading" className="sr-only">Home</h1>
                Home
            </section>

            <a href = '#test' className = "hidden lg:block lg:flex-shrink-0 lg:order-first" >
                <div className="h-full relative flex flex-col w-64 border-r border-gray-200 bg-gray-600 overflow-y-auto">
                    {/* <!-- Your content --> */ }
                </div>
            </a>
        </>
    )
}
