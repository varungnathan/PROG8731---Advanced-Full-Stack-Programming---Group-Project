import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../styles/Recreation.css'; // Correct path for the CSS file

const events = [
  { date: new Date(2024, 6, 12), name: 'Yoga Workshop' },
  { date: new Date(2024, 6, 14), name: 'Company Picnic' },
  { date: new Date(2024, 6, 16), name: 'Team Building Exercise' },
  { date: new Date(2024, 6, 18), name: 'Charity Run' },
  { date: new Date(2024, 6, 20), name: 'Cooking Class' },
  { date: new Date(2024, 6, 22), name: 'Dance Party' },
  { date: new Date(2024, 6, 24), name: 'Art Workshop' },
  { date: new Date(2024, 6, 26), name: 'Tech Talk' },
  { date: new Date(2024, 6, 28), name: 'Book Club Meeting' },
  { date: new Date(2024, 6, 30), name: 'Gardening Workshop' },
  { date: new Date(2024, 7, 1), name: 'Movie Night' },
  { date: new Date(2024, 7, 3), name: 'Photography Contest' },
  { date: new Date(2024, 7, 5), name: 'Fitness Bootcamp' },
  { date: new Date(2024, 7, 7), name: 'Volunteer Day' },
  { date: new Date(2024, 7, 9), name: 'Wine Tasting' },
  { date: new Date(2024, 7, 11), name: 'Cultural Festival' },
  { date: new Date(2024, 7, 13), name: 'Trivia Night' },
  { date: new Date(2024, 7, 15), name: 'Karaoke Night' },
  { date: new Date(2024, 7, 17), name: 'Cycling Tour' },
  { date: new Date(2024, 7, 19), name: 'Fishing Trip' },
  { date: new Date(2024, 7, 21), name: 'Meditation Session' },
  { date: new Date(2024, 7, 23), name: 'Potluck Dinner' },
  { date: new Date(2024, 7, 25), name: 'Sailing Adventure' },
  { date: new Date(2024, 7, 27), name: 'Concert Night' },
  { date: new Date(2024, 7, 29), name: 'Game Night' },
  { date: new Date(2024, 7, 31), name: 'Storytelling Session' },
  { date: new Date(2024, 8, 2), name: 'Bird Watching' },
  { date: new Date(2024, 8, 4), name: 'Craft Workshop' },
  { date: new Date(2024, 8, 6), name: 'Drama Club' },
  { date: new Date(2024, 8, 8), name: 'Science Fair' }
];

const blogs = [
  { title: 'Company Picnic Highlights', content: 'Here are some highlights from our recent company picnic...', date: 'August 1, 2024' },
  { title: 'Yoga Workshop Benefits', content: 'Discover the benefits of our weekly yoga workshop...', date: 'July 15, 2024' },
  { title: 'Tech Talk Recap', content: 'A summary of the recent tech talk held in our company...', date: 'July 20, 2024' },
  { title: 'Gardening Tips', content: 'Learn some useful gardening tips from our latest workshop...', date: 'July 22, 2024' },
  { title: 'Movie Night Fun', content: 'Highlights from our recent movie night...', date: 'August 3, 2024' }
];

const polls = [
  { question: 'Which activity would you like to see next?', options: ['Hiking', 'Cooking Class', 'Dance Party'], id: 1 },
  { question: 'Preferred Time for Yoga Workshop?', options: ['Morning', 'Afternoon', 'Evening'], id: 2 },
  { question: 'Favorite Company Event?', options: ['Picnic', 'Tech Talk', 'Movie Night'], id: 3 }
];

const images = [
  { original: '/images/hiking.jpg', thumbnail: '/images/hiking.jpg' },
  { original: '/images/potluck.jpg', thumbnail: '/images/potluck.jpg' },
  { original: '/images/winetasting.jpg', thumbnail: '/images/winetasting.jpg' },
  { original: '/images/yoga.jpg', thumbnail: '/images/yoga.jpg' }
];

