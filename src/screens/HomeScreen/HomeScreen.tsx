import ArrowJump from "../../components/ArrowJump";
import CustomLink from "../../components/CustomLink";
import SectionHeaderImage from "../../components/SectionHeaderImage";
import SectionImageWithContent from "../../components/SectionImageWithContent";
import ImageGridLayout from "../../components/ImageGridLayout";
import ImageFlexLayout from "../../components/ImageFlexLayout";
import SectionListPortrait from "../../components/SectionListPortrait";
import dataImages from "../../dataImages.json";
import styles from "./HomeScreen.module.scss";
import { Meta } from "../../meta";

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
    { id: 1, url: "home-screen-portrait-image-1.jpg", title: "na przygotowaniach" },
    { id: 2, url: "home-screen-portrait-image-2.jpg", title: "ślub w plenerze" },
    { id: 3, url: "home-screen-portrait-image-3.jpg", title: "w kościele" },
  ];

  return (
    <>
      <Meta
        webUrl="https://www.laureimage.com"
        keywords="Laureimage, fotograf ślubny, fotograf szczecin, fotografia ślubna, wesele, plener ślubny"
        type="text"
        title="Fotografia Ślubna, Fotograf Ślubny Szczecin"
        description="Naturalna Fotografia Ślubna, Fotograf Szczecin"
        imageUrl="https://www.laureimage.com/_next/image?url=%2Fstatic%2Fassets%2Fhome-screen-header-image-2.jpg&w=1920&q=75"
        imageAlt="Fotografia Ślubna Home"
      />
    <div className={styles.container}>
      <SectionHeaderImage
        title={headerTitle}
        image="home-screen-header-image-2.jpg"
        icon={<ArrowJump arrowDown containerStyle={headerArrowStyle} />}
      />
      <SectionImageWithContent
        title={contentTitle}
        image="home-screen-content-image-2.jpg"
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
    </>
  );
};
export default HomeScreen;
