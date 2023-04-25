import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Workflow from './Components/Workflow';
import Error from './Components/Error';

function App() {

  const [link, setlink] = useState();
  const [query, setquery] = useState();
  const [answer, setanswer] = useState("")
  const answerdiv = document.querySelector('.answer')
  const [messages, setMessages] = useState([
    "Loading...",
    "Transcription fetched..",
    "Processing...",
    "Fetching answer of query...",
    "Please wait...",
  ]);
  const [valid, setvalid] = useState(false);


  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);


  const showquery = async (e) => {
    e.preventDefault();
    if (!validateYoutubeLink(link)) {
      console.log("Link is not valid")
      setvalid(true);
      setInterval(() => {
        setvalid(false);
      }, 5000)
    }
    else {
      console.log("Link is valid")
      setvalid(false);
      const querydiv = document.querySelector('.query');
      querydiv.style.display = 'flex';
    }
  }

  const handleform2 = async (e) => {
    console.log(link, query);
    e.preventDefault();
    setIntervalId(setInterval(() => {
      setCurrentMessageIndex((index) => (index + 1) % messages.length);
    }, 5000));
    try {
      answerdiv.style.display = "flex";
      const response = await fetch("https://tutotube-backend.onrender.com/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link, query }),
      })
      const data = await response.json();
      clearInterval(intervalId);
      setanswer(data.correctans);
    } catch (error) {
      console.log(error);
      clearInterval(intervalId);
      setanswer("Error fetching answer.");
    }
  }

  function validateYoutubeLink(link) {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube.com\/watch\?v=([a-zA-Z0-9_-]{11})$/;
    return youtubeRegex.test(link);
  }

  return (
    <div className="app">
      {
        valid ? (<div className='error'>{<Error message={"Youtube link is not valid"} />}</div>) : (<div></div>)
      }
      <Navbar />
      <div className="container">
        <h1 className="head">
          Meet <span style={{ color: "#ed00eb" }}>Tutotube</span>
          , your AI
          to QA with Youtube Videos<span style={{ color: "#ed00eb" }}>.</span>
        </h1>
        <a href="#main">
          <button className="btn">
            Try YoutubeQA
          </button>
        </a>
      </div>
      <div className="main" id='main'>
        <p className="main-p">Paste the Youtube Video Here</p>
        <form action="" method="get" className='main' onSubmit={showquery}>
          <input type="text" name="ytdlink" id="" value={link} className="input" placeholder="Paste the Youtube Video link here...." onChange={(e) => setlink(e.target.value)} />
          <img src="submit.png " alt="Submit" type="submit" className='main-img' />
        </form>
        <div className="result">
          <div className="query">
            <p className="main-p">Enter the question from the video</p>
            <form className="form" onSubmit={handleform2}>
              <input type="text" name="query" value={query} id="" className="input" placeholder="Enter a question.... " onChange={(e) => setquery(e.target.value)} />
              <img src="submit.png " alt="Submit" type="submit" className='query-img' />
            </form>
          </div>
          <div className="answer">
            {
              answer ? (<div>{answer}</div>) : (<div>{messages[currentMessageIndex]}</div>)
            }
          </div>
        </div>
      </div>
      {/* <Workflow/> */}
    </div>
  );
}

export default App;