const Recreation = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [pollResponses, setPollResponses] = useState({});
  const [countdown, setCountdown] = useState(null);
  const [feedbackError, setFeedbackError] = useState('');
  const [feedbackSuccess, setFeedbackSuccess] = useState('');
  const [registration, setRegistration] = useState({
    name: '',
    department: '',
    event: '',
  });
  const [registrationError, setRegistrationError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState('');
  const nextEvent = events[0]; // Assume the first event is the next event for countdown

  useEffect(() => {
    if (nextEvent) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const eventTime = nextEvent.date.getTime();
        const distance = eventTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

        if (distance < 0) {
          clearInterval(interval);
          setCountdown('Event started');
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [nextEvent]);

  const onChange = date => {
    setDate(date);
    const eventsOnDate = events.filter(event => event.date.toDateString() === date.toDateString());
    setSelectedDateEvents(eventsOnDate);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedback) {
      setFeedbackError('Feedback cannot be empty.');
      return;
    }
    setFeedbackError('');
    console.log('Feedback submitted:', feedback);
    setFeedback('');
    setFeedbackSuccess('Feedback submitted successfully!');
    setTimeout(() => setFeedbackSuccess(''), 3000); // Clear success message after 3 seconds
  };

  const handlePollChange = (e, pollId) => {
    setPollResponses({ ...pollResponses, [pollId]: e.target.value });
  };

  const handlePollSubmit = (e, pollId) => {
    e.preventDefault();
    console.log(`Poll response for ${pollId}:`, pollResponses[pollId]);
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistration({ ...registration, [name]: value });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    if (!registration.name || !registration.department || !registration.event) {
      setRegistrationError('All fields are required.');
      return;
    }
    setRegistrationError('');
    console.log('Registration submitted:', registration);
    setRegistration({
      name: '',
      department: '',
      event: '',
    });
    setRegistrationSuccess('Registration submitted successfully!');
    setTimeout(() => setRegistrationSuccess(''), 3000); // Clear success message after 3 seconds
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const event = events.find(event => event.date.toDateString() === date.toDateString());
      if (event) {
        return <div className="event-indicator"></div>;
      }
    }
    return null;
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const event = events.find(event => event.date.toDateString() === date.toDateString());
      if (event) {
        return 'highlight';
      }
    }
    return null;
  };

  return (
    <div>
      <h2>Recreation</h2>
      <div className="calendar-container">
        <Calendar
          onChange={onChange}
          value={date}
          tileContent={tileContent}
          tileClassName={tileClassName}
        />
      </div>
      <div className="event-details">
        <h3>Events on {date.toDateString()}</h3>
        <ul>
          {selectedDateEvents.length > 0 ? (
            selectedDateEvents.map((event, index) => (
              <li key={index}>{event.name}</li>
            ))
          ) : (
            <li>No events on this day</li>
          )}
        </ul>
      </div>
      <div className="event-countdown">
        <h3>Next Event Countdown</h3>
        <p>{countdown}</p>
      </div>
      <div className="blog-news">
        <h3>Blog & News</h3>
        {blogs.map((blog, index) => (
          <div key={index} className="blog-entry">
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
            <p><small>{blog.date}</small></p>
          </div>
        ))}
      </div>
      <div className="polls">
        <h3>Polls & Surveys</h3>
        {polls.map((poll, index) => (
          <div key={index} className="poll">
            <h4>{poll.question}</h4>
            <form onSubmit={(e) => handlePollSubmit(e, poll.id)}>
              {poll.options.map((option, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    value={option}
                    checked={pollResponses[poll.id] === option}
                    onChange={(e) => handlePollChange(e, poll.id)}
                  />
                  {option}
                </label>
              ))}
              <button type="submit">Submit</button>
            </form>
          </div>
        ))}
      </div>
      <div className="event-feedback">
        <h3>Event Feedback</h3>
        <form onSubmit={handleFeedbackSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Leave your feedback here..."
            rows="4"
            required
          />
          <button type="submit">Submit Feedback</button>
        </form>
        {feedbackError && <p className="error-message">{feedbackError}</p>}
        {feedbackSuccess && <p className="success-message">{feedbackSuccess}</p>}
      </div>
      <div className="event-registration">
        <h3>Event Registration</h3>
        <form onSubmit={handleRegistrationSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={registration.name}
            onChange={handleRegistrationChange}
            required
          />
          <input
            name="department"
            placeholder="Department"
            value={registration.department}
            onChange={handleRegistrationChange}
            required
          />
          <select
            name="event"
            value={registration.event}
            onChange={handleRegistrationChange}
            required
          >
            <option value="">Select Event</option>
            {events.map((event, index) => (
              <option key={index} value={event.name}>{event.name}</option>
            ))}
          </select>
          <button type="submit">Register</button>
        </form>
        {registrationError && <p className="error-message">{registrationError}</p>}
        {registrationSuccess && <p className="success-message">{registrationSuccess}</p>}
      </div>
      <div className="image-gallery">
        <h3>Event Gallery</h3>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default Recreation;
