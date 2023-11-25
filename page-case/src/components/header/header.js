export default function Header() {

    return (
        <header className="w-full flex h-10 bg-custom-header justify-center items-center gap-10">
            <section className="flex items-center">
                <img
                    className='m-1 min-[768px]:hidden'
                    src="/Layer_2.png"
                    width={22}
                    height={22}
                />
                <img
                    className='m-1'
                    src="/fluent_checkmark-starburst-20-regular.png"
                    width={22}
                    height={22}
                />
                <p className='text-custom-white text-xs m-1'>30-DAY SATISFACTION GUARANTEE</p>
                <img
                    className='m-1 min-[768px]:hidden'
                    src="/Layer_1.png"
                    width={22}
                    height={22}
                />
            </section>
            <section className="flex items-center max-[768px]:hidden ">
                <img
                    className='m-1'
                    src="/ph_truck-light.png"
                    width={22}
                    height={22}
                />
                <p className='text-custom-white text-xs m-1'>FREE DELIVERY ON ORDERS OVER $40.00</p>
            </section>
            <section className="flex items-center max-[768px]:hidden">
                <img
                    className='m-1'
                    src="/mdi_cards-heart-outline.png"
                    width={22}
                    height={22}
                />
                <p className='text-custom-white text-xs m-1'>50.000+ HHAPPY CUSTOMERS</p>
            </section>
            <section className="flex items-center max-[768px]:hidden">
                <img
                    className='m-1'
                    src="/fluent_arrow-sync-checkmark-20-regular.png"
                    width={22}
                    height={22}
                />
                <p className='text-custom-white text-xs m-1'>100% MONEY BACK GUARANTEE</p>
            </section>
        </header>
    )
}
