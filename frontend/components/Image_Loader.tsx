import Image from "next/image";

type IProps = {
    src: string;
    width: number;
    quality: number;
};

const Img = (props: any) => {
  const imgLoader = ({ src, width, quality }: IProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Image
      loader={imgLoader}
      className={props.className}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      quality={props.quality}
      layout={props.layout}
      {...props}
    />
  );
};

export default Img;
