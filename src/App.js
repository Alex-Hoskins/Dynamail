import './App.css';
import React, { useState } from "react";



function App() {
  const[text, setText] = useState({
    name :'{name}',
    company : '{company}',
    role: '{role}',
    date:'{date}',
    whatYouLike:'someone that can implement and follow engineering best practices, including testing and continuous integration,I had to reach out!'
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
        <label>Name</label>
        <input 
          name='name'
          type="text" 
          value={text.name}
          onChange={handleChanges}
          placeholder="Enter name" 
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
        <p>Hello {text.name},<br/>
        <br/>
        I’m Alex Hoskins, nice to “virtually” meet you!
        <br/><br/>
        I’m fascinated by the problems the engineering team is solving at {text.company} — as soon as I saw that you are looking for {text.whatYouLike}!
        <br/><br/>
        To cut directly to the chase, I really think I am your team’s next {text.role}. I bring a strong background in React/Redux, HTML/CSS, JS, communication within a professional setting, as well as experience developing in agile methodology on fully remote teams. I am able to work independently on projects with little to no guidance required and have a high standard of quality, attention to detail, and professionalism. I applied directly through your site, but am attaching my resume to this email as well for reference.
        <br/><br/>
        I would love a chance to chat more about this team and what you are looking for in your next {text.role} hire. Are you free for a quick phone call this week, maybe {text.date}? I hope to hear back from you soon.
        <br/><br/>
        All the best,
        </p> 
      </div>
    </div>
  );
}

export default App;
