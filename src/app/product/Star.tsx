import { useState, useEffect } from "react";
import styles from "./Star.module.scss";

interface StarProps {
  rate: number;
}

const Star: React.FC<StarProps> = ({ rate }) => {
  const AVR_RATE = rate / 5; // 5점 만점으로 기준 변경
  const STAR_IDX_ARR = ["first", "second", "third", "fourth", "last"];
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);

  const calcStarRates = () => {
    const tempStarRatesArr = [0, 0, 0, 0, 0];
    var starVerScore = Number((AVR_RATE * 100).toFixed(0)); // 소수점 첫 번째 자리까지 표시

    let idx = 0;
    while (starVerScore > 20) {
      tempStarRatesArr[idx] = 20;
      idx += 1;
      starVerScore -= 20;
    }
    tempStarRatesArr[idx] = starVerScore;

    return tempStarRatesArr;
  };

  useEffect(() => {
    setRatesResArr(calcStarRates);
  }, []);

  return (
    <div className={styles.star_wrap}>
      {STAR_IDX_ARR.map((item, idx) => {
        return (
          <span className={styles.star_icon} key={`${item}_${idx}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 14 13"
              fill="#cacaca"
            >
              <clipPath id={`${item}StarClip`}>
                <rect width={`${ratesResArr[idx]}`} height="15" />
              </clipPath>
              <path
                id={`${item}Star`}
                d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                transform="translate(-2 -2)"
              />
              <use
                clipPath={`url(#${item}StarClip)`}
                href={`#${item}Star`}
                fill="#EEB233"
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
};

export default Star;
