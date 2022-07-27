import ArrowJump from '../../components/ArrowJump';
import CustomLink from '../../components/CustomLink';
import SectionHeaderImage from '../../components/SectionHeaderImage';
import SectionImageWithContent from '../../components/SectionImageWithContent';
import headerImage from '../../../public/assets/homescreen-header-image.jpg';
import contentImage from '../../../public/assets/homescreen-content-image.jpg';
import styles from './HomeScreen.module.scss';

const HomeScreen = () => {

  const contentTitle = 'Modernistyczna Fotografia Ślubna';
  const contentSubtitle = 'Piękne Wasze Historie';
  const contentImageDesc = {
    desc: 'Romantyczne. Piękne. Nowoczesne.',
    actionButton: <CustomLink href='portfolio'>Historie ślubne &gt;&gt;</CustomLink>,
  }

  const headerTitle = 'Modernistyczna Fotografia Ślubna';
  const headerArrowStyle = {
    backgroundColor: 'transparent',
    width: '65px',
    height: '65px'
  }

  return (
    <div className={styles.container}>
      <SectionHeaderImage title={headerTitle} image={headerImage} icon={<ArrowJump arrowDown containerStyle={headerArrowStyle} />} />
      <SectionImageWithContent title={contentTitle} image={contentImage} subtitle={contentSubtitle} imageDesc={contentImageDesc} />
    </div>
  );
};
export default HomeScreen;
