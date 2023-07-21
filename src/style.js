const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    boxWidthTwo: "w-full",

    heading1: "font-nunito font-extrabold xs:text-[48px] text-[32px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading2: "font-nunito font-extrabold xs:text-[38px] text-[26px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading3: "font-nunito font-extrabold xs:text-[38px] text-[26px] text-white xs:leading-[51.83px] leading-[51.83px] w-full",
    paragraph: "font-nunito font-normal text-white text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImgReverseTwo: `flex-auto flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    sectionInfoTwo: `flex-auto ${styles.flexStart} flex-col`,
};

export default styles;