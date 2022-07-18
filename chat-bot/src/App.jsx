import React from 'react'
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const steps = [
  {
    id: "0",
    message: "Hey Geek!",

    // This calls the next id
    // i.e. id 1 in this case
    trigger: "1",
  },
  {
    id: "1",

    // This message appears in
    // the bot chat bubble
    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",

    // Here we want the user
    // to enter input
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: 4,
  },
  {
    id: "4",
    options: [
      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: "View Tours", trigger: "5" },
      { value: 2, label: "Read Blogs" , trigger: "7"},
    ],
   
  },
  {
    id:'5',
    message:'Where do you want to travel?',
    trigger:'6',
  },
  {
    id:'6',
    user:true,
    trigger: "8",
  },
  {
    id:'7',
    message:'Here are some blogs for you'
  },
  
  {
    id:'8',
    message:'We have some amazing offers for {previousValue} tour'
  }
];

// Creating our own theme
const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

// Set some properties of the bot
const config = {
  floating: true,
};


const App = () => {
  return (
   <>
  <h1>WELCOME TO THE CHAT</h1>
      <ThemeProvider theme={theme}>
        <ChatBot
          // This appears as the header
          // text for the chat bot
          headerTitle="ROVE"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
   </>
  )
}

export default App