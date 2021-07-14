import * as React from "react";
// https://www.gatsbyjs.com/docs/building-a-contact-form/

// Il y a un gestionnaire de pourriel sur Netlify
// https://docs.netlify.com/forms/setup/
// https: www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-static-site-generators
export function Form({ name, children }) {
  return (
    <>
      <form name={name} method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value={name} />
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
