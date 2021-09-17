import { graphql, useStaticQuery } from "gatsby";

export function QueryTrameBleue() {
  const img = useStaticQuery(
    graphql`
      query {
        bg_hd: file(relativePath: { eq: "trame_bleue.jpg" }) {
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
