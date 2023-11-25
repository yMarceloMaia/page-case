import Image from 'next/image'

export default function SectionTop() {
    return (
        <section>
            <section className=' flex justify-between mt-10'>
                <Image
                    className='m-1 w-32 sm:w-52 object-contain'
                    src="/Clarifion_Logo.png"
                    width={180}
                    height={14}
                    alt='image'
                />
                <Image
                    className='m-1 w-32 sm:w-52 object-contain'
                    src="/mcaff-norton.png"
                    width={180}
                    height={14}
                    alt='image'
                />
            </section>

            <section className='flex flex-col items-center h-28 mt-10'>
                <h1 className='lg:text-5xl md:text-4xl text-2xl max-[450px]:w-52 text-center' >Wait ! Your Order In Progress</h1>
                <p className='text-center max-[450px]:w-80'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</p>
            </section>

            <section className='flex justify-between mt-10 '>
                <div className='flex items-center max-[768px]:flex-col'>
                    <Image
                        className='mr-4 max-[768px]:mr-0'
                        src="/ok.png"
                        width={40}
                        height={40}
                        alt='image'
                    />
                    <p className='max-[768px]:text-xs max-[768px]:mt-2'><span className='max-[768px]:hidden'>Step 1 :</span> Cart Review</p>
                </div>
                <div className='flex items-center max-[768px]:flex-col'>
                    <Image
                        className='mr-4 max-[768px]:mr-0'
                        src="/ok.png"
                        width={40}
                        height={40}
                        alt='image'
                    />
                    <p className='max-[768px]:text-xs max-[768px]:mt-2'><span className='max-[768px]:hidden'>Step 2 :</span> Checkout</p>
                </div>
                <div className='flex items-center max-[768px]:flex-col'>
                    <Image
                        className='mr-4 max-[768px]:mr-0'
                        src="/step3.png"
                        width={40}
                        height={40}
                        alt='image'
                    />
                    <p className='max-[768px]:text-xs max-[768px]:mt-2'><b><span className='max-[768px]:hidden'>Step 3 :</span> Special Offer</b></p>
                </div>
                <div className='flex items-center max-[768px]:flex-col '>
                    <Image
                        className='mr-4 max-[768px]:mr-0'
                        src="/step4.png"
                        width={40}
                        height={40}
                        alt='image'
                    />
                    <p className='max-[768px]:text-xs max-[768px]:mt-2'><span className='max-[768px]:hidden'>Step 4 :</span> Confirmation</p>
                </div>
            </section>
        </section>
    )
}