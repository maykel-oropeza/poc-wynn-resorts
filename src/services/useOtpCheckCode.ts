import { useHttp } from '@/hooks/useHttp';
import { useMutation } from '@tanstack/react-query';
import { Controllers } from './controllers/controllers';
import { CheckCodeRequest } from '@/types/otp';

type OtpCheckCodeResponse = {
    status: string;
}

export const useOtpCheckCode = () => {
    const http = useHttp();

    const { mutateAsync, data, ...mutation } = useMutation({
        mutationKey: [Controllers.CHECK_CODE],
        mutationFn: async (request: CheckCodeRequest): Promise<OtpCheckCodeResponse> => {
            try {
                const { data: response } = await http.post(Controllers.CHECK_CODE, request);
                return response.data;
            } catch (error) {
                throw new Error('Network response was not ok');
            }
        }
    });

    return {
        checkCode: mutateAsync,
        response: data,
        ...mutation
    }
};