import Image from 'next/image'

export default function Footer() {

    return (
        <footer className='bg-custom-footer flex justify-around items-center text-custom-white'>
            <p>Copyright (C) 2023  |  clarifionsupport@clarifion.com</p>
            <section className='flex items-center'>
                <Image
                    className='mr-4 ml-2'
                    src="/lock.png"
                    width={12}
                    height={12}
                />
                <p>Secure 256-Bit SSL Encryption.</p>
            </section>
        </footer>
    )
}
