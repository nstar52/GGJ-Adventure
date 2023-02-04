import {
  PageStyle,
  Container,
  DialogContainer,
  ButtonGrid,
  OptionButton,
  Sidebar,
  Title,
  Door,
  Avatar,
  Window,
  Scenery,
} from "../styles/Player_UI.style";
import React, { useEffect, useState } from "react";
// import roomPicture from "../scenery.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Typed from "react-typed";
import BrownHare from "../assets/BrownHare.png";
import GrayRabbit from "../assets/GrayRabbit.png";
import WhiteBunny from "../assets/WhiteBunny.png";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3a from "../assets/image3a.png";
import Image3b from "../assets/image3b.png";
import Image3c from "../assets/image3c.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import Image6 from "../assets/image6.png";
import Image7 from "../assets/image7.png";
import Image8a from "../assets/image8a.png";
import Image8b from "../assets/image8b.png";
import Image8c from "../assets/image8c.png";
import Image9 from "../assets/image9.png";

const PlayerUI = (props) => {
  const textNodes = props.dialogs;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const player_name = location.state.name;
  const avatar = location.state.avatar;
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  const endGame = () => {
    let path = "/end";
    navigate(path);
  };


  const handleAnswerButtonClick = (nextNode) => {
    if (nextNode < 0) {
      nextNode = 1;
    }
    setCurrentQuestion(
      textNodes.findIndex((textNode) => textNode.id === nextNode)
    );
    setToggle(true);
  };

  useEffect(() => {
    setToggle(false);
  }, [toggle]);

  const image_source = textNodes[currentQuestion].image;

  return (
    <PageStyle>
      
      <Window>
        <Title>
          <h1>Arboreal Quest: Have fun {player_name}!</h1>
        </Title>

        <Container>
          <div>
            {image_source === "image2" ? (
              <Scenery src={Image2} />
            ) : image_source === "image3a" ? (
              <Scenery src={Image3a} />
            ) : image_source === "image3b" ? (
              <Scenery src={Image3b} />
            ) : image_source === "image3c" ? (
              <Scenery src={Image3c} />
            ) : image_source === "image4" ? (
              <Scenery src={Image4} />
            ) : image_source === "image5" ? (
              <Scenery src={Image5} />
            ) : image_source === "image6" ? (
              <Scenery src={Image6} />
            ) : image_source === "image7" ? (
              <Scenery src={Image7} />
            ) : image_source === "image8a" ? (
              <Scenery src={Image8a} />
            ) : image_source === "image8b" ? (
              <Scenery src={Image8b} />
            ) : image_source === "image8c" ? (
              <Scenery src={Image8c} />
            ) : image_source === "image9" ? (
              <Scenery src={Image9} />
            ): (
              <Scenery src={Image1} />
            )
            } 

          </div>0
        </Container>

        <Sidebar>
          <div>
            {avatar === "Gray Rabbit" ? (
              <Avatar src={GrayRabbit} />
            ) : avatar === "Brown Hare" ? (
              <Avatar src={BrownHare} />
            ) : (
              <Avatar src={WhiteBunny} />
            )}
          </div>
          <div>
            <Door size={100} onClick={routeChange} />
          </div>
        </Sidebar>

        <DialogContainer>
          <div>
            <Typed
              strings={[textNodes[currentQuestion].text]}
              typeSpeed={35}
              fadeOut={true}
              showCursor
              loop={toggle}
            />
          </div>

          <ButtonGrid>
            {textNodes[currentQuestion].options.map((option, index) => (
              <OptionButton
                key={index}
                onClick={() => handleAnswerButtonClick(option.nextText)}
              >
                {option.text}
              </OptionButton>
            ))}
          </ButtonGrid>
        </DialogContainer>
      </Window>
    </PageStyle>
  );
};

export default PlayerUI;
