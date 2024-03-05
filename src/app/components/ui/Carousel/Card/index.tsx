import Image from "next/image";
import Button from "../../Button";

export type ItemCard = {
  image: string;
  title: string;
  description: string;
  linkFigma?: string;
  linkGithub?: string;
  linkSite?: string;
};

export type Props = {
  item: ItemCard;
};

export default function CardCarousel({ item }: Props) {
  return (
    <div className="card-carousel">
      <div className="image">
        <Image
          layout="responsive"
          width={0}
          height={0}
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="card-info">
        <h5 className="text-center fw-bold">{item.title}</h5>
        <p className="text-center">{item.description}</p>
        <div className="d-flex justify-content-center">
          <a
            href={item.linkFigma ?? ""}
            target="_blank"
            rel="noreferrer"
            className="me-3 bg-pink btn"
          >
            <Image
              width={32}
              height={32}
              src="/images/icons/figma-logo.svg"
              alt="Figma"
            />
          </a>
          <a
            href={item.linkGithub}
            target="_blank"
            rel="noreferrer"
            className="me-3 bg-pink btn"
          >
            <Image
              width={32}
              height={32}
              src="/images/icons/github-logo.svg"
              alt="Github"
            />
          </a>
          <a
            href={item.linkSite}
            target="_blank"
            rel="noreferrer"
            className="me-3 bg-pink btn"
          >
            <Image
              width={32}
              height={32}
              src="/images/icons/browser.svg"
              alt="Site"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
