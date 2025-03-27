import { useHttp } from '@/hooks/useHttp';
import { useMutation } from '@tanstack/react-query';
import { Controllers } from './controllers/controllers';
import { RegisterUserRequest } from '@/types/user';

type RegisterUserResponse = {
    status: string;
}

export const useRegisterUser = () => {
    const http = useHttp();

    const { mutateAsync, data, ...mutation } = useMutation({
        mutationKey: [Controllers.REGISTER_USER],
        mutationFn: async (request: RegisterUserRequest): Promise<RegisterUserResponse> => {
            try {
                const { data: response } = await http.post(Controllers.REGISTER_USER, request);
                return response.data;
            } catch (error) {
                throw new Error('Network response was not ok');
            }
        }
    });

    return {
        registerUser: mutateAsync,
        response: data,
        ...mutation
    }
};