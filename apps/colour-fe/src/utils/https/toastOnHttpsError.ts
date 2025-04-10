import toast from '@/components/Toast/toast';
import { HTTPError } from 'ky';
import { writing } from '../constants';

export async function toastOnHttpsError(error: Error) {
  if (error instanceof HTTPError) {
    const { message } = await error.response.json();

    toast.open(message);
  } else {
    toast.open(writing.UNKNOWN_ERROR);
  }
}
