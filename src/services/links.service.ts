import { useHttp } from '@/hooks/useHttp';
import { useQuery } from '@tanstack/react-query';

export const useGetLinks = () => {
    const http = useHttp();

    return useQuery({
        queryKey: ['links'],
        queryFn: async () => {
            const response = await http.get('links');
            if (!response) {
                throw new Error('Network response was not ok');
            }
            const links = await response.data;
            return links;
        }
    });
};