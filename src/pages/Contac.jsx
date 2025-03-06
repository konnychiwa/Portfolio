import React, { useState, useEffect } from 'react';
import { Share2, User, Mail, MessageSquare, Send } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const validateAndSendMail = (event) => {
    event.preventDefault();

    var fullName = document.getElementById('fullName').value;
    var emailId = document.getElementById('email_id').value;
    var message = document.getElementById('message').value;

    if (!fullName || !emailId || !message) {
      alert('Tutti i campi sono obbligatori.');
      return false;
    }

    var params = {
      from_name: fullName,
      email_id: emailId,
      message: message,
    };

    setIsSubmitting(true);

    // Show loading alert
    Swal.fire({
      title: 'Invio del messaggio...',
      html: 'Attendi un secondo nel mentre che mandiamo il tuo messaggio',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    emailjs
      .send('service_gy7ndzy', 'template_8vy99xq', params, 'unIhc4BBlAW4khGLA')
      .then(() => {
        showAlert();
      })
      .catch(() => {
        Swal.fire({
          title: 'Errore!',
          text: 'Il tuo messaggio non è stato inviato, riprova!',
          icon: 'error',
          timer: 2000,
          timerProgressBar: true,
        });
      });
  };

  const showAlert = () => {
    Swal.fire({
      title: 'Successo!',
      text: 'Il tuo messaggio è stato inviato con successo!',
      icon: 'success',
      confirmButtonColor: '#6366f1',
      timer: 2000,
      timerProgressBar: true,
    });
  };

  return (
    <>
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: '#6366f1',
              backgroundImage:
                'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Contattami
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Sto cercando nuove opportunità, se hai bisogno di qualcosa o anche per
          farmi delle domande, compila il form e ti contatterò appena posso.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0"
        id="Contact"
      >
        <div className="container px-[1%]">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Form
                </h2>
              </div>
              <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
            </div>

            <form onSubmit={validateAndSendMail} className="space-y-6">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative group"
              >
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="text"
                  id="fullName"
                  placeholder="Pamoda Angelo Konara"
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  required
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="relative group"
              >
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="email"
                  id="email_id"
                  placeholder="esempio@gmail.com"
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  required
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative group"
              >
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <textarea
                  id="message"
                  placeholder="Ciao come stai?"
                  className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50"
                  required
                />
              </div>
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                Invia messaggio
              </button>
            </form>

            <div className="mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
