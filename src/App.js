import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import loader from "./imgs/Spinner.gif";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #00dbde;
  background-image: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
`;

const NextButton = styled.button`
  height: 40px;
  width: auto;
  margin: 30px;
  padding: 0px 20px;
  border: 1.5px solid #33d9b2;
  font-size: 20px;
  cursor: pointer;
  font-family: montserrat;
  color: #fff;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  background:none;
  border-radius: 30px;

  &:hover {
    box-shadow: 0 5px 50px 0 #33d9b2 inset, 0 5px 50px 0 #3c40c6;
  }
  @media (min-width:0px) and (max-width:600px){
    font-size: 18px;
    padding: 5px 20px;
    height: auto;
  }
`;

const DownloadButton = styled.button`
  height: 40px;
  width: auto;
  margin: 30px;
  padding: 0px 20px;
  border: 1.5px solid #33d9b2;
  font-size: 20px;
  cursor: pointer;
  font-family: montserrat;
  color: #fff;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  background:none;
  border-radius: 30px;

  &:hover {
    /* background-color: #9b59b6;
    box-shadow: 1px 5px #636e72; */
    box-shadow: 0 5px 50px 0 #33d9b2 inset, 0 5px 50px 0 #3c40c6;
  }
  @media (min-width:0px) and (max-width:600px){
    font-size: 18px;
    padding: 5px 20px;
    height: auto;
  }

`;

const Heading = styled.h1`
  color: #fff;
  font-family: "Dancing Script", cursive;
  font-size: 40px;
  font-weight: 600;
`;

const Img = styled.img`
  height: 400px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    box-shadow: 0 5px 50px 0 #33d9b2 inset, 0 5px 50px 0 #3c40c6;
  }
    @media (min-width:0px) and (max-width:600px){
    width: 300px;
  }
`;



function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const getMemes = () => {
    setLoading(true);
    axios
      .get("https://meme-api.herokuapp.com/gimme")
      .then((response) => {
        setImgUrl(response.data.url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const downloadImage = () => {
    saveAs(imgUrl, "meme.jpg");
  };

  useEffect(() => {
    getMemes();
  }, []);

  if (loading) {
    return (
      <Container>
        <img src={loader} alt="" style={{ height: "50px", width: "50px" }} />
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Heading>Meme Generator</Heading>

        {/* <img src={imgUrl} alt="" style={{height:"400px", width:"auto", display:"flex", alignItems:"center", justifyContent:"center"}} /> */}
        <Img src = {imgUrl} alt=""/>

        <div style={{ display: "flex" }}>
          <NextButton onClick={getMemes}> Get New </NextButton>
          <DownloadButton onClick={downloadImage}>
            {" "}
            Download{" "}
          </DownloadButton>
        </div>
      </Container>
    </>
  );
}

export default App;

//Download button with functionality