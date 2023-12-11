const ids = [
    "sign-in-text", 
    "email-label",
    "email-inputError",
    "pwd-label",
    "pwd-inputError",
    "remember-me-label",
    "help",
    "fb-btn-text",
    "sign-up",
    "sign-up-link",
    "reCAPInfo",
    "learn-more",
    "reCAP1",
    "reCAP2",
    "reCAP3",
    "reCAP4",
    "reCAP5",
    "footer-header",
    "gift",
    "terms",
    "privacy"
]

const labels = Object.freeze (
    {
        'en': [
            "Sign In",
            "Email or phone number",
            "Please enter a valid email or phone number.",
            "Password",
            "Your password must contain between 4 and 60 characters.",
            "Remember me",
            "Need help?",
            "Login with Facebook",
            "New to Netflix? ",
            "Sign up now.",
            "This page is protected by Google reCAPTCHA to ensure you're not a bot. ",
            "Learn more",
            "The information collected by Google reCAPTCHA is subject to the Google ",
            "Privacy Policy",
            " and ",
            "Terms of Service",
            ", and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).",
            "Questions? Call ",
            "Gift Card Terms",
            "Terms of Use",
            "Privacy Statement",
        ],
        'pt': [
            "साइन इन",
            "ईमेल या फ़ोन नंबर",
            "कृपया एक मान्य ईमेल या फ़ोन नंबर दर्ज करें।",
            "पासवर्ड",
            "आपका पासवर्ड 4 से 60 वर्णों के बीच होना चाहिए।",
            "मुझे याद रखें",
            "मदद चाहिए?",
            "फेसबुक के साथ लॉगिन करें",
            "Netflix में नए हैं? ",
            "अब साइन अप करें।",
            "इस पृष्ठ की सुरक्षा Google reCAPTCHA द्वारा की जाती है ताकि आप एक बॉट नहीं हैं। ",
            "और जानें",
            "Google reCAPTCHA द्वारा जुटाई गई जानकारी को Google की ",
            "गोपनीयता नीति",
            " और ",
            "सेवा की शर्तें",
            " के अधीन रखा जाता है, और इसे reCAPTCHA सेवा प्रदान करने, बनाए रखने और सुरक्षा उद्देश्यों के लिए उपयोग किया जाता है (यह Google द्वारा व्यक्तिगत विज्ञापन के लिए उपयोग नहीं होता है)।",
            "सवाल हैं? कॉल करें ",
            "गिफ्ट कार्ड शर्तें",
            "उपयोग की शर्तें",
            "गोपनीयता वक्तव्य",
        ],
    }
);

const loadTexts = function (lang) {
    let text = lang === 'pt' ? labels.pt : labels.en;
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = text[i];
    }
    document.getElementById('login-button').value = text[0];
    document.lang = lang;
}

const getSelectedLanguage = function () {
    let selector = document.getElementById("language-selector");
    let value = selector.options[selector.selectedIndex].value;
    return value;
}

const getBrowserLanguage = function () {
    let lang = navigator.language || navigator.userLanguage;
    lang = lang.slice(0, 2);
    return lang;
}

const setSelectedLanguage = function (lang) {
    lang = lang === 'pt' ? lang : 'en';
    document.getElementById('language-selector').value = lang;
}

const setUpLanguage = function () {
    let lang = getBrowserLanguage();
    lang = lang.slice(0, 2);
    loadTexts(lang);
    setSelectedLanguage(lang);
}