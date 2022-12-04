
import styles from "../styles";



const StartSteps = ({number , text}) => (
  <div className={`${styles.flexCenter} flex-row`}>
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
        <p className='font-bold text-[24px] text-white'>{number}</p>
      </div>
      <p className="flex-1 ml-[30px] text-[18px] font-normal text-white leading-[32px]">
        {text}
      </p>
  </div>
);

export default StartSteps;
