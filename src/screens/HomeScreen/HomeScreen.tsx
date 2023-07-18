import ArrowJump from "../../components/ArrowJump";
import CustomLink from "../../components/CustomLink";
import SectionHeaderImage from "../../components/SectionHeaderImage";
import SectionImageWithContent from "../../components/SectionImageWithContent";
import ImageGridLayout from "../../components/ImageGridLayout";
import ImageFlexLayout from "../../components/ImageFlexLayout";
import SectionListPortrait from "../../components/SectionListPortrait";
import dataImages from '../../dataImages.json'
import headerImage from "../../../public/assets/home-screen-header-image-2.jpg";
import contentImage from "../../../public/assets/home-screen-content-image-2.jpg";
import styles from "./HomeScreen.module.scss";

const HomeScreen = () => {
  //header
  const headerTitle = "Fotografia Ślubna";
  const headerArrowStyle = {
    backgroundColor: "transparent",
    width: "65px",
    height: "65px",
  };
  //content with image
  const contentTitle = "Opowieść o Twojej prawdziwej miłości";
  const contentSubtitle = "Wasze Piękne Historie";
  const contentImageDesc = {
    desc: "Romantyczne. Piękne. Nowoczesne.",
    actionButton: (
      <CustomLink href="portfolio">Historie ślubne &gt;&gt;</CustomLink>
    ),
  };

  //section list portrait
  const portraitListTitle = "ŚLUB - NAJWAŻNIEJSZE WYDARZENIE"

  return (
    <div className={styles.container}>
      <SectionHeaderImage
        title={headerTitle}
        image={headerImage}
        icon={<ArrowJump arrowDown containerStyle={headerArrowStyle} />}
      />
      <SectionImageWithContent
        title={contentTitle}
        image={contentImage}
        subtitle={contentSubtitle}
        imageDesc={contentImageDesc}
      />
      {/* <ImageGridLayout images={dataImages.images} title='Fotografie studyjne' style={{ gridTemplateColumns: 'repeat(minmax(150px, 150px))', gridTemplateRows: '200px 200px 200px' }} /> */}
      {/* <ImageFlexLayout images={dataImages.images} /> */}
      <SectionListPortrait
        images={dataImages.images}
        withImageTitle={true}
        title={portraitListTitle}
      />
    </div>
  );
};
export default HomeScreen;
