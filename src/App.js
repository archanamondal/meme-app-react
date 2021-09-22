import React, { useState, useEffect } from 'react'
import {saveAs} from 'file-saver'
import axios from 'axios'
import styled from 'styled-components'
import './App.css'
import loader from './imgs/Spinner.gif'

const Container = styled.div
`
  height:100vh; 
  width:100vw; 
  display:flex; 
  align-items:center;
  justify-content:center; 
  flex-direction:column;
  background-color: #00DBDE;
  background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);    
`

const NextButton = styled.button
`
height:40px; 
width:auto;
margin:30px; 
padding:10px 20px;
border:1px solid #3498db; 
font-size:20px; 
cursor:pointer; 
font-family:montserrat;
 color:white;
 transition:0.8s; 
 position:relative; 
 overflow:hidden; 
 background-color:#B53471;

 &:hover{
  background-color:#9b59b6;
  box-shadow: 1px 5px #636e72;
 }
`

const DownloadButton = styled.button
`
height:40px; 
width:auto;
margin:30px; 
padding:10px 20px;
border:1px solid #3498db; 
font-size:20px; 
cursor:pointer; 
font-family:montserrat;
 color:white;
 transition:0.8s; 
 position:relative; 
 overflow:hidden; 
 background-color:#B53471;

 &:hover{
  background-color:#9b59b6;
  box-shadow: 1px 5px #636e72;
 }
`

const Heading = styled.h1
  `
  color:#fff;
  font-family: 'Dancing Script', cursive;
  font-size:40px;
  font-weight:600;
  `

function App() {
  const [imgUrl, setImgUrl] = useState("");

  const getMemes = () =>{
    axios.get('https://meme-api.herokuapp.com/gimme')
    .then((response) => {
      setImgUrl(response.data.url)
    }).catch((err) =>{
      console.log(err)
    })
  }

  const downloadImage = () =>{
    saveAs(imgUrl, 'meme.jpg')
  }

  useEffect(() => {
    getMemes()
  }, [])

  if(imgUrl.length === 0){
    return (
      <Container>
        <img src={loader} alt="" style={{height:"50px", width:"50px"}} />
      </Container>
    )
  }

  return (
    <>
    <Container>
    <Heading>Meme Generator</Heading>

      <img src={imgUrl} alt="" style={{height:"400px", width:"auto", display:"flex", alignItems:"center", justifyContent:"center"}} />

    <div style={{display:"flex"}}>
      <NextButton onClick={getMemes}> Get new meme </NextButton>
      <DownloadButton onClick={downloadImage}> Download meme </DownloadButton>
      </div>
    </Container>

    </>
  )
}

export default App

//Download button with functionality