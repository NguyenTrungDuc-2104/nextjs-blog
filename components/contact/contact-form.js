import { useState, useEffect } from "react";
import Notification from "../ui/notification";
import style from "@/styles/contact-form.module.css";

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); //pending, success, error
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(undefined);
        setRequestError(undefined);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setRequestStatus("pending");
      const response = await fetch("api/contact", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          name: enteredName,
          message: enteredMessage,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      } else {
        setRequestStatus("success");
      }
    } catch (err) {
      setRequestError(err.message);
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus == "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }
  if (requestStatus == "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }
  if (requestStatus == "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }
  return (
    <section className={style.contact}>
      <h1>How can I help you?</h1>
      <form className={style.form} onSubmit={submitHandler}>
        <div className={style.controls}>
          <div className={style.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>

          <div className={style.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={style.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            rows={5}
            id="message"
            required
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          />
        </div>

        <div className={style.actions}>
          <button>Send message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
