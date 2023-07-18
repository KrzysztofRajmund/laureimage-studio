import ArrowJump from '../../components/ArrowJump';
import CustomLink from '../../components/CustomLink';
import SectionHeaderImage from '../../components/SectionHeaderImage';
import SectionImageWithContent from '../../components/SectionImageWithContent';
import headerImage from '../../../public/assets/home-screen-header-image.jpg';
import contentImage from '../../../public/assets/home-screen-content-image.jpg';
import styles from './HomeScreen.module.scss';
import ImageGridLayout from '../../components/ImageGridLayout';
import ImageFlexLayout from '../../components/ImageFlexLayout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SectionListPortrait from '../../components/SectionListPortrait';
import { useResponsive } from '../../utils/hooks';

const HomeScreen = () => {
 const {isMobileScreen} = useResponsive();

  const contentTitle = isMobileScreen ?  'Modernistyczna Fotografia' : 'Modernistyczna Fotografia Ślubna';
  const contentSubtitle = 'Wasze Piękne Historie';
  const contentImageDesc = {
    desc: 'Romantyczne. Piękne. Nowoczesne.',
    actionButton: <CustomLink href='portfolio'>Historie ślubne &gt;&gt;</CustomLink>,
  }

  const headerTitle = isMobileScreen ?  'Modernistyczna Fotografia' : 'Modernistyczna Fotografia Ślubna';
  const headerArrowStyle = {
    backgroundColor: 'transparent',
    width: '65px',
    height: '65px'
  }

  //Note: Temporary placement for data:
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get(
        'https://k2nstudio-api.herokuapp.com/items/'
      );
      setImages(response.data);
    };
    getImages();
  }, []);


  return (
    <div className={styles.container}>
      <SectionHeaderImage title={headerTitle} image={headerImage} icon={<ArrowJump arrowDown containerStyle={headerArrowStyle} />} />
      <SectionImageWithContent title={contentTitle} image={contentImage} subtitle={contentSubtitle} imageDesc={contentImageDesc} />
      {/* <ImageGridLayout images={images} title='Fotografie studyjne' style={{ gridTemplateColumns: 'repeat(minmax(150px, 150px))', gridTemplateRows: '200px 200px 200px' }} /> */}
      {/* <ImageFlexLayout images={images} /> */}
      <SectionListPortrait images={images} withImageTitle={true} title='Piękne historie ślubne' />
    </div>
  );
};
export default HomeScreen;
