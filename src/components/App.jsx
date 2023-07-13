import React, { useState } from "react";
import Statistics from "./statistics/statistics";
import FeedbackOptions from "./feedbackOptions/feedbackOptions";
import Section from "./section/section";
import Notification from "./notification/notification";
export const App=() => { 

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const CountPositiveFeedbackPercentage = (event) => {
    if (good === 0) { 
      return 0
    }
    return (good / CountTotalFeedback() * 100).toFixed()
  }
  const CountTotalFeedback = event => {
    return good + neutral + bad;
  };
  const addFeedback = event => {
    event.preventDefault();
    const id = event.target.id;
    if (id === 'good') {
      setGood(good + 1)
    } else if (id === 'neutral') {
      setNeutral(neutral  + 1)
    } else if (id === 'bad') {
      setBad(bad  + 1)
    }
  };
  
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {CountTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={<CountTotalFeedback/>}
              positivePercentage={<CountPositiveFeedbackPercentage/>}
            />
          )}
        </Section>
      </div>
    );
  

}

