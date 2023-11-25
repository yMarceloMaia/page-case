import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='bg-custom-footer flex justify-around items-center text-custom-white max-[768px]:flex-col max-[768px]:text-xs  min-[1300px]:mt-[300px] max-[1200px]:mt-[500px] min-[1000px]:mt-[500px] max-[1000px]:mt-[550px] min-[768px]:mt-[550px] max-[768px]:mt-96 min-[768px]:mt-96 min-[440px]:mt-80 '>
            <p>Copyright (C) 2023  |  clarifionsupport@clarifion.com</p>
            <section className='flex items-center'>
                <Image
                    className='mr-4 ml-2'
                    src="/lock.png"
                    width={12}
                    height={12}
                    alt='image'
                />
                <p>Secure 256-Bit SSL Encryption.</p>
            </section>
        </footer>
    )
}
