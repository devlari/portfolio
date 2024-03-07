import Image from "next/image";

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
          unoptimized
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
            style={{
              backgroundColor: item.linkFigma ? "#FB6F92" : "#E5E5E5!important",
              cursor: item.linkFigma ? "pointer" : "not-allowed",
            }}
          >
            <Image
              width={32}
              height={32}
              src="/images/icons/figma-logo.svg"
              alt="Figma"
              unoptimized
            />
          </a>
          <a
            href={item.linkGithub}
            target="_blank"
            rel="noreferrer"
            className="me-3 bg-pink btn"
            style={{
              backgroundColor: item.linkGithub
                ? "#FB6F92"
                : "#E5E5E5!important",
              cursor: item.linkGithub ? "pointer" : "not-allowed",
            }}
          >
            <Image
              width={32}
              height={32}
              src="/images/icons/github-logo.svg"
              alt="Github"
              unoptimized
            />
          </a>
          <a
            href={item.linkSite}
            target="_blank"
            rel="noreferrer"
            className="me-3 btn"
            style={{
              backgroundColor: item.linkSite ? "#FB6F92" : "#E5E5E5!important",
              cursor: item.linkSite ? "pointer" : "not-allowed",
            }}
          >
            <Image
              width={32}
              height={32}
              src="/images/icons/browser.svg"
              alt="Site"
              unoptimized
            />
          </a>
        </div>
      </div>
    </div>
  );
}
