"use client";
import { useState } from "react";
export default function Contact() {
  const [name, setName] = useState(""),
    [topic, setTopic] = useState("Le projet AlloCar"),
    [message, setMessage] = useState("");
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(
          "https://wa.me/2250748733365?text=" +
            encodeURIComponent(
              "Bonjour Daniel, je suis " +
                name +
                ". Sujet : " +
                topic +
                ". " +
                message,
            ),
          "_blank",
          "noopener,noreferrer",
        );
      }}
    >
      <label>
        Votre nom
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </label>
      <label>
        Votre sujet
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option>Le projet AlloCar</option>
          <option>Une application de mobilité</option>
          <option>Une collaboration entreprise</option>
        </select>
      </label>
      <label>
        Votre message
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
        />
      </label>
      <button className="button">Continuer sur WhatsApp</button>
      <p>
        Le message est préparé sur votre appareil. Vous choisissez de l’envoyer
        dans WhatsApp. Ce formulaire ne réserve aucun trajet.
      </p>
    </form>
  );
}
