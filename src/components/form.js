import * as React from "react";

export function Form({ name, children }) {
  return (
    <>
      <form name={name} method="POST" data-netlify="true">
        <p>
          <label>
            <input type="text" name="family name" placeHolder="nom" />
          </label>
        </p>
        <p>
          <label>
            <input type="text" name="first name" placeHolder="prénom" />
          </label>
        </p>
        <p>
          <label>
            <input type="email" name="email" placeHolder="courriel" />
          </label>
        </p>
        <p>
          <label>
            <textarea name="message" placeHolder={children}></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Envoyer</button>
        </p>
      </form>
    </>
  );
}
