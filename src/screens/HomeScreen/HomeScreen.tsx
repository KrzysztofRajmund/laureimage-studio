import SectionHeaderImage from '../../components/SectionHeaderImage';
import ArrowJump from '../../components/ArrowJump';
import imageExample from '../../../public/assets/image-example.jpg';
import styles from './HomeScreen.module.scss';

const HomeScreen = () => {
  const title = 'Modernistyczna Fotografia Ślubna';
  const arrowStyle = {
    backgroundColor: 'transparent',
    width: '65px',
    height: '65px'
  }

  return (
    <div className={styles.container}>
      <SectionHeaderImage title={title} image={imageExample} icon={<ArrowJump arrowDown containerStyle={arrowStyle} />} />
    </div>
  );
};
export default HomeScreen;
