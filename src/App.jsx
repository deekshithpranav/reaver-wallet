import { useState, useEffect } from "react";
import { NavBar, Footer } from "./components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { solana, ethereum, bitcoin, ddaimg } from "./assets";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const serverUrl = "http://localhost:3000";
  const [blockchainType, setBlockchainType] = useState("");
  const [mnemonics, setMnemonics] = useState([]);

  //extenstion properties
  const [copy, setCopy] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.hasFocus()) {
      return;
    }
    setTimeout(() => {
      setCopy(false);
    }, 3000);
    navigator.clipboard.writeText(mnemonics).then(
      () => {
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.log(err);
      }
    );
  }, [copy]);

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  async function onNetworkSelect(path) {
    setBlockchainType(path);
    setIsRotated(!isRotated);
    try {
      const response = await fetch(`${serverUrl}/getMnemonics`);
      if (!response.ok) {
        throw new Error("Network response failed.");
      }
      const data = await response.json();
      setMnemonics(data.list);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <NavBar />
      {!blockchainType && (
        <div className="flex justify-center flex-col min-h-[83vh]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex justify-center flex-col gap-2 mx-auto min-w-20 tracking-tight"
          >
            <p className="text-white text-4xl font-extrabold">
              Welcome to Reaver Vault.
            </p>
            <p className="pl-1">
              Unlock a Universe of Wallets, All in One Place.
            </p>

            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="menu m-auto mt-10 "
            >
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                  isOpen ? "bg-slate-300" : "bg-slate-100"
                } text-xl font-semibold px-4 py-2 rounded-md text-gray-800 flex items-center gap-3`}
              >
                Choose a blockchain
                <motion.div
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0.55 }}
                >
                  <img
                    src={ddaimg}
                    className={`${isOpen ? "bg-slate-300" : "bg-slate-100"}`}
                    width={"20px"}
                  />
                </motion.div>
              </motion.button>
              <motion.ul
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.4,
                      delayChildren: 0.1,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
              >
                <motion.li variants={itemVariants}>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="pt-2 bg-slate-100 text-gray-700 mt-4 w-full rounded-lg pb-2 font-semibold text-left pl-6 flex items-center gap-4"
                    onClick={() => {
                      onNetworkSelect("501");
                    }}
                  >
                    <img
                      src={solana}
                      className="h-5 w-5 rounded-lg bg-slate-200"
                    />
                    Solana
                  </motion.button>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="pt-2 bg-slate-100 text-gray-700 mt-4 w-full rounded-lg pb-2 font-semibold text-left pl-6 flex items-center gap-4"
                    onClick={() => {
                      onNetworkSelect("60");
                    }}
                  >
                    <img
                      src={ethereum}
                      className="h-5 w-5 rounded-lg bg-slate-200"
                    />
                    Ethereum
                  </motion.button>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="pt-2 bg-slate-100 text-gray-700 mt-4 w-full rounded-lg pb-2 font-semibold text-left pl-6 flex items-center gap-4"
                    onClick={() => {
                      onNetworkSelect("0");
                    }}
                  >
                    <img
                      src={bitcoin}
                      className="h-5 w-5 rounded-lg bg-slate-200"
                    />
                    Bitcoin
                  </motion.button>
                </motion.li>
              </motion.ul>
            </motion.nav>
          </motion.div>
        </div>
      )}
      {blockchainType && (
        <div className="flex justify-center flex-col min-h-[83vh]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex justify-center flex-col items-center gap-6 mx-auto min-w-20 tracking-tight"
          >
            <p className="text-white text-4xl font-extrabold">
              Secret Recovery Mnemonic.
            </p>

            <div className="w-[80%] h-20 bg-gray-800 rounded-lg flex justify-content items-center p-5 mt-2 gap-7">
              <svg
                fill="#fff"
                height="30px"
                width="35px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <g id="XMLID_509_">
                  <path
                    id="XMLID_510_"
                    d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85
		S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M180,234.986V255c0,8.284-6.716,15-15,15
		s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986c0-13.785,11.215-25,25-25s25,11.215,25,25
		C190,223.162,186.068,230.421,180,234.986z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"
                  />
                </g>
              </svg>
              <p>
                Write it down, store it in a safe place, and{" "}
                <span className="font-bold">NEVER</span> share it with anyone.
              </p>
            </div>
            <div
              className={`w-4/5 max-w-lg rounded-lg px-6 pt-6 cursor-pointer ${
                copy ? "bg-gray-900" : "bg-gray-800"
              }`}
              onClick={() => {
                setCopy(true);
              }}
              role="copyButton"
            >
              <div className="grid grid-cols-3 gap-y-4 pl-10 card">
                {mnemonics.map((word, index) => (
                  <div
                    key={index}
                    value={word}
                    className={`${
                      index !== 9 ? "flex gap-5" : "flex gap-[14px] "
                    } items-center`}
                  >
                    <p>{index + 1}</p>
                    <p>{word}</p>
                  </div>
                ))}
              </div>
              <div className="border-t mt-4 border-gray-600 " />
              <div className="mt-2 text-center text-gray-400 text-sm pb-2">
                {copy ? "Copied" : "Click anywhere on this card to copy"}
              </div>
            </div>
            <div className="flex w-4/5 justify-between">
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="pt-2 bg-slate-100 text-gray-700 mt-4 rounded-lg pb-2 font-semibold flex items-center justify-center gap-4 w-1/3"
                onClick={() => onNetworkSelect(blockchainType)}
              >
                <motion.div
                  animate={isRotated ? { rotate: 0 } : { rotate: 720 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ originY: 0.55 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#000"
                      d="M14.9547098,7.98576084 L15.0711,7.99552 C15.6179,8.07328 15.9981,8.57957 15.9204,9.12636 C15.6826,10.7983 14.9218,12.3522 13.747,13.5654 C12.5721,14.7785 11.0435,15.5888 9.37999,15.8801 C7.7165,16.1714 6.00349,15.9288 4.48631,15.187 C3.77335,14.8385 3.12082,14.3881 2.5472,13.8537 L1.70711,14.6938 C1.07714,15.3238 3.55271368e-15,14.8776 3.55271368e-15,13.9867 L3.55271368e-15,9.99998 L3.98673,9.99998 C4.87763,9.99998 5.3238,11.0771 4.69383,11.7071 L3.9626,12.4383 C4.38006,12.8181 4.85153,13.1394 5.36475,13.3903 C6.50264,13.9466 7.78739,14.1285 9.03501,13.9101 C10.2826,13.6916 11.4291,13.0839 12.3102,12.174 C13.1914,11.2641 13.762,10.0988 13.9403,8.84476 C14.0181,8.29798 14.5244,7.91776 15.0711,7.99552 L14.9547098,7.98576084 Z M11.5137,0.812976 C12.2279,1.16215 12.8814,1.61349 13.4558,2.14905 L14.2929,1.31193 C14.9229,0.681961 16,1.12813 16,2.01904 L16,6.00001 L12.019,6.00001 C11.1281,6.00001 10.6819,4.92287 11.3119,4.29291 L12.0404,3.56441 C11.6222,3.18346 11.1497,2.86125 10.6353,2.60973 C9.49736,2.05342 8.21261,1.87146 6.96499,2.08994 C5.71737,2.30841 4.57089,2.91611 3.68976,3.82599 C2.80862,4.73586 2.23802,5.90125 2.05969,7.15524 C1.98193,7.70202 1.47564,8.08224 0.928858,8.00448 C0.382075,7.92672 0.00185585,7.42043 0.0796146,6.87364 C0.31739,5.20166 1.07818,3.64782 2.25303,2.43465 C3.42788,1.22148 4.95652,0.411217 6.62001,0.119916 C8.2835,-0.171384 9.99651,0.0712178 11.5137,0.812976 Z"
                    />
                  </svg>
                </motion.div>
                Randomize
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="pt-2 bg-slate-100 text-gray-700 mt-4 rounded-lg pb-2 font-semibold flex items-center justify-center gap-4 w-1/3"
                onClick={() => navigate("/wallet")}
              >
                Next
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
