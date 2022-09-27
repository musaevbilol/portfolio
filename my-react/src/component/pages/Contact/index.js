import Layout from "../../shared_components/Layout";

function Contact() {
  return (
    <Layout>
      <>
        <div className="mt-20">
        <img
          src="./media/contact3.jpg"
          className=" md:h-[450px] object-cover w-full bg-cover bg-center p-4"
        ></img>
        </div>

        {/* ------------------------------ */}
        <div class="container my-24 px-6 mx-auto">
          <section class="mb-32 text-gray-800">
            <div class="flex flex-wrap">
              <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                <h2 class="text-4xl font-bold mb-6">Contact us</h2>
                <p class="text-gray-500 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, modi accusantium ipsum corporis quia asperiores
                  dolorem nisi corrupti eveniet dolores ad maiores repellendus
                  enim autem omnis fugiat perspiciatis? Ad, veritatis.
                </p>
                <p class="text-gray-500 mb-2">Uzbekiston,Toshkent</p>
                <p class="text-gray-500 mb-2">+998 901189330</p>
                <p class="text-gray-500 mb-2">info@gmail.com</p>
              </div>
              <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                <form
                  method="POST"
                  action="https://getform.io/f/13df1d47-015c-46ea-a968-54bab60f9370"
                >
                  <div class="form-group mb-6">
                    <input
                      type="text"
                      class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Name"
                    />
                  </div>
                  <div class="form-group mb-6">
                    <input
                      type="email"
                      class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput8"
                      placeholder="Email address"
                    />
                  </div>
                  <div class="form-group mb-6">
                    <textarea
                      class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                      id="exampleFormControlTextarea13"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div class=" mb-8"></div>
                  <button
                    type="submit"
                    class="
            w-full
            px-6
            py-2.5
            bg-black
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-slate-600
            transition
            duration-150
            ease-in-out"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </>
    </Layout>
  );
}

export default Contact;
