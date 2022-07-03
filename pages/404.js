import React from 'react'
import Link from 'next/link'

const NotFound = () => {
    return (
        <>
            <section className="page_404">
                <div className="page_404__container container">

                    <div className="four_zero_four_bg">
                        <h1>404</h1>
                        <div className="contant_box_404">
                            <h3>
                                Look like you are lost
                            </h3>

                            <p>the page you are looking for not avaible!</p>

                            <Link href="/">
                                <a className='btn btn__blue'>Go to Home</a>
                            </Link>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default NotFound 