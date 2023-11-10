import { createContext, useState } from "react";
import { v4 as UUIDV4 } from "uuid";


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
      {
        id: 1,
        rating: 10,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit morbi mattis dapibus dictum cras gravida sed, facilisis curabitur posuere hendrerit penatibus in.Justo class torquent in habitasse scelerisque est nisl nibh, morbi facilisis condimentum curae ante non atempus aliquam litora platea diam facilisi bibendum Facilisi purus faucibus id rutrum eu dapibus nascetur varius, montes mi turpis habitant donec cubilia in ultrices consequat nostra massa semper fringilla aenean augue",
      },
      {
        id: 2,
        rating: 9,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quis, magna class magnis risus eleifend porttitor facilisi est, ornare quam penatibus donec montes lectus velit.",
      },
      {
        id: 3,
        rating: 8,
        text: "Etiam tempor sem lectus orci facilisis montes quis iaculis dictum, nisl mus faucibus mollis senectus porta ante convallis, neque dignissim tortor sapien parturient commodo vulputate nec. Cras rhoncus hac molestie hendrerit conubia sem cursus taciti habitant proin vel cubilia, turpis purus pellentesque augue odio pharetra nascetur magna orci nisi pulvinar",
      },
    ]);
  
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })


    //add feedback
      const addFeedback = (newFeedback) => {
        newFeedback.id = UUIDV4();
        setFeedback([newFeedback, ...feedback]);
      };

  
        //delete feedback
      const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
  };
  

  //update feedback item
  const updateFeedback = (id, updItem) => { 
    setFeedback(feedback.map((item) => item.id === id ? {
      ...item, ...updItem} : item))
  }

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

    return (
      <FeedbackContext.Provider
        value={{
          feedback,
          feedbackEdit,
          deleteFeedback,
          addFeedback,
          editFeedback,
          updateFeedback,
        }}
      >
        {children}
      </FeedbackContext.Provider>
    );
}



export default FeedbackContext