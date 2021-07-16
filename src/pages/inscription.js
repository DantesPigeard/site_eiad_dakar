import * as React from "react";

import { Layout } from "../components/layout";
import { Form } from "../components/form";

import "../css/form.css";

// markup
const Inscription = () => {
  return (
    <Layout>
      <div className="container">
        <div>Pour t'inscrire envois nous toutes les infos...</div>
        <Form name="inscription">
          Tu veux t'inscrire à l'Eiad, explique nous cela ici en quelques mots.
        </Form>
      </div>
    </Layout>
  );
};

export default Inscription;
