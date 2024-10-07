export class CommonConstant {
  public static readonly MEET_THE_TEAM = "Meet the Team";
  public static readonly COPYRIGHT_TEXT =
    "© 2024 BiniVerse. All rights reserved.";
  public static readonly BINIVERSE_TITLE = "Biniverse";
  public static readonly PAGE_NOT_FOUND_TEXT = "404, Page not found";
  public static readonly PRIVACY_POLICY = "Privacy Policy";
  public static readonly TERMS_OF_SERVICE = "Terms of Service";
  public static readonly DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  public static readonly MONTHS = [
    {
      index: 1,
      name: "January",
      initial: "Jan"
    },
    {
      index: 2,
      name: "February",
      initial: "Feb"
    },
    {
      index: 3,
      name: "March",
      initial: "Mar"
    },
    {
      index: 4,
      name: "April",
      initial: "Apr"
    },
    {
      index: 5,
      name: "May",
      initial: "May"
    },
    {
      index: 6,
      name: "June",
      initial: "Jun"
    },
    {
      index: 7,
      name: "July",
      initial: "Jul"
    },
    {
      index: 8,
      name: "August",
      initial: "Aug"
    },
    {
      index: 9,
      name: "September",
      initial: "Sept"
    },
    {
      index: 10,
      name: "October",
      initial: "Oct"
    },
    {
      index: 11,
      name: "November",
      initial: "Nov"
    },
    {
      index: 12,
      name: "December",
      initial: "Dec"
    }
  ];
  public static readonly MOCK_DATA_TIME_LOGS = [
    { date: "09/01/2024", login: "08:00", logout: "17:00" },
    { date: "09/02/2024", login: null, logout: null }, // Missing data
    { date: "09/03/2024", login: "09:00", logout: "18:00" },
    { date: "09/04/2024", login: "08:30", logout: "17:30" },
    { date: "09/05/2024", login: null, logout: "17:00" }, // Missing login
    { date: "09/06/2024", login: "08:00", logout: null }, // Missing logout
    { date: "09/07/2024", login: "07:45", logout: "16:45" },
    { date: "09/08/2024", login: null, logout: null }, // Weekend or no data
    { date: "09/09/2024", login: "08:15", logout: "17:15" },
    { date: "09/10/2024", login: "08:00", logout: "17:00" },
    { date: "09/11/2024", login: null, logout: null }, // Missing data
    { date: "09/12/2024", login: "09:00", logout: "18:00" },
    { date: "09/13/2024", login: "08:30", logout: "17:30" },
    { date: "09/14/2024", login: null, logout: "16:00" }, // Missing login
    { date: "09/15/2024", login: "08:00", logout: null }, // Missing logout
    { date: "09/16/2024", login: "08:30", logout: "17:30" },
    { date: "09/17/2024", login: null, logout: null }, // Missing data
    { date: "09/18/2024", login: "08:00", logout: "17:00" },
    { date: "09/19/2024", login: "08:15", logout: "17:15" },
    { date: "09/20/2024", login: "08:00", logout: "17:00" },
    { date: "09/21/2024", login: null, logout: null }, // Weekend or no data
    { date: "09/22/2024", login: "09:00", logout: "18:00" },
    { date: "09/23/2024", login: "08:30", logout: "17:30" },
    { date: "09/24/2024", login: null, logout: "17:00" }, // Missing login
    { date: "09/25/2024", login: "08:00", logout: null }, // Missing logout
    { date: "09/26/2024", login: "08:00", logout: "17:00" },
    { date: "09/27/2024", login: "08:15", logout: "17:15" },
    { date: "09/28/2024", login: null, logout: null }, // Weekend or no data
    { date: "09/29/2024", login: "09:00", logout: "18:00" },
    { date: "09/30/2024", login: "08:30", logout: "17:30" },
  ];

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
    SIGN_IN: {
      GOOD_EVENING: "Good Evening!",
      FORGOT_PASSOWRD: "Forgot Password!",
      LOGIN: "Login",
      EMAIL: "Email",
      PASSWORD: "Password",
    },
    SIGN_IN_ERROR: {
      EMAIL: "Email is required",
      PASSWORD: "Password is required",
    },
  };
}
