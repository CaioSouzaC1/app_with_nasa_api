const Img = (props: { source: string; img_alt: string }) => {
  const { source, img_alt } = props;

  return <img src={source} alt={img_alt} />;
};

export default Img;
