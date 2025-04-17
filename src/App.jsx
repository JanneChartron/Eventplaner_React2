import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './css/mvp.css';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import EventHome from './components/EventHome';
import EventExamples from './components/EventExamples';

const App = () => {
  const [events, setEvents] = useState([
    {
      name: "Freiluft Kino",
      type: "Outdoor",
      public: true,
      participants: 150,
    }
  ]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  console.log('App component rendered');

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/examples">Examples</Link>
          </li>
          <li>
            <Link to="/form">Event Form</Link>
          </li>
          <li>
            <Link to="/list">Event List</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/examples" element={<EventExamples />} />
        <Route path="/form" element={<EventForm onAddEvent={addEvent} />} />
        <Route path="/list" element={<EventList events={events} />} />
        <Route path="/" element={<EventHome />} />
      </Routes>
    </div>
  );
};

export default App;
