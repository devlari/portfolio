import Image, { type ImageProps } from "next/image";

type Props = ImageProps & {
  src: string;
  darkSrc: string;
};

// Mostra a versão da imagem de acordo com o tema (a outra fica com display: none)
export default function ThemedImage({ src, darkSrc, className = "", alt, ...props }: Props) {
  return (
    <>
      <Image {...props} src={src} alt={alt} className={`${className} dark:hidden`} />
      <Image {...props} src={darkSrc} alt={alt} className={`${className} hidden dark:block`} />
    </>
  );
}
