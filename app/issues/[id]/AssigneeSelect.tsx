'use client';
import Skeleton from '@/app/components/Skeleton';
import { User } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const AssigneeSelect = () => {
    // using react query to fetch users data to cache
    const {
        data: users,
        error,
        isLoading,
    } = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: () => axios.get('/api/users').then((res) => res.data),
        staleTime: 60 * 1000, // 60s
        retry: 3, // will retry 3 times if fails
    });

    if (isLoading) return <Skeleton height="2rem" />;

    if (error) return null;

    return (
        <Select.Root>
            <Select.Trigger placeholder="Assign..." />
            <Select.Content>
                <Select.Group>
                    <Select.Label>Suggestions</Select.Label>

                    {users?.map((user) => (
                        <Select.Item key={user.id} value={user.id}>
                            {user.name}
                        </Select.Item>
                    ))}
                </Select.Group>
            </Select.Content>
        </Select.Root>
    );
};

export default AssigneeSelect;
