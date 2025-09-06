import React, { useState } from "react";
import { usePage } from "@inertiajs/react";

const ContactSection = ({ personalInformation, userInformation, sectionOverviewContent }) => {
  const { baseUrl } = usePage().props;
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    try {
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Failed to send message");
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Error sending message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>{sectionOverviewContent?.contact || ""}</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>{personalInformation?.address}</p>
                </div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>{personalInformation?.phone_number}</p>
                </div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>{userInformation?.email}</p>
                </div>
              </div>
              <iframe
                src={`${personalInformation?.map_url}`}
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "270px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7">
            <form className="php-email-form" data-aos="fade-up" data-aos-delay="200" onSubmit={handleSubmit}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" required value={form.name} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email-field" required value={form.email} onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject-field" required value={form.subject} onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" name="message" rows="10" id="message-field" required value={form.message} onChange={handleChange}></textarea>
                </div>
                <div className="col-md-12 text-center">
                  {loading && <div className="loading">Loading</div>}
                  {error && <div className="error-message">{error}</div>}
                  {sent && (
                    <div className="sent-message" style={{ position: "relative", paddingRight: "30px" }}>
                      Your message has been sent. Thank you!
                      <button
                        type="button"
                        style={{
                          position: "absolute",
                          top: "8px",
                          right: "8px",
                          background: "transparent",
                          border: "none",
                          color: "#333",
                          fontWeight: "bold",
                          fontSize: "20px",
                          cursor: "pointer",
                          lineHeight: "1",
                        }}
                        onClick={() => setSent(false)}
                        aria-label="Close"
                      >
                        ×
                      </button>
                    </div>
                  )}
                  <button type="submit" disabled={loading}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;