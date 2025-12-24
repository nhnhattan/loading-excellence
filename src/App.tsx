import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [person, setPerson] = useState("agency");
  const [step, setStep] = useState(0);

  const handleCopy = async () => {
    if (inputRef.current) {
      try {
        await navigator.clipboard.writeText(inputRef.current.value);
        toast.success("Sao chép thành công!");
      } catch (err) {
        console.error("Copy thất bại", err);
      }
    }
  };

  const handleShareDrawer = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "title!",
          text: "text!",
          url: "daylalink.com",
        })
        .catch((error) => console.error("Lỗi chia sẻ:", error));
    } else {
      alert("Trình duyệt không hỗ trợ chia sẻ trực tiếp.");
    }
  };

  return (
    <div className="lg:bg-[#a01001]">
      <div className="bg-image w-screen mx-auto lg:w-1/4 h-[100dvh] relative py-6">
        {step === 0 ? (
          <>
            <div className="w-full mx-auto">
              <img src="./img/tagline.png" alt="" />
            </div>
            <div className="w-full flex flex-col gap-4 items-center justify-center mt-3">
              <button
                onClick={() => {
                  setPerson("agency");
                  setStep(1);
                }}
                className="w-4/5 relative hover:opacity-85 cursor-pointer"
              >
                <img src="./img/frameBtn.png" alt="" className="w-full" />
                <p className="absolute text-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#fff955] uppercase font-bold text-2xl">
                  Đại lý
                </p>
              </button>
              <button
                onClick={() => {
                  setPerson("consultant");
                  setStep(1);
                }}
                className="w-4/5 relative hover:opacity-85 cursor-pointer"
              >
                <img src="./img/frameBtn.png" alt="" className="w-full" />
                <p className="absolute text-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#fff955] uppercase font-bold text-2xl">
                  Tư vấn viên
                </p>
              </button>
            </div>
            <img
              src="./img/bottomImg.png"
              alt=""
              className="w-full lg:w-1/4 fixed bottom-0"
            />
            <div className="fixed bottom-6 left-0 lg:left-auto border-b-2 w-full lg:w-1/4 mx-auto border-white py-3 pl-6">
              <p className="uppercase text-white font-bold text-xs">
                Generali vietnam
              </p>
            </div>
            <img
              src="./img/logo.png"
              alt=""
              className="fixed bottom-0 right-0 w-3/6 lg:right-0 lg:w-2/4 lg:absolute"
            />
          </>
        ) : step === 1 ? (
          <>
            <div className="w-full mx-auto">
              <img src="./img/tagline.png" alt="" />
            </div>
            <div className="">
              <form
                action=""
                className="flex flex-col items-center justify-center gap-3"
              >
                <div className="w-4/5 bg-frame mx-auto">
                  <div className="flex items-center justify-center flex-col py-4">
                    <p className="text-white uppercase">tên/name</p>
                    <div className="bg-input w-4/5 mb-3">
                      <input
                        type="text"
                        className="w-full text-center text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none py-2 px-2"
                      />
                    </div>
                    <p className="text-white uppercase">nơi làm việc</p>
                    <div className="bg-input w-4/5">
                      <select
                        className="w-[95%] text-sm text-center text-white uppercase font-bold
               focus-visible:ring-0 focus-visible:ring-offset-0
               focus-visible:outline-none py-3 px-2"
                        defaultValue=""
                      >
                        <option
                          value=""
                          disabled
                          className="bg-black text-white disabled:text-white"
                        >
                          Chọn thành phố
                        </option>
                        <option value="ha-noi" className="bg-red-500">
                          Hà Nội
                        </option>
                        <option value="ho-chi-minh" className="bg-red-500">
                          Hồ Chí Minh
                        </option>
                        <option value="da-nang" className="bg-red-500">
                          Đà Nẵng
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setStep(2);
                  }}
                  className="w-2/5 cursor-pointer hover:opacity-85"
                >
                  <img
                    src="./img/submit.png"
                    alt=""
                    className="w-full relative z-30"
                  />
                </button>
              </form>
            </div>
            <img
              src="./img/bottomImg.png"
              alt=""
              className="w-full lg:w-1/4 fixed bottom-0"
            />
            <div className="fixed bottom-6 left-0 lg:left-auto border-b-2 w-full lg:w-1/4 mx-auto border-white py-3 pl-6">
              <p className="uppercase text-white font-bold text-xs">
                Generali vietnam
              </p>
            </div>
            <img
              src="./img/logo.png"
              alt=""
              className="fixed bottom-0 right-0 w-3/6 lg:right-0 lg:w-2/4 lg:absolute"
            />
          </>
        ) : step == 2 ? (
          <>
            {person === "agency" ? (
              <>
                {" "}
                <div>
                  <div className="w-2/5 mx-auto mb-12">
                    <img src="./img/logo2.png" alt="" />
                  </div>
                  <div className="bg-frame w-4/5 pt-4 mx-auto flex flex-col items-center justify-center">
                    <p className="text-yellow-300 font-bold">
                      Link của tư vấn viên
                    </p>
                    <div className="bg-input w-[90%] mb-3">
                      <input
                        type="text"
                        disabled
                        value={"daylalink.com"}
                        ref={inputRef}
                        className="w-full text-center text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none py-2 px-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 mt-4">
                    <button
                      onClick={handleShareDrawer}
                      className="w-3/6 cursor-pointer hover:opacity-85"
                    >
                      <img src="./img/share.png" alt="" className="w-full" />
                    </button>
                    <button
                      onClick={handleCopy}
                      className="w-3/6 cursor-pointer hover:opacity-85"
                    >
                      <img src="./img/copy.png" alt="" className="w-full" />
                    </button>
                    <button
                      onClick={() => {
                        setStep(0);
                        setPerson("");
                      }}
                      className="w-3/6 cursor-pointer hover:opacity-85"
                    >
                      <img src="./img/close.png" alt="" className="w-full" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div>
                  <div className="w-2/5 mx-auto mb-12">
                    <img src="./img/logo2.png" alt="" />
                  </div>

                  {person === "agency" ? (
                    <>
                      <div className="bg-frame w-4/5 pt-4 mx-auto flex flex-col items-center justify-center">
                        <p className="text-yellow-300 font-bold">
                          Link của tư vấn viên
                        </p>
                        <div className="bg-input w-[90%] mb-3">
                          <input
                            type="text"
                            disabled
                            value={"daylalink.com"}
                            ref={inputRef}
                            className="w-full text-center text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none py-2 px-2"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-2 mt-4">
                        <button
                          onClick={handleShareDrawer}
                          className="w-3/6 cursor-pointer hover:opacity-85"
                        >
                          <img
                            src="./img/share.png"
                            alt=""
                            className="w-full"
                          />
                        </button>
                        <button
                          onClick={handleCopy}
                          className="w-3/6 cursor-pointer hover:opacity-85"
                        >
                          <img src="./img/copy.png" alt="" className="w-full" />
                        </button>
                        <button
                          onClick={() => {
                            setStep(0);
                          }}
                          className="w-3/6 cursor-pointer hover:opacity-85"
                        >
                          <img
                            src="./img/close.png"
                            alt=""
                            className="w-full"
                          />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col items-center justify-center gap-2 mt-4">
                        <button
                          onClick={() => {
                            window.open(`https://docs.google.com/`, "_blank");
                          }}
                          className="w-3/6 relative cursor-pointer hover:opacity-85"
                        >
                          <img
                            src="./img/button.png"
                            alt=""
                            className="w-full"
                          />
                          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white uppercase font-bold text-lg">
                            Xem
                          </p>
                        </button>
                        <button
                          onClick={() => {
                            setStep(0);
                            setPerson("");
                          }}
                          className="w-3/6 cursor-pointer hover:opacity-85"
                        >
                          <img
                            src="./img/close.png"
                            alt=""
                            className="w-full"
                          />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
