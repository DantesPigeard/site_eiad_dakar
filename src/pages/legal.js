import * as React from "react";

import { Layout } from "../components/layout";
import { LegalContent } from "../components/content_misc";

// markup
const Legal = () => {
  return (
    <Layout>
      <LegalContent text_color="#066ea5" text_size="0.7em" />
    </Layout>
  );
};

export default Legal;
