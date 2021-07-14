import * as React from "react";

import { Layout } from "../components/layout";
import { Form } from "../components/form";

// https://www.gatsbyjs.com/docs/building-a-contact-form/

// Il y a un gestionnaire de pourriel sur Netlify
// https://docs.netlify.com/forms/setup/

// markup
const Contact = () => {
  return (
    <Layout>
      <Form name="contact">
        Un petit message pour contacter l'école c'est ici.
      </Form>
    </Layout>
  );
};

export default Contact;
