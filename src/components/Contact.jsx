import './Contact.css'

export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="numbered-heading overline">What's Next?</h2>
      
      <h2 className="contact-title">Get In Touch</h2>
      
      <p className="contact-description">
        I'm currently looking for new opportunities, and my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <a className="contact-button" href="mailto:brianlane2@gmail.com">
        Say Hello
      </a>
    </section>
  )
}