export default function SectionMiddle() {
  return (
    <section className='bg-custom-gray-100 flex mt-10'>
      <div className=' w-2/4 max-[768px]:hidden'>
        <img
          className='ml-5 mt-5'
          src="/image_central.png"
          width={"90%"}
        />

        <div className='flex flex-col jutify-around justify-items-start bg-custom-gray-200 w-4/5 ml-5 mt-5 rounded-md max-[768px]:hidden'>
          <img
            className='ml-5 mt-5'
            src="/person-info.png"
            width={237}
            height={48}
          />
          <p className='ml-5'>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
        </div>
      </div>

      <div className='justify-start flex flex-col w-2/4 max-[768px]:w-full  mr-5 mt-5'>

        <div className='text-3xl max-[768px]:text-center '>
          <p className='max-[768px]:text-2xl max-[768px]:inline'><span className='text-custom-blue-500'>ONE TIME ONLY</span> Special Price For 6 </p>
          <p className='max-[768px]:inline max-[768px]:text-2xl'>Extra Clarifon For Only <span className='text-custom-blue-500'>$14 Each</span></p>
          <p className='max-[768px]:inline max-[768px]:text-2xl'>($84.00 Total!)</p>
        </div>

        <div className='flex  mt-5'>
          <img
            className='mr-4 max-[768px]:w-20 max-[768px]:h-20'
            src="/air_lonizer.png"
            width={134}
            height={134}
          />

          <div>

            <div className='flex flex-col justify-between h-full'>
              <p>Clarifion Air Ionizer</p>
              <img
                className='mr-4'
                src="/stars.png"
                width={98}
                height={28}
              />

              <label className='text-xs'>
                <input checked type='radio' className='mr-3' />left in Stock
              </label>
              <p className='text-xs max-[768px]:hidden'>Simply plug a Clarifion into any standard outlet and replace bulky expensive air purifiers with a simple</p>

            </div>
          </div>
        </div>
        <p className='text-xs mt-2 text-center min-[768px]:hidden'>Simply plug a Clarifion into any standard outlet and replace bulky expensive air purifiers with a simple</p>
        <div className='flex mt-5 justify-items-center'>
          <img
            className='mr-4 '
            src="/tick.png"
            width={"22px"}
            height={"22px"}
          />
          <p className='max-[768px]:text-xs h-6'>Negative Ion Technology may help with allergens</p>
        </div>
        <div className='flex mt-2 justify-items-center'>
          <img
            className='mr-4'
            src="/tick.png"
            width={"22px"}
            height={"22px"}
          />
          <p className='max-[768px]:text-xs h-6'>Designed for air rejuvenation</p>
        </div>
        <div className='flex mt-2 justify-items-center'>
          <img
            className='mr-4'
            src="/tick.png"
            width={"22px"}
            height={"22px"}
          />
          <p className='max-[768px]:text-xs h-6'>Perfect for every room in all types of places</p>

        </div>

        <div className='flex bg-custom-blue-100 h-14 items-center mt-4 rounded-xl mt-7'>
          <img
            className='mr-4 ml-2 w-8 max-[768px]:w-6'
            src="/percent.png"
          />
          <p className='max-[768px]:text-sm'>Save <span className='text-custom-blue-500'>53%</span> and get <span className='text-custom-blue-500'>6extra Clarifision</span> for only <span className='text-custom-blue-500'>$14 Each</span>.</p>
        </div>

        <button className='bg-custom-green text-custom-white h-14 rounded-full mt-7 max-[768px]:text-sm'> YES - CLAIM MY DISCOUNT &rarr;	</button>

        <div className='flex justify-around items-center mt-4 text-xs border-custom-border border rounded shadow-lg h-10 max-[1190px]:hidden'>
          <p>Free Shipping</p>
          <span className='text-custom-border'>|</span>
          <div className='flex items-center'>
            <img
              className='mr-4 ml-2'
              src="/lock.png"
              width={12}
              height={12}
            />
            <p>Secure 256-Bit SSL Encryption.</p>
          </div>

          <span className='text-custom-border'>|</span>
          <img
            className='mr-4 ml-2'
            src="/cards.png"
            width={180}
            height={14}
          />
        </div>
        <div className='flex flex-col justify-around items-center mt-4 text-xs border-custom-border border rounded shadow-lg h-20 min-[1190px]:hidden'>
          <div className='flex justify-around items-center w-full mt-2'>
            <p>Free Shipping</p>
            <span className='text-custom-border'>|</span>
            <div className='flex items-center'>
              <img
                className='mr-4 ml-2'
                src="/lock.png"
                width={12}
                height={12}
              />
              <p>Secure 256-Bit SSL Encryption.</p>
            </div>
          </div>
          <div className='w-4/5 flex flex-col justify-around items-center h-10'>
            <hr className='w-full border-custom-border'/>
            <img
              className='mr-4 ml-2'
              src="/cards.png"
              width={180}
              height={14}
            />
          </div>
        </div>
        <section className='flex flex-col items-center mt-5'>
          <h1 className='text-custom-red text-lg max-[768px]:text-xs'><u>NO THANKS, I DON'T WANT THIS.</u></h1>
          <section className='flex mt-5'>
            <img
              className='mr-4 ml-2 w-20 h-20 max-[768px]:w-12 max-[768px]:h-12'
              src="/selo.png"
             
            />
            <p className='max-[768px]:text-xs'>If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
          </section>
        </section>

      </div>

    </section>
  )
}