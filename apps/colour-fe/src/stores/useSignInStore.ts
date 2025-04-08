import { create } from 'zustand';

type Step = 'email' | 'password' | 'verify';

type SubmitType = 'sign-in' | 'sign-up';

type State = {
  step: Step;
  submitType: SubmitType;
  email: string;
  password: string;
  verificationId: string | null;
  verifyCode: string;
};

type Action = {
  setStep: (step: Step) => void;
  setSubmitType: (submitType: SubmitType) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setVerificationId: (verificationId: string | null) => void;
  setVerifyCode: (verifyCode: string) => void;
};

type SignInStore = State & Action;

const useSignInStore = create<SignInStore>()((set) => ({
  step: 'email',
  submitType: 'sign-in',
  email: '',
  password: '',
  verificationId: null,
  verifyCode: '',
  setStep: (step) => set({ step }),
  setSubmitType: (submitType) => set({ submitType }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setVerificationId: (verificationId) => set({ verificationId }),
  setVerifyCode: (verifyCode) => set({ verifyCode }),
}));

export default useSignInStore;
