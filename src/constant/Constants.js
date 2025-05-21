import moment from 'moment';
import { Platform, Dimensions, StyleSheet } from 'react-native';
import ImageSource from './ImageSource';

const Constants = {
  //Petasure Contact Number
  CustomerCareNumbe: '0800 998 7892',
  GOOGLE_API_KEY: 'AIzaSyCUivfatZ-gt30f_y33jfWj65NLKy1tclI',

  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,

  buttonWidth: Dimensions.get('window').width - 50,

  largeTitleFontSize: Dimensions.get('window').height * 0.046,

  headingFontSize: Dimensions.get('window').height * 0.036,

  largeFontSize: Dimensions.get('window').height * 0.03,

  mediumFontSize: Dimensions.get('window').height * 0.025,

  smallFontSize: 14, //Dimensions.get("window").height * 0.015,
  microFontSize: Dimensions.get('window').height * 0.012,

  buttonFontSize: Dimensions.get('window').height * 0.017,

  navTitleFontSize: Dimensions.get('window').height * 0.025,

  marginTop: Dimensions.get('window').height * 0.020,
  itemMargin : Dimensions.get('window').height * 0.010,

  rowGap: Dimensions.get('window').height * 0.030,

  //------------
  // Social URLs

  //------------
  // Fonts
  fontMPLUSRoundedRegular:
    Platform.OS === 'ios' ? 'MPLUSRounded-Regular' : 'mplus_rounded_regular',
  fontMPLUSRoundedBold:
    Platform.OS === 'ios' ? 'MPLUSRounded-Black' : 'mplus_rounded_black',
  fontMPLUSRoundedMedium:
    Platform.OS === 'ios' ? 'MPLUSRounded-Medium' : 'mplus_rounded_medium',

  //-- Get device ID :-

  currentDate: moment().format('L'),

  kycSelectOptions: [
    { title: 'Take a Photo', id: '1', isActive: true },
    { title: 'Choose From Gallery', id: '2', isActive: true },
  ],

  supportedDocumentsSelectOptions: [
    { title: 'Take a Photo', id: '1', isActive: true },
    { title: 'Choose From Gallery', id: '2', isActive: true },
    { title: 'Choose a Document', id: '3', isActive: true },
  ],

  projectTabs: [
    { id: '1', title: 'In Progress', isActive: true, value: 'in_progress' },
    { id: '2', title: 'Completed', isActive: false, value: 'completed' },
    { id: '3', title: 'Archive', isActive: false, value: 'archive' },
    { id: '4', title: 'Paused', isActive: false, value: 'paused' },
  ],

  invoiceTabs: [
    { id: '1', title: 'Paid', isActive: true, value: 'paid' },
    { id: '2', title: 'Unpaid', isActive: false, value: 'unpaid' },
    { id: '3', title: 'All', isActive: false, value: 'all' },
  ],

  profitLosstSummaryTabs: [
    { id: '1', title: 'Invoice List', isActive: true, value: 'paid' },
    { id: '2', title: 'Receipt', isActive: false, value: 'unpaid' },
    { id: '3', title: 'P & L Summary', isActive: false, value: 'all' },
  ],

  kProjectStatus: {
    kInProgress: 'in_progress',
    kCompleted: 'completed',
    kArchived: 'archive',
    kPaused: 'paused',
    kResume: 'resume',
  },
  documentSelectOptions: [
    { title: 'Choose a Document', id: '1', isActive: true },
    { title: 'Take a Photo', id: '2', isActive: true },
    { title: 'Choose From Gallery', id: '3', isActive: true },
  ],

  invoiceItemActions: [
    { title: 'Edit', id: '1', isActive: true },
    { title: 'Delete', id: '2', isActive: true },
  ],

  socialLoginTypes: { Facebook: 'facebook', Google: 'google', Apple: 'apple' },
  userTypes: { kOwner: 'builder', kClient: 'client', kWorker: 'worker' },
  subscriptionType: {
    kRegular: 'REGULAR',
    kTrial: 'TRIAL',
    kNoPlan: 'NO_ACTIVE_PLAN',
  },
  paymentMethod: { kStripe: 'Stripe', kPaypal: 'Paypal', kNone: '' },
  kSubscriptionId: 'subscriptionId',
  kFirebaseConfig: {
    kGoogleMapApiKey: 'AIzaSyASUD6NnLrVXVSmvtE-adHIsg0duOGrBfA',
    kDynamicLinkPrefix: 'https://buildezii.page.link',
    kAndroidPackageName: 'com.buildezi.app',
    kiOSPackageName: 'com.buildezi.ajas',
    kAppStoreId: '1632089570',
    kInductionTermURL:
      'https://docs.google.com/document/d/151ukKWq3nP7TmPR2CEvYYhxOetC5CK_RheK_2fd_FAw/export?format=pdf',
    kFallBackURL: 'https://buildezii.page.link/NLtk',
  },
  kFireStoreConfig: {
    kFirestoreCollection: 'app_status',
    kFirestoreAppStatusId: 'wTBmkujMo3Fp4ipQ6ebu',
    kThousand: 1000,
  },
  kNotificationModules: {
    kPeople: 'people',
    kPlan: 'plan',
    kTask: 'task',
    kDailyLogs: 'daily_work_report',
    kProductSpecification: 'specifications_and_product_information',
    kVARIATIONS: 'variations',
    // kSAFETY: 'safety',
    // kGENERAL: 'general',
    kREQUEST_OF_INFORMATION: 'roi',
    kEXTENSION_OF_TIME: 'eot',
    kPUNCH_LIST: 'punchlist',
    kTOOL_BOX: 'toolbox',
    kSAFETY_WORK_METHOD_STATEMENT: 'safe_work_method_statement',
    kMATERIAL_SAFETY_DATA_SHEET: 'material_safety_data_sheets',
    kWORK_HEALTH_SAFETY_PLAN: 'work_health_and_safety_plan',
    kSITE_RISK_ASSESSMENT: 'site_risk_assessment',
    kINCIDENT_REPORT: 'incident_report',
    kSCHEDULE: 'schedule',
  },
  kSafetyModules: {
    kWorkMethodStatement: 'safe_work_method_statement',
    kMaterialDataSheet: 'material_safety_data_sheets',
    kWorkHeathSafetyPlan: 'work_health_and_safety_plan',
  },
  htmlToText: html => {
    const text = html
      .replace(/<[^>]+>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ') // Replace HTML entity for space
      .replace(/&amp;/g, '&') // Replace HTML entity for ampersand
      .replace(/&quot;/g, '"') // Replace HTML entity for double quote
      .replace(/&#39;/g, "'") // Replace HTML entity for single quote
      .replace(/&lt;/g, '<') // Replace HTML entity for less than
      .replace(/&gt;/g, '>'); // Replace HTML entity for greater than
    return text;
  },
};

export default Constants;
