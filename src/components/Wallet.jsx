import { Footer, NavBar } from ".";
import { motion } from "framer-motion";

function Wallet() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center flex-col min-h-[83vh]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center flex-col gap-2 mx-auto min-w-20 w-full"
        >
          <div className="bg-gray-800 h-[70vh] w-[90%] max-w-[700px] rounded-lg py-4 flex items-center flex-col">
            {/* Network and Wallet Details */}
            <div className="bg-gray-800 h-10 w-[50%] min-w-[320px] rounded-xl flex overflow-hidden justify-center border border-gray-500">
              <div className="w-[15%] max-w-[50px] text-white text-center"></div>
              <div className="flex-1 border-x-2 border-gray-500  text-center flex items-center text-xl p-2 cursor-pointer">
                <div className="text-gray-300 w-[90%]">Wallet 1</div>
                <div>
                  <svg
                    width="18px"
                    height="25px"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-[15%] max-w-[50px] text-white text-center"></div>
            </div>

            {/* Balance */}
            <div className="text-gray-300 text-5xl mt-20 font-semibold tracking-wide">
              $ 534.04
            </div>

            {/* Make Transactions */}
            <div className="pt-16 flex justify-between w-[30%] min-w-[200px]">
              <div className="flex flex-col items-center gap-2">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="pt-2 bg-slate-300 text-gray-700 mt-4 rounded-full w-10 pb-2 font-semibold flex items-center justify-center"
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
                      fill="#000"
                    />
                  </svg>
                </motion.button>
                <div>Send</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="pt-2 bg-slate-300 text-gray-700 mt-4 rounded-full w-10 pb-2 font-semibold flex items-center justify-center"
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
                      fill="#000"
                    />
                  </svg>
                </motion.button>
                Receive
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Wallet;
