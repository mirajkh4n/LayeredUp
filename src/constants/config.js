import client_forms_icon from '../assets/icons/client_forms_icon';
import explore_icon from '../assets/icons/explore_icon';
import forum from '../assets/icons/forum';
import invoice_history_icon from '../assets/icons/invoice_history_icon';
import lawyer_grid_icon from '../assets/icons/lawyer_grid_icon';
import manage_services from '../assets/icons/manage_services';
import meetings_icon from '../assets/icons/meetings_icon';
import my_subscription from '../assets/icons/my_subscription';
import questionire_icon from '../assets/icons/questionire_icon';
import settings_icon from '../assets/icons/settings_icon';

const {default: images} = require('./images');

export const CategoryData = [
  {
    image: images.category_lawyerdp,
    title: 'Category5',
  },
  {
    image: images.category_lawyerdp,
    title: 'Category6',
  },
  {
    image: images.category_lawyerdp,
    title: 'Category7',
  },
  {
    image: images.category_lawyerdp,
    title: 'Category8',
  },
];
export const SubCategoryData = [
  {
    title: 'Category 1',
    maincategory: 'MainCategory',
  },
  {
    title: 'Category 2',
    maincategory: 'MainCategory',
  },
  {
    title: 'Category 3',
    maincategory: 'MainCategory',
  },
  {
    title: 'Category 4',
    maincategory: 'MainCategory',
  },
  {
    title: 'Category 5',
    maincategory: 'MainCategory',
  },
  {
    title: 'Category 6',
    maincategory: 'MainCategory',
  },
];

