///
declare module "*.jpg";

// declare global {
//   type smartsupp = any;
//   interface Window {
//     smartsupp?: any;
//     _smartsupp?: {
//       key: string;
//     };

//     recaptchaVerifier: any;
//     confirmationResult: any; // whatever type you want to give. (any,number,float etc)
//   }
// }

declare global {
  interface Window {
    smartsupp?: any;
    _smartsupp?: {
      key: string;
    };
  }
}
