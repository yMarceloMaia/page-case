import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Image from 'next/image'

export default function Home() {
  return (
    <div>

      <Header></Header>

      <main className='w-4/5 flex flex-col m-auto h-screen max-w-screen-xl'>
        <section className=' flex justify-between mt-10'>
          <Image
            className='m-1'
            src="/Clarifion_Logo.png"
            width={192}
            height={40}
          />
          <Image
            className='m-1'
            src="/mcaff-norton.png"
            width={202}
            height={32}
          />
        </section>

        <section className='flex flex-col items-center h-28 mt-10'>
          <h1 className='text-5xl' >Wait ! Your Order In Progress</h1>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</p>
        </section>

        <section className='flex justify-between mt-10'>
          <div className='flex items-center'>
            <Image
              className='mr-4'
              src="/ok.png"
              width={40}
              height={40}
            />
            <p>Step 1 : Cart Review</p>
          </div>
          <div className='flex items-center'>
            <Image
              className='mr-4'
              src="/ok.png"
              width={40}
              height={40}
            />
            <p>Step 2 : Checkout</p>
          </div>
          <div className='flex items-center'>
            <Image
              className='mr-4'
              src="/step3.png"
              width={40}
              height={40}
            />
            <p>Step 3 : Special Offer</p>
          </div>
          <div className='flex items-center'>
            <Image
              className='mr-4'
              src="/step4.png"
              width={40}
              height={40}
            />
            <p>Step 4 : Confirmation</p>
          </div>
        </section>

        <section className='bg-custom-gray-100 flex mt-10'>
          <div className=' w-2/4'>
            <Image
              className='ml-5 mt-5'
              src="/image_central.png"
              width={575}
              height={591}
            />

            <div className='flex flex-col jutify-around justify-items-start bg-custom-gray-200 w-4/5 ml-5 mt-5 rounded-md'>
              <Image
                className='ml-5 mt-5'
                src="/person-info.png"
                width={237}
                height={48}
              />
              <p className='ml-5'>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
            </div>
          </div>

          <div className='justify-start flex flex-col w-2/4 mr-5 mt-5'>

            <div className='text-3xl'>
              <p><span className='text-custom-blue-500'>ONE TIME ONLY</span> Special Price For 6</p>
              <p>Extra Clarifon For Only <span className='text-custom-blue-500'>$14 Each</span></p>
              <p>($84.00 Total!)</p>
            </div>

            <div className='flex  mt-5'>
              <Image
                className='mr-4'
                src="/air_lonizer.png"
                width={134}
                height={134}
              />

              <div>

                <div className='flex flex-col justify-between h-full'>
                  <p>Clarifion Air Ionizer</p>
                  <Image
                    className='mr-4'
                    src="/stars.png"
                    width={98}
                    height={28}
                  />

                  <label className='text-xs'>
                    <input checked type='radio' className='mr-3' />left in Stock
                  </label>
                  <p className='text-xs'>Simply plug a Clarifion into any standard outlet and replace bulky expensive air purifiers with a simple</p>

                </div>
              </div>
            </div>
            <div className='flex mt-5'>
              <Image
                className='mr-4'
                src="/tick.png"
                width={22}
                height={22}
              />
              <p>Negative Ion Technology may help with allergens</p>
            </div>
            <div className='flex mt-2'>
              <Image
                className='mr-4'
                src="/tick.png"
                width={22}
                height={22}
              />
              <p>Designed for air rejuvenation</p>
            </div>
            <div className='flex mt-2'>
              <Image
                className='mr-4'
                src="/tick.png"
                width={22}
                height={22}
              />
              <p>Perfect for every room in all types of places</p>

            </div>

            <div className='flex bg-custom-blue-100 h-14 items-center mt-4 rounded-xl mt-7'>
              <Image
                className='mr-4 ml-2'
                src="/percent.png"
                width={32}
                height={32}
              />
              <p>Save <span className='text-custom-blue-500'>53%</span> and get <span className='text-custom-blue-500'>6extra Clarifision</span> for only <span className='text-custom-blue-500'>$14 Each</span>.</p>
            </div>

            <button className='bg-custom-green text-custom-white h-14 rounded-full mt-7'> YES - CLAIM MY DISCOUNT &rarr;	</button>

            <div className='flex justify-around items-center mt-4 text-xs border-custom-border border rounded shadow-lg h-10'>
              <p>Free Shipping</p>
              <span className='text-custom-border'>|</span>
              <div className='flex items-center'>
                <Image
                  className='mr-4 ml-2'
                  src="/lock.png"
                  width={12}
                  height={12}
                />
                <p>Secure 256-Bit SSL Encryption.</p>
              </div>
              <span className='text-custom-border'>|</span>
              <Image
                className='mr-4 ml-2'
                src="/cards.png"
                width={180}
                height={14}
              />
            </div>
            <section className='flex flex-col items-center mt-5'>
              <h1 className='text-custom-red text-lg'><u>NO THANKS, I DON'T WANT THIS.</u></h1>
              <section className='flex mt-5'>
                <Image
                  className='mr-4 ml-2'
                  src="/selo.png"
                  width={80}
                  height={80}
                />
                <p>If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
              </section>
            </section>

          </div>

        </section>


      </main>
      <Footer />
    </div>
  )
}
