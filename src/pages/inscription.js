import React from "react";
import { Layout } from "../components/layout";
import { graphql } from "gatsby";
import "../css/form.css";

import BackgroundMedia from "../components/background_media";

import partenaires from "../../media/partenaires.jpg";

export default function Inscription({ data }) {
  return (
    <>
      <Layout>
        <div
          className="md_style"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <div className="partenaire">
          <img src={partenaires} alt="partenaires" />
        </div>
      </Layout>
    </>
  );
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
