import * as React from "react";

import { Layout } from "../components/layout";
import { Form } from "../components/form";

// markup
const Inscription = () => {
  return (
    <Layout>
      <Form name="inscription">
        Tu veux t'inscrire à l'Eiad, explique nous cela ici en quelques mots.
      </Form>
    </Layout>
  );
};

export default Inscription;
