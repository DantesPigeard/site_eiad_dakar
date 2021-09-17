import { graphql, useStaticQuery } from "gatsby";

export function QueryHome() {
  const img = useStaticQuery(
    graphql`
      query {
        bg_hd: file(relativePath: { eq: "fond_rose_tete.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  return img;
}
