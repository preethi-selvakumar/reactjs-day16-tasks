import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    return (
        <section className="mp1-section">
            <h1>Contact Me</h1>
            <form className="mp1-form" onSubmit={e => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    rows="4"
                />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
