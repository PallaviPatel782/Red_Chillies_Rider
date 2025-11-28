import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Settings
      settings: "Settings",
      general: "General",
      changeLanguage: "Change Language",

      // splash
      welcome: "Welcome Back",
      signupText: "Sign-up to deliver orders with Red Chillies Rider",
      continue: "Continue",
      enterPhone: "Enter Phone Number",
      selectLang: "Select Language",
      english: "English",
      arabic: "العربية",

      // otp
      otpTitle: "Verification Code",
      otpSubtitle: "We have sent the verification code to your mobile number.",
      otpTimer: "Didn’t get the OTP? Resend SMS in",

      // Rider Data
      riderDetails: "Rider Details",
      fullName: "User Full Name",
      enterFullName: "Enter your full name",
      workCity: "Please select your work city",
      workArea: "Please select your work area",
      chooseVehicle: "Choose Vehicle",
      selectVehicle: "Select Vehicle",
      idProof: "ID / Address Proof",
      drivingLicense: "Driving License",
      uploadDocument: "Upload Document",
      motorcycle: "Motorcycle / Scooty",
      ev: "Electric Vehicle (EV)",
      noVehicle: "I don’t have a vehicle",

      // bank details    & change bank detials

      updateBankInfo: "Please update your bank account details to continue receiving your earnings.",
      snb: "Saudi National Bank (SNB)",
      alrajhi: "Al Rajhi Bank",
      riyad: "Riyad Bank",
      sabb: "Saudi British Bank (SABB)",
      anb: "Arab National Bank (ANB)",
      aljazira: "Bank AlJazira",
      bsfr: "Banque Saudi Fransi (BSF)",
      alinma: "Alinma Bank",
      albilad: "Bank AlBilad",
      gib: "Gulf International Bank",
      bankDetails: "Bank Account Details",
      changeBankAccountDetails: "Change Bank Account Details",
      bankInfo: "Please fill the details of the bank account where your earnings will be credited.",
      bank: "Bank",
      selectBank: "Select Bank",
      accountNumber: "Account Number",
      confirmAccountNumber: "Confirm Account Number",
      enterAccountNumber: "Enter account number",
      enterConfirmAccount: "Confirm account number",
      ibanNumber: "IBAN Number",
      enterIban: "Enter IBAN (e.g., SA03XXXXXXXXXXXXXXX)",
      bankNote: "All your future payments will be credited to this bank account.",
      verify: "Verify",

      // selfie
      takeSelfie: "Take Selfie",
      selfieGuidelines: "Selfie Guidelines",
      imgShouldBeClear: "Image should be clear",
      clickWithoutCap: "Click without cap",
      previewSelfie: "Preview your selfie",
      takeSelfieBtn: "Take Selfie",
      retake: "Retake",
      submit: "Submit",
      selfieSubmitted: "Selfie submitted successfully!",
      cameraPermissionTitle: "Camera Permission",
      cameraPermissionMsg:
        "App needs access to your camera to take a selfie.",
      cancel: "Cancel",
      ok: "OK",
      cameraDenied: "Camera permission denied",
      cameraError: "Camera error",

      // Menu / More
      profile: "Profile",
      viewProfile: "View Profile",
      support: "Support",
      helpCenter: "Help Center",
      changeBankAccount: "Change Bank Account",
      more: "More",
      about: "About",
      sendFeedback: "Send Feedback",
      reportIssue: "Report an Issue",
      logout: "Log out",
      iban: "IBAN",

      // pocket 

      "earnings": "Earnings",
      "pocket": "POCKET",
      "pocketBalance": "Pocket balance",
      "availableCashLimit": "Available cash limit",
      "withdraw": "Withdraw",
      "pocketStatements": "Pocket statements",

      // withdraw

      "addToBankAccount": "Add to bank account",
      "withdrawableAmount": "Withdrawable amount",
      "enterAmount": "Enter amount",
      "maxWithdrawLimit": "Maximum withdrawal limit is",
      "oneWithdrawDay": "You can withdraw only 1 time in a day",

      // withdrawn successfully 

      "successWithdraw": "Successfully withdrawn",
      "okay": "Okay",
      "pocketWithdrawSuccess": "Pocket withdrawal successful",
      "date": "Date",
      "impsRef": "IMPS ref no.",

      // profile 

      "yourProfile": "Your Profile",
      "name": "Name",
      "enterName": "Enter Name",
      "mobile": "Mobile",
      "enterMobile": "Enter Mobile Number",
      "selectWorkCity": "Please select your work city",
      "selectCity": "Select City",
      "selectWorkArea": "Please select your work area",
      "selectArea": "Select Area",
      "car": "Car",
      "bicycle": "Bicycle",
      "upload": "Upload",
      "updateProfile": "Update Profile",
      "uploadImage": "Upload Image",
      "takePhoto": "Take Photo",
      "chooseFromGallery": "Choose from Gallery",

      // helpcenter

      howCanWeHelp: "How can we help",
      cannotDeliver: "Cannot Deliver",
      restaurantClosed: "Restaurant is closed",
      cantFindRestaurant: "Can’t find restaurant",

      // can not deliver help center 

      "personalEmergency": "Personal Emergency",
      "bikeIssue": "Bike issue",
      "metWithAccident": "Met with an accident",

      // live  order help

      "liveOrderHelp": "Live Order Help",
      "customerNotReachable": "Customer not reachable / answering",
      "wrongAddress": "Customer address / location is wrong",
      "pleaseWait": "Please wait...",
      "adminWillReachSoon": "Our admin will reach you soon regarding your request.",
      "arrivalConfirmed": "Arrival Confirmed",
      "reachedDropLocation": "You’ve reached the customer’s drop location.",
      "goToDropDetails": "Go to Drop Details",

      // help center deny order

      "noReasonSelected": "No reason selected",
      "denialWarning": "You did {{count}} denials in the last {{orders}} orders!",
      "denyOrder": "Deny order",
      "dontDeny": "Don't Deny",
      "areYouSure": "Are you sure?",
      "orderId": "Order Id",
      "reason": "Reason",
      "notProvided": "Not provided",
      "cancelRideInfo": "If you cancel the ride, you won’t be able to get another one for 30 minutes.",
      "offlineForDenial": "You will be taken offline for denial",
      "comeBackOnline": "Please come back online when you are ready to start delivering orders",

      "restaurantClosedFull": "Cannot Deliver : Restaurant is closed",
      "cantFindRestaurantFull": "Cannot Deliver : Can’t find restaurant",

      // feedback

      feedbackInfo: "Tell us what you love about the app, or what we could be doing better.",
      feedbackPlaceholder: "Write your feedback here...",
      submitFeedback: "Submit feedback",
      feedbackEmpty: "Please enter your feedback before submitting.",
      feedbackSubmitted: "Feedback submitted successfully!",

      // report


      selectOption: "Select an option",
      email: "Email",
      enterEmailOptional: "Enter your email (optional)",
      message: "Message",
      writeMessage: "Write your message here...",
      fillAllRequiredFields: "Please fill all required fields (*)",
      issueSubmittedSuccessfully: "Issue submitted successfully!",
      reportIssueOption1: "Report an Issue",
      reportIssueOption2: "Report an Incident",

      // home page 

      "offlineStatus": "You’re currently offline - switch online to start your next trip",
      "onBreakStatus": "You are currently on a break. Whenever you’re ready to continue your trips, please go online.",
      "onlineStatus": "You are online. You’ll get your trip soon. Just wait",
      "todaysProgress": "Today's progress",
      "loginHours": "Login hours",
      "tripHistory": "Trip history ▶",
      "todaysTrips": "Today's trips",
      "inProgressTrip": "In Progress Trip",
      "pickupFrom": "Pickup From",
      "dropTo": "Drop To",
      "expectedEarnings": "Expected earnings",
      "acceptOrder": "ACCEPT ORDER",
      "youAreOffline": "You are Offline",
      "goOnlineMessage": "Please go online to start receiving trips.",
      "dontShowAgain": "Don’t show again",
      "goOnline": "GO ONLINE",
      "earnings1": "Earnings ▶",
    },
  },

  ar: {
    translation: {
      // Settings
      settings: "الإعدادات",
      general: "عام",
      changeLanguage: "تغيير اللغة",

      // splash
      welcome: "مرحبا بعودتك",
      signupText: "سجل لتوصيل الطلبات مع Red Chillies Rider",
      continue: "متابعة",
      enterPhone: "أدخل رقم الهاتف",
      selectLang: "اختر اللغة",
      english: "الإنجليزية",
      arabic: "العربية",

      // otp
      otpTitle: "رمز التحقق",
      otpSubtitle: "لقد أرسلنا رمز التحقق إلى رقم هاتفك.",
      otpTimer: "لم يصلك رمز التحقق؟ إعادة الإرسال خلال",

      // rider data
      riderDetails: "تفاصيل السائق",
      fullName: "الاسم الكامل",
      enterFullName: "أدخل اسمك الكامل",
      workCity: "يرجى اختيار مدينة العمل",
      workArea: "يرجى اختيار منطقة العمل",
      chooseVehicle: "اختر المركبة",
      selectVehicle: "اختر المركبة",
      idProof: "إثبات الهوية / العنوان",
      drivingLicense: "رخصة القيادة",
      uploadDocument: "رفع المستند",
      motorcycle: "دراجة نارية / سكوتر",
      ev: "مركبة كهربائية",
      noVehicle: "ليس لدي مركبة",

      // bank details & change bank detials 
      updateBankInfo: "يرجى تحديث تفاصيل حسابك المصرفي للاستمرار في استلام أرباحك.",
      snb: "البنك الأهلي السعودي",
      alrajhi: "مصرف الراجحي",
      riyad: "بنك الرياض",
      sabb: "البنك السعودي الأول",
      anb: "البنك العربي الوطني",
      aljazira: "بنك الجزيرة",
      bsfr: "البنك السعودي الفرنسي",
      alinma: "مصرف الإنماء",
      albilad: "بنك البلاد",
      gib: "بنك الخليج الدولي",
      bankDetails: "تفاصيل الحساب البنكي",
      changeBankAccountDetails: "تغيير تفاصيل الحساب البنكي",
      bankInfo: "يرجى تعبئة تفاصيل الحساب البنكي الذي سيتم تحويل أرباحك إليه.",
      bank: "البنك",
      selectBank: "اختر البنك",
      accountNumber: "رقم الحساب",
      confirmAccountNumber: "تأكيد رقم الحساب",
      enterAccountNumber: "أدخل رقم الحساب",
      enterConfirmAccount: "أكد رقم الحساب",
      ibanNumber: "رقم الآيبان",
      enterIban: "أدخل رقم الآيبان (مثال: SA03XXXXXXXXXXXXXXX)",
      bankNote: "سيتم تحويل جميع مدفوعاتك المستقبلية إلى هذا الحساب البنكي.",
      verify: "تحقق",


      // selfie
      takeSelfie: "التقط صورة سيلفي",
      selfieGuidelines: "إرشادات السيلفي",
      imgShouldBeClear: "يجب أن تكون الصورة واضحة",
      clickWithoutCap: "التقاط الصورة بدون قبعة",
      previewSelfie: "معاينة صورتك",
      takeSelfieBtn: "التقاط سيلفي",
      retake: "إعادة الالتقاط",
      submit: "إرسال",
      selfieSubmitted: "تم إرسال السيلفي بنجاح!",
      cameraPermissionTitle: "إذن الوصول للكاميرا",
      cameraPermissionMsg: "يحتاج التطبيق إلى إذن استخدام الكاميرا.",
      cancel: "إلغاء",
      ok: "موافق",
      cameraDenied: "تم رفض إذن الكاميرا",
      cameraError: "خطأ في الكاميرا",

      // menu / more
      profile: "الملف الشخصي",
      viewProfile: "عرض الملف الشخصي",
      support: "الدعم",
      helpCenter: "مركز المساعدة",
      changeBankAccount: "تغيير الحساب البنكي",
      more: "المزيد",
      about: "حول التطبيق",
      sendFeedback: "إرسال ملاحظات",
      reportIssue: "الإبلاغ عن مشكلة",
      logout: "تسجيل الخروج",
      iban: "آيبان",

      // pocket 
      "earnings": "الأرباح",
      "pocket": "الجيب",
      "pocketBalance": "رصيد الجيب",
      "availableCashLimit": "الحد النقدي المتاح",
      "withdraw": "سحب",
      "pocketStatements": "كشوفات الجيب",

      // withdraw

      "addToBankAccount": "الإضافة إلى الحساب البنكي",
      "withdrawableAmount": "المبلغ المتاح للسحب",
      "enterAmount": "أدخل المبلغ",
      "maxWithdrawLimit": "الحد الأقصى للسحب هو",
      "oneWithdrawDay": "يمكنك السحب مرة واحدة فقط في اليوم",

      // withdrawn sucessfully

      "successWithdraw": "تم السحب بنجاح",
      "okay": "حسناً",
      "pocketWithdrawSuccess": "تم السحب من الجيب بنجاح",
      "date": "التاريخ",
      "impsRef": "رقم مرجع IMPS",

      // profile section 

      "yourProfile": "ملفك الشخصي",
      "name": "الاسم",
      "enterName": "أدخل الاسم",
      "mobile": "رقم الجوال",
      "enterMobile": "أدخل رقم الجوال",
      "selectWorkCity": "يرجى اختيار مدينة العمل",
      "selectCity": "اختر المدينة",
      "selectWorkArea": "يرجى اختيار منطقة العمل",
      "selectArea": "اختر المنطقة",
      "car": "سيارة",
      "bicycle": "دراجة",
      "upload": "رفع",
      "updateProfile": "تحديث الملف",
      "uploadImage": "رفع صورة",
      "takePhoto": "التقاط صورة",
      "chooseFromGallery": "اختيار من المعرض",

      // Help Center
      howCanWeHelp: "كيف يمكننا المساعدة",
      cannotDeliver: "لا يمكن التسليم",
      restaurantClosed: "المطعم مغلق",
      cantFindRestaurant: "لا يمكن العثور على المطعم",


      // can not deliver help center 

      "personalEmergency": "ظرف طارئ شخصي",
      "bikeIssue": "مشكلة الدراجة",
      "metWithAccident": "تعرض لحادث",

      // live order help

      "liveOrderHelp": "مساعدة الطلب المباشر",
      "customerNotReachable": "العميل غير متاح / لا يجيب",
      "wrongAddress": "عنوان العميل / الموقع خاطئ",
      "pleaseWait": "الرجاء الانتظار...",
      "adminWillReachSoon": "سيتواصل معك المسؤول قريبًا بشأن طلبك.",
      "arrivalConfirmed": "تم التأكيد على الوصول",
      "reachedDropLocation": "لقد وصلت إلى موقع تسليم العميل.",
      "goToDropDetails": "اذهب إلى تفاصيل التسليم",

      // help center deny order

      "noReasonSelected": "لم يتم اختيار سبب",
      "denialWarning": "لقد قمت بـ {{count}} إلغاء في آخر {{orders}} طلب!",
      "denyOrder": "رفض الطلب",
      "dontDeny": "لا ترفض",
      "areYouSure": "هل أنت متأكد؟",
      "orderId": "رقم الطلب",
      "reason": "السبب",
      "notProvided": "غير متوفر",
      "cancelRideInfo": "إذا ألغيت الرحلة، فلن تتمكن من الحصول على أخرى لمدة 30 دقيقة.",
      "offlineForDenial": "سيتم وضعك في وضع عدم الاتصال بسبب الرفض",
      "comeBackOnline": "يرجى العودة عبر الإنترنت عندما تكون مستعدًا للبدء في توصيل الطلبات",

      "restaurantClosedFull": "لا يمكن التسليم: المطعم مغلق",
      "cantFindRestaurantFull": "لا يمكن التسليم: لا يمكن العثور على المطعم",

      // feedback

      feedbackInfo: "أخبرنا بما تحبه في التطبيق، أو ما يمكننا تحسينه.",
      feedbackPlaceholder: "اكتب ملاحظاتك هنا...",
      submitFeedback: "إرسال الملاحظات",
      feedbackEmpty: "يرجى إدخال ملاحظاتك قبل الإرسال.",
      feedbackSubmitted: "تم إرسال الملاحظات بنجاح!",

      // Report

      selectOption: "اختر خيارًا",
      email: "البريد الإلكتروني",
      enterEmailOptional: "أدخل بريدك الإلكتروني (اختياري)",
      message: "الرسالة",
      writeMessage: "اكتب رسالتك هنا...",
      fillAllRequiredFields: "يرجى ملء جميع الحقول المطلوبة (*)",
      issueSubmittedSuccessfully: "تم إرسال المشكلة بنجاح!",
      reportIssueOption1: "الإبلاغ عن مشكلة",
      reportIssueOption2: "الإبلاغ عن حادث",

      // home page 

      "offlineStatus": "أنت غير متصل حاليًا - انتقل إلى الاتصال لبدء رحلتك التالية",
      "onBreakStatus": "أنت في استراحة حاليًا. عندما تكون مستعدًا لمتابعة رحلاتك، يرجى الاتصال بالإنترنت.",
      "onlineStatus": "أنت متصل بالإنترنت. ستحصل على رحلتك قريبًا. انتظر فقط",
      "todaysProgress": "تقدم اليوم",
      "loginHours": "ساعات تسجيل الدخول",
      "tripHistory": "سجل الرحلات ▶",
      "todaysTrips": "رحلات اليوم",
      "inProgressTrip": "الرحلة الجارية",
      "pickupFrom": "استلام من",
      "dropTo": "توصيل إلى",
      "expectedEarnings": "الأرباح المتوقعة",
      "acceptOrder": "قبول الطلب",
      "youAreOffline": "أنت غير متصل",
      "goOnlineMessage": "يرجى الاتصال لبدء استقبال الرحلات.",
      "dontShowAgain": "عدم الإظهار مرة أخرى",
      "goOnline": "الاتصال",
      "earnings1": "الأرباح ▶",

    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
