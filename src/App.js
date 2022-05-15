import './App.css';
import React, { useState } from "react";



function App() {
  const[text, setText] = useState({
    name :'',
    myName: '',
    company : '',
    role: '',
    date:'',
    whatYouLike:''
  })
  function handleChanges(e){
    setText({
      ...text,
      [e.target.name]: e.target.value
    });
  }
  return (
    <div className="App">
      <h1>Dynamail</h1>
      <form action="">
        <label>To Name</label>
        <input 
          name='name'
          type="text" 
          value={text.name}
          onChange={handleChanges}
          placeholder="Enter name" 
        />
        <label>My Name</label>
        <input 
          name='myName'
          type="text" 
          value={text.myName}
          onChange={handleChanges}
          placeholder="Enter your name" 
        />
        <label>Company</label>
          <input 
            name='company'
            type="text" 
            value={text.company}
            onChange={handleChanges}
            placeholder="Enter company" 
          />
        <label>Role</label>
          <input 
            name='role'
            type="text" 
            value={text.role}
            onChange={handleChanges}
            placeholder="Enter role" 
          />
        <label>Date</label>
          <input 
            name='date'
            type="text" 
            value={text.date}
            onChange={handleChanges}
            placeholder="Enter date" 
          />
        <label>What interests you in this company?</label>
          <input 
            name='whatYouLike'
            type="text" 
            value={text.whatYouLike}
            onChange={handleChanges}
            placeholder="Company Interest" 
          />
      </form>
      <div className="emailBody">
        <p>Hello {text.name ? text.name : <span className="red">NAME</span>},<br/>
        <br/>
        I’m {text.myName ? text.myName : <span className="red">YOUR NAME</span>}, nice to “virtually” meet you!
        <br/><br/>
        I’m fascinated by the problems the engineering team is solving at {text.company ? text.company : <span className="red">COMPANY NAME</span>} — as soon as I saw that you are looking for {text.whatYouLike ? text.whatYouLike : <span className="red">WHAT YOU LIKE ABOUT THE COMPANY</span>}!
        <br/><br/>
        To cut directly to the chase, I really think I am your team’s next {text.role ? text.role : <span className="red">ROLE</span>}. I bring a strong background in React/Redux, HTML/CSS, JS, communication within a professional setting, as well as experience developing in agile methodology on fully remote teams. I am able to work independently on projects with little to no guidance required and have a high standard of quality, attention to detail, and professionalism. I applied directly through your site, but am attaching my resume to this email as well for reference.
        <br/><br/>
        I would love a chance to chat more about this team and what you are looking for in your next {text.role ? text.role : <span className="red">ROLE</span>} hire. Are you free for a quick phone call this week, maybe {text.date ? text.date : <span className="red">DATE</span>}? I hope to hear back from you soon.
        <br/><br/>
        All the best,
        </p> 
      </div>
    </div>
  );
}

export default App;
