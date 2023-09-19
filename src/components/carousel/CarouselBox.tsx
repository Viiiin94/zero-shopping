import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import styles from "./CarouselBox.module.scss";

interface CarouselBoxProps {
  image: string;
  title: string;
  description: string;
  navigation: string;
}

const CarouselBox: React.FC<CarouselBoxProps> = ({
  image,
  title,
  description,
  navigation,
}) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} />
      <div className={styles.content}>
        <div className={styles.title_wrapper}>
          <h1>{title}</h1>
        </div>
        <div className={styles.text_wrapper}>
          <span>{description}</span>
        </div>
        <div className={styles.button_wrapper}>
          <Link to={`/${navigation}`} className={styles.button}>
            이동하기 <PiArrowRightLight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselBox;
