import ArrowJump from "../../components/ArrowJump";
import CustomLink from "../../components/CustomLink";
import SectionHeaderImage from "../../components/SectionHeaderImage";
import SectionImageWithContent from "../../components/SectionImageWithContent";
import ImageGridLayout from "../../components/ImageGridLayout";
import ImageFlexLayout from "../../components/ImageFlexLayout";
import SectionListPortrait from "../../components/SectionListPortrait";
import dataImages from "../../dataImages.json";
import headerImage from "../../../public/static/assets/home-screen-header-image-2.jpg";
import contentImage from "../../../public/static/assets/home-screen-content-image-2.jpg";
import portraitImageOne from "../../../public/static/assets/home-screen-portrait-image-1.jpg";
import portraitImageTwo from "../../../public/static/assets/home-screen-portrait-image-2.jpg";
import portraitImageThree from "../../../public/static/assets/home-screen-portrait-image-3.jpg";
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
      <CustomLink href="portfolio">Historie ślubne &gt;</CustomLink>
    ),
  };

  //section list portrait
  const portraitListTitle = "Ślub - najważniejsze wydarzenie";
  const portraitListImages = [
    { id: 1, url: portraitImageOne, title: "na przygotowaniach" },
    { id: 2, url: portraitImageTwo, title: "ślub w plenerze" },
    { id: 3, url: portraitImageThree, title: "w kościele" },
  ];

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
        images={portraitListImages}
        withImageTitle={true}
        title={portraitListTitle}
      />
    </div>
  );
};
export default HomeScreen;
