import React from 'react'

function Card({img, title, name, btnText="Hello"}) {
    return (
        <>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-4">
                <img className="w-24 h-24 rounded-full mx-auto" src={img} alt="" width="384" height="512" />
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption>
                        <div>
                            {name}
                        </div>
                        <div>
                            {title}
                        </div>
                        <button className='border-t-neutral-50 border-spacing-2 shadow-lg'>{btnText}</button>
                    </figcaption>
                </div>
            </figure>
        </>
    )
}

export default Card