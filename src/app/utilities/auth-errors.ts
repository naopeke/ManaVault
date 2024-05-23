import { FirebaseError } from '@angular/fire/app';

export const getFirebaseErrorMessage = ({
    code,
    message,
  }: FirebaseError): string => {
    let errorMessage;
  
    switch (code) {
      case 'auth/wrong-password':
        errorMessage = 'Your password is incorrect';
        break;
      case 'auth/user-not-found':
        errorMessage = 'The user was not found';
        break;
      case 'auth/email-already-in-use':
        errorMessage = 'The user with email already exists';
        break;
      default:
        errorMessage = message;
    }
  
    return errorMessage;
  };