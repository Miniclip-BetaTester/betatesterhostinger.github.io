import React from 'react'
import { DiscussionEmbed } from "disqus-react"

const Comment = () => {
    const disqusShortname = "hostinger-clone"

    const disqusConfig = {
        url: "http://localhost:3000",
        identifier: '123',
        title: "Demo Post"
    }
    return (
        <div>

            <section data-aos={"fade-right"} className="-mb-14 bg-gradient-to-r from-pink-300 to-sky-300 sm:py-16 ">
                <div className="px-4  mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 py-12 lg:grid-cols-3 gap-y-12 lg:gap-x-8 xl:gap-x-20">
                        <div>
                        </div>
                        <DiscussionEmbed
                            shortname={disqusShortname}
                            config={disqusConfig}
                        />


                    </div>
                </div>
            </section>

        </div>
    )
}

export default Comment