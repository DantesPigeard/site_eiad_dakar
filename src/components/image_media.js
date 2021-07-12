import React from "react";
import Img from "gatsby-image";

export default function Image({ normal_height, data_query }) {
  if (data_query.img_hd === null) {
    return (
      <div>
        <p>Pas d'images correspondant à votre requête</p>
      </div>
    );
  }
  const sources = [
    data_query.img_hd.childImageSharp.fluid,
    {
      ...data_query.img_hd.childImageSharp.fluid,
      media: `(min-width: 600px)`,
    },
  ];
  return (
    <div>
      <Img fluid={sources} />
    </div>
  );
}
