import { Player } from "lottie-react";
import typingAnimation from "../../animations/typing.json";

const TypingIndicator = () => {
  return (
    <div style={{ width: 70, marginLeft: 15 }}>
      <Player
        autoplay
        loop
        src={typingAnimation}
        style={{ height: "40px", width: "70px" }}
      />
    </div>
  );
};

export default TypingIndicator;
