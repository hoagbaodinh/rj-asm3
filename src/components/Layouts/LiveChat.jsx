import { useState } from "react";
import manIMG from "../../assets/man-ava.png";
import { motion, AnimatePresence } from "framer-motion";

const LiveChat = () => {
  // State
  const [isShowingChat, setIsShowingChat] = useState(false);
  return (
    <>
      <div
        className="liveChat"
        onClick={() => setIsShowingChat((prevState) => !prevState)}
      >
        <i className="fa-brands fa-facebook-messenger"></i>
      </div>
      <AnimatePresence>
        {isShowingChat && (
          <motion.div
            variants={{
              hidden: { opacity: 0, rotate: 30 },
              visible: { opacity: 1, rotate: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            open
            className="liveChatBox"
          >
            <div className="liveChatBoxTop">
              <h5> Customer Support</h5>
              <span> Let's Chat App</span>
            </div>

            <div className="liveChatContent">
              <div className="clientChat">
                <span>Xin Chào</span>
              </div>
              <div className="clientChat">
                <span>Làm thế nào để xem các sản phẩm</span>
              </div>
              <div className="adminChat">
                <div className="adminAva">
                  <img className="w-100" src={manIMG} alt="ad ava" />
                </div>
                <span>ADMIN: Chào bạn</span>
              </div>
              <div className="adminChat">
                <div className="adminAva">
                  <img className="w-100" src={manIMG} alt="ad ava" />
                </div>
                <span>ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm</span>
              </div>
            </div>

            <div className="liveChatBoxBottom">
              <img src={manIMG} alt="user ava" />
              <input type="text" placeholder="Enter Message!" />
              <i className="fa-solid fa-paperclip"></i>
              <i className="fa-solid fa-face-smile"></i>
              <i className="fa-solid fa-paper-plane sendMessage"></i>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;
