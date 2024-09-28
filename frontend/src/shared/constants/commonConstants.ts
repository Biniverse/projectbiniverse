export class CommonConstant {
  public static readonly MEET_THE_TEAM = "Meet the Team";
  public static readonly COPYRIGHT_TEXT =
    "© 2024 BiniVerse. All rights reserved.";
  public static readonly BINIVERSE_TITLE = "Biniverse";
  public static readonly PAGE_NOT_FOUND_TEXT = "404, Page not found";
  public static readonly PRIVACY_POLICY = "Privacy Policy";
  public static readonly TERMS_OF_SERVICE = "Terms of Service";

  public static readonly REGEX_PATTERNS = {
    EMAIL_PATTERN: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  };
  public static readonly FORM = {
    SIGN_UP_ERROR: {
      FIRST_NAME: "First Name is required",
      LAST_NAME: "Last Name is required",
      CONTACT_NO: "Contact No. is required",
      CONTACT_NO_LENGTH: "Contact Number should be 11 digits",
      EMAIL: "Email is required",
      INVALID_EMAIL: "Invalid email address",
    },
    SIGN_UP: {
      FIRST_NAME: "First Name",
      LAST_NAME: "Last Name",
      CONTACT_NO: "Contact",
      EMAIL: "Email",
    },
  };
}
