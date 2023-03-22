import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
function Head(props) {
  let location = useLocation();
  let title = props.title + " - Rccg Emmanuel Sanctuary";
  title = title.trim();

  return (
    <Helmet>
      {/* Description */}
      <meta name="description" content={props.desc} />
      <title>{title}</title>
      {/*  Essential Social Meta Tags */}
      <meta
        property="og:title"
        content={props.ogTitle ? props.ogTitle : props.title}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={props.img} />
      <meta
        property="og:url"
        content={props.ogUrl ? props.ogUrl : location.pathname}
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Non-Essential, But Recommended */}
      <meta
        property="og:description"
        content={props.ogDesc ? props.ogDesc : props.desc}
      />
      <meta property="og:site_name" content="Template Raven" />
      <meta name="twitter:image:alt" content={props.imgAlt} />

      {/* Other Meta Tags */}
      <meta name="keywords" content={props.keywords} />
      
    </Helmet>
  );
}

export default Head;
