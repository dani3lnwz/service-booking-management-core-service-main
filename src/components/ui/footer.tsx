import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="custom-container custom-flex">
        <Link className="title-font" href="/">
          <Image
            alt="logo"
            src="https://res.cloudinary.com/dhvuyehnq/image/upload/v1697697658/okxkydvlk1hgqxovykgq.png"
            width={200}
            height={80}
          />
        </Link>
        <p className="custom-text">
          © 2022 Motel —
          <Link href="#" className="custom-link">
            @faysal
          </Link>
        </p>
        <span className="custom-icons">
          <Link href="#" className="custom-icon">
            <FacebookOutlined />
          </Link>
          <Link href="#" className="custom-icon">
            <InstagramOutlined />
          </Link>
          <Link href="#" className="custom-icon">
            <TwitterOutlined />
          </Link>
          <Link href="#" className="custom-icon">
            <LinkedinOutlined />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
