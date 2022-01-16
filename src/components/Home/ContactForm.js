import Form from "react-bootstrap/Form";
import "./ContactForm.css";
import { useState } from "react";

function ContactForm(props) {
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const sendForm = (e) => {};

  return (
    <section id="contact">
      <div className="container">
        <h4>Contact us!</h4>
        <Form className="my-4 col-md-6">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="input1"
              type="email"
              value={mail}
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Let us know</Form.Label>
            <Form.Control name="input2" as="textarea" rows={3} />
          </Form.Group>
          <button onClick={sendForm} className="btn btn-success">
            Submit
          </button>
        </Form>
      </div>
    </section>
  );
}

export default ContactForm;