export const LawyerData = [
  {
    image: images.lawyerdp,
    name: 'James Scott',
    category: 'Lawyer Category',
    status: 'verfied',
  },
  {
    image: images.lawyerdp,
    name: 'James Scott',
    category: 'Lawyer Category',
    status: 'verfied',
  },
  {
    image: images.lawyerdp,
    name: 'James Scott',
    category: 'Lawyer Category',
    status: 'Unverified',
  },
  {
    image: images.lawyerdp,
    name: 'James Scott',
    category: 'Lawyer Category',
    status: 'Unverified',
  },
  {
    image: images.lawyerdp,
    name: 'James Scott',
    category: 'Lawyer Category',
    status: 'Unverified',
  },
  {
    image: images.lawyerdp,
    name: 'James Scott',
    category: 'Lawyer Category',
    status: 'Unverified',
  },
  {
    image: images.lawyerdp,
    name: 'James Scott',
    category: 'Lawyer Category',
    status: 'Unverified',
  },
];
export const popularTopics = [
  {
    id: 1,
    name: 'Criminal Laws',
    image: images.forum_top_icon,
    icon: images.minus_icon,
  },
  {
    id: 1,
    name: 'Criminal Laws',
    image: images.forum_top_icon,
    icon: images.minus_icon,
  },
  {
    id: 1,
    name: 'Criminal Laws',
    image: images.forum_top_icon,
    icon: images.minus_icon,
  },
  {
    id: 1,
    name: 'Criminal Laws',
    image: images.forum_top_icon,
    icon: images.minus_icon,
  },
  {
    id: 1,
    name: 'Criminal Laws',
    image: images.forum_top_icon,
    icon: images.minus_icon,
  },
  {
    id: 1,
    name: 'Criminal Laws',
    image: images.forum_top_icon,
    icon: images.minus_icon,
  },
];
export const toplawyersData = [
  {
    id: 1,
    name: 'Mr. James Else',
    image: images.top_lawyer_profile,
    category: '(Sub Category)',
    test: 'Lawyer Category',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 1,
    name: 'Mr. James Else',
    image: images.top_lawyer_profile,
    category: '(Sub Category)',
    test: 'Lawyer Category',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 1,
    name: 'Mr. James Else',
    image: images.top_lawyer_profile,
    category: '(Sub Category)',
    test: 'Lawyer Category',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export const FormsData = [
  {
    image: images.formdp,
    name: 'Alexa',
    level: 'Average Case',
    active: 'Active',
  },
  {
    image: images.formdp,
    name: 'Alexa Smith',
    level: 'Average Case',
    inActive: 'inActive',
  },
  {
    image: images.formdp,
    name: 'Smith',
    level: 'Average Case',
  },
  {
    image: images.formdp,
    name: 'Alexa Smith',
    level: 'Average Case',
  },
  {
    image: images.formdp,
    name: 'Alexa Smith',
    level: 'Average Case',
  },
];
export const ClientDrawerArray = [
  {
    title: 'Home',
    icon: images.Home_icon,
    goto: () => props.navigation.navigate('Home'),
  },
  {
    title: 'Profile',
    icon: images.profile,
    goto: () => props.navigation.navigate('Profile'),
  },
  {
    title: 'Submission History',
    icon: images.Video_Icon,
    goto: () => props.navigation.navigate('SubmissionHistory'),
  },

  {
    title: 'Forum',
    icon: images.files,
    goto: () => props.navigation.navigate('Forms'),
  },
  {
    title: 'Notification',
    icon: images.bell,
    goto: () => props.navigation.navigate('Notification'),
  },
  {
    title: 'Invoice',
    icon: images.Video_Icon,
    goto: () => props.navigation.navigate('Invoice'),
  },
  {
    title: 'Secure Chats',
    icon: images.Subscriptions,
    goto: () => props.navigation.navigate('Secure Chats'),
  },
  {
    title: 'Settings',
    goto: () => props.navigation.navigate('Settings'),
  },
];
export const LawyerDrawerArray = [
  {
    title: 'Home',
    icon: images.Home_icon,
    goto: () => props.navigation.navigate('Home'),
  },
  {
    title: 'Profile',
    icon: images.profile,
    goto: () => props.navigation.navigate('Profile'),
  },
  {
    title: 'Manage Services',
    icon: images.service,
    goto: () => props.navigation.navigate('CategoryLawyer'),
  },
  {
    title: 'Clients Forum',
    icon: images.Forum,
    goto: () => props.navigation.navigate('SubcategoryLawyer'),
  },
  {
    title: 'Lawyer Guild',
    icon: images.law,
    goto: () => props.navigation.navigate('Lawyer'),
  },
  {
    title: 'Meetings',
    icon: images.chat,
    goto: () => props.navigation.navigate('Explore'),
  },
  {
    title: 'Forum',
    icon: images.files,
    goto: () => props.navigation.navigate('Forms'),
  },
  {
    title: 'Notification',
    icon: images.bell,
    goto: () => props.navigation.navigate('Notification'),
  },
  {
    title: 'Schedule',
    icon: images.Video_Icon,
    goto: () => props.navigation.navigate('Schedule'),
  },
  {
    title: 'My Subscriptions',
    icon: images.Subscriptions,
    goto: () => props.navigation.navigate('Subscription'),
  },
  {
    title: 'Explore',
    icon: images.search,
    goto: () => props.navigation.navigate('Explore'),
  },
  {
    title: 'Payment History',
    icon: images.Payment,
    goto: () => props.navigation.navigate('Payment History'),
  },
  {
    title: 'Settings',
    goto: () => props.navigation.navigate('Settings'),
  },
];
export const LawFirmDrawerArray = [
  {
    title: 'Home',
    icon: images.Home_icon,
    goto: () => props.navigation.navigate('Home'),
  },
  {
    title: 'Profile',
    icon: images.profile,
    goto: () => props.navigation.navigate('Profile'),
  },
  {
    title: 'Manage Attorneys',
    icon: images.service,
    goto: () => props.navigation.navigate('Manage Attorneys'),
  },
  {
    title: 'Manage Services',
    icon: images.Forum,
    goto: () => props.navigation.navigate('Manage Services'),
  },
  {
    title: 'Lawyer',
    icon: images.law,
    goto: () => props.navigation.navigate('Lawyer'),
  },

  {
    title: 'Forum',
    icon: images.files,
    goto: () => props.navigation.navigate('Forms'),
  },
  {
    title: 'Notification',
    icon: images.bell,
    goto: () => props.navigation.navigate('Notification'),
  },
  {
    title: 'My Subscriptions',
    icon: images.Subscriptions,
    goto: () => props.navigation.navigate('Subscription'),
  },
  {
    title: 'Explore',
    icon: images.search,
    goto: () => props.navigation.navigate('Explore'),
  },
  {
    title: 'Settings',
    goto: () => props.navigation.navigate('Settings'),
  },
];
