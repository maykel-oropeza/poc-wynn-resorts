import { useHttp } from '@/hooks/useHttp';
import { useMutation } from '@tanstack/react-query';
import { Controllers } from './controllers/controllers';
import { ResendCodeRequest } from '@/types/otp';

type OtpResendCodeResponse = {
    status: string;
}

export const useOtpResendCode = () => {
    const http = useHttp();

    const { mutateAsync, data, ...mutation } = useMutation({
        mutationKey: [Controllers.RESEND_CODE],
        mutationFn: async (request: ResendCodeRequest): Promise<OtpResendCodeResponse> => {
            try {
                const { data: response } = await http.post(Controllers.RESEND_CODE, request);
                return response.data;
            } catch (error) {
                throw new Error('Network response was not ok');
            }
        }
    });

    return {
        resendCode: mutateAsync,
        response: data,
        ...mutation
    }
};