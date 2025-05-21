import { StyleSheet } from 'react-native';
import Constants from './Constants';
import AppColors from './Colors';

const BaseStyle = {
  style: StyleSheet.create({
    headingStyle: {
      fontSize: Constants.largeTitleFontSize,
      fontFamily: Constants.fontMPLUSRoundedBold,
      color: AppColors.themeBlack,
    },
    subheadingStyle: {
      fontSize: 20,
      fontFamily: Constants.fontMPLUSRoundedBold,
      color: 'black',
    },
    titleStyle: {
      fontSize: 15,
      fontFamily: Constants.fontMPLUSRoundedMedium,
      color: 'black',
    },
    subheadingRegularStyle: {
      fontSize: 14,
      fontFamily: Constants.fontMPLUSRoundedRegular,
      color: 'black',
    },
    bodyStyle: {
      fontSize: 16,
      fontFamily: Constants.fontMPLUSRoundedRegular,
      color: 'black',
    },
    descriptionStyle: {
      fontSize: 12,
      fontFamily: Constants.fontMPLUSRoundedRegular,
      color: 'black',
    },
    smallTextStyle: {
      fontSize: Constants.microFontSize,
      fontFamily: Constants.fontMPLUSRoundedRegular,
    },
    smallHeadingStyle: {
      fontSize: Constants.smallFontSize,
      fontFamily: Constants.fontMPLUSRoundedBold,
      color: 'black',
    },

    navTitleStyle: {
      fontSize: Constants.navTitleFontSize,
      fontFamily: Constants.fontMPLUSRoundedBold,
    },

    subtitleStyle: {
      fontSize: Constants.mediumFontSize,
      fontFamily: Constants.fontMPLUSRoundedRegular,
    },
    buttonText: {
      fontSize: 20,
      fontFamily: Constants.fontMPLUSRoundedRegular,
    },
    microTitleStyle: {
      fontSize: Constants.smallFontSize,
      fontFamily: Constants.fontMPLUSRoundedRegular,
    },
    bottomLogo: {
      marginTop: 20,
      width: '100%',
      height: 55,
      resizeMode: 'contain',
    },
    root: {
      flex: 1,
      flexDirection: 'column',
    },
    scrollViewContainerSty: {
      flexGrow: 1,
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
    checkboxContainer: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      marginTop: Constants.screenHeight * 0.01,
    },
  }),
};

export default BaseStyle;
