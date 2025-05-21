const ErrorConstants = {
  kValidEmail: 'Please enter a valid email address.',
  kCurrentPasswordEmpty: 'Please enter your current password.',
  kPasswordEmpty: 'Please enter your password.',
  kNewPasswordEmpty: 'Please enter your new password.',
  kConfirmPasswordEmpty: 'Please enter your confirm password.',
  kPasswordNotMatchedEmpty: 'Password and confirm password not matched.',
  kFirstName: 'First name should be less then or equals to 16 characters',
  kLastName: 'Last name should be less then or equals to 16 characters',
  kFirstNameEmpty: 'Please enter first name.',
  kFullNameEmpty: 'Please enter full name.',
  kLastNameEmpty: 'Please enter last name.',
  kEmailEmpty: 'Please enter email address.',
  kValidEmailPassword: 'Please enter valid email and password.',

  kUsernameEmpty: 'Please enter your username.',
  kGender: 'Please select Gender first.',
  kPhoneEmpty: 'Please enter phone number.',
  kValidPhone:
    'Please enter valid phone number. Phone number should be between 10 to 15 characters.',
  kValidPassword:
    'The password should be at least 8 digits in combination of lower case, upper case, numbers and special characters..',
  kPasswordsUnMatch: 'Passwords do not match.',
  kPasswordsLength: 'Password must be minimum 8 characters long.',
  kValidSubject: 'Please enter subject',
  kValidMessage: 'Please enter message',
  kEmptyBusinessName: 'Please enter business name',
  kEmptyBusinessType: 'Please enter business type',
  kEmptyGstNumber: 'Please enter GST Number',
  kValidGstNumber: 'Please enter valid GST Number',
  kEmptyCity: 'Please enter city',
  kEmptyPinCode: 'Please enter pin code',
  kTermsAndConditionValidation:
    'You must accept the terms and conditions to create an account.',
  kPetNameEmpty: 'Please enter Pet Name.',

  kFrontImageEmpty: 'Please select front image.',
  kBackImageEmpty: 'Please select back image.',
  kAddressEmpty: 'Please enter Address',
  kIncomeEmpty: 'Please enter Income',
  kIncomeValid: 'Please enter valid Income',

  kMissingAddressEmpty: 'Please enter Lost Area',
  kMissingDateEmpty: 'Please select Lost Date',

  kErrorFileSize: 'File Size Error',
  kErrorFileSizeDesc:
    'The selected file is too large. Please select a file smaller than 5MB.',
  kErrorFileType: 'File Type Error',
  kErrorFileTypeDesc:
    'The selected file is not supported. Please select an image file.',

  kDOBEmpty: 'Please enter date of birth(DOB)',
  kNationalityEmpty: 'Please enter your Nationality',
  kStateOfOriginEmpty: 'Please enter your State of Origin',
  kLocalGovernmentArea: 'Please enter your Local Government Area',
  kCityEmpty: 'Please enter City',
  kStateEmpty: 'Please enter State',
  kZipCodeEmpty: 'Please enter Zip Code',

  kEmployerNameEmpty: 'Please enter employer name.',
  kEmployerAddressEmpty: 'Please enter employer address.',
  kJobTitleEmpty: 'Please enter job title.',
  kYearsOfEmploymentEmpty: 'Please enter years of employment.',
  kMonthlyIncomeEmpty: 'Please enter monthly income.',

  kIdentityType:
    'You must select one of the following: Id card, Passport, Other.',

  // Personal Info
  kSectionEmpty: 'Section is required',
  kDateOfBirthEmpty: 'Please enter date of birth',
  kGenderEmpty: 'Please select gender',
  kMaritalStatusEmpty: 'Please select marital status',
  kNationalityEmpty: 'Please enter nationality',
  kStateOfOriginEmpty: 'Please select state of origin',
  kLocalGovernmentAreaEmpty: 'Please select local government area',
  kResidentialAddressEmpty: 'Please enter residential address',
  kEmailAddressEmpty: 'Please enter a valid email address',
  kPhoneNumberEmpty: 'Please enter a valid phone number',
  kNINEmpty: 'Please enter National Identification Number',
  kBVNEmpty: 'Please enter BVN',
  kMeansOfIdentificationEmpty: 'Please select means of identification',
  kIDNumberEmpty: 'Please enter ID number',
  kIssuingAuthorityEmpty: 'Please enter issuing authority',
  kExpiryDateEmpty: 'Please enter ID expiry date',

  // Employment & Income
  kEmploymentStatusEmpty: 'Please select employment status',
  kOccupationEmpty: 'Please enter occupation',
  kEmployerNameEmpty: 'Please enter employer name',
  kEmployerAddressEmpty: 'Please enter employer address',
  kEmployerContactInformationEmpty: 'Please enter employer contact information',
  kMonthlyIncomeEmpty: 'Monthly income must be greater than 0',
  kOtherSourcesOfIncomeEmpty:
    'Please enter other sources of income (or "None")',
  kSalaryAccountBankNameEmpty: 'Please enter salary account bank name',
  kSalaryAccountNumberEmpty: 'Please enter salary account number',

  // Loan Details
  kLoanAmountRequestedEmpty: 'Please enter loan amount requested',
  kLoanTenureEmpty: 'Please enter loan tenure',
  kLoanPurposeEmpty: 'Please enter loan purpose',
  kPreferredRepaymentPlanEmpty: 'Please select preferred repayment plan',
  kExistingLoansEmpty: 'Please indicate if you have existing loans',
  kExistingLoanDetailsEmpty: 'Please enter existing loan details (or "None")',

  // Guarantor
  kGuarantorFullNameEmpty: "Please enter guarantor's full name",
  kGuarantorRelationshipEmpty:
    "Please enter guarantor's relationship to applicant",
  kGuarantorPhoneNumberEmpty: "Please enter guarantor's phone number",
  kGuarantorAddressEmpty: "Please enter guarantor's residential address",
  kGuarantorOccupationEmpty: "Please enter guarantor's occupation",
  kGuarantorEmployerNameEmpty: "Please enter guarantor's employer name",
  kGuarantorEmployerAddressEmpty: "Please enter guarantor's employer address",
  kGuarantorSignatureEmpty: "Please upload guarantor's signature",

  // Banking Details
  kBankNameEmpty: 'Please enter bank name',
  kAccountNameEmpty: 'Please enter account name',
  kAccountNumberEmpty: 'Please enter account number',
  kSortCodeEmpty: 'Please enter sort code',
  kModeOfPaymentEmpty: 'Please select mode of payment',

  // Documents
  kRecentPassportPhotographEmpty: 'Please upload recent passport photograph',
  kValidIDCopyEmpty: 'Please upload valid ID copy',
  kValidIDTypeEmpty: 'Please select valid ID type',
  kUtilityBillEmpty: 'Please upload recent utility bill',
  kEmploymentLetterEmpty: 'Please upload employment letter',
  kRecentBankStatementEmpty: 'Please upload recent bank statement',
  kBusinessRegistrationDocumentEmpty:
    'Please upload business registration document (if self-employed)',

  kDateOfApplication: 'Please enter date of application',

  // Declarations
  kAcknowledgmentOfLoanTermsEmpty: 'You must acknowledge the loan terms',
  kConsentForCreditCheckEmpty: 'You must give consent for a credit check',
  kSignatureOfApplicantEmpty: "Please check mark applicant's signature",

  kInvalidLoanId: 'Selected Loan Id Invalid',
};

export default ErrorConstants;
