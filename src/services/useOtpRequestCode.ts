import { useHttp } from '@/hooks/useHttp';
import { useMutation } from '@tanstack/react-query';
import { Controllers } from './controllers/controllers';
import { RequestCode } from '@/types/otp';

type OtpRequestCodeResponse = {
    status: string;
}

export const useOtpRequestCode = () => {
    const http = useHttp();

    const { mutateAsync, data, ...mutation } = useMutation({
        mutationKey: [Controllers.REQUEST_CODE],
        mutationFn: async (request: RequestCode): Promise<OtpRequestCodeResponse> => {
            try {
                const { data: response } = await http.post(Controllers.REQUEST_CODE, request);
                return response.data;
            } catch (error) {
                throw new Error('Network response was not ok');
            }
        }
    });

    return {
        requestCode: mutateAsync,
        response: data,
        ...mutation
    }
};