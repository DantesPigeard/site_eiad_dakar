import React from "react";
import { Layout } from "../components/layout";
import { Partenaires } from "../components/partenaires";
import { graphql } from "gatsby";

import Img from "gatsby-image";

import "../css/form.css";

export default function Inscription({ data }) {
  if (data !== undefined) {
    return (
      <>
        <Layout>
          <div
            className="md_style"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
          <Partenaires />
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <Layout />
      </>
    );
  }
}

export const query = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/inscription.md/" }) {
      html
      frontmatter {
        author
        date
        title
      }
    }
  }
`;
// import * as React from "react";

// import { Layout } from "../components/layout";
// import { Form } from "../components/form";

// import "../css/form.css";

// // markup
// const Inscription = () => {
//   return (
//     <Layout>
//       <div className="container">
//         <div>Pour t'inscrire envois nous toutes les infos...</div>
//         <Form name="inscription" add_file_is={true}>
//           Tu veux t'inscrire à l'Eiad, explique nous cela ici en quelques mots.
//         </Form>
//       </div>
//     </Layout>
//   );
// };

// export default Inscription;
