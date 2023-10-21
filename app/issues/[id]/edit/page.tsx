import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';

interface Props {
    params: { id: string };
}

const EditIssuePage = ({ params }: Props) => {
    const issue = prisma.issue.findUnique({
        where: { id: parseInt(params.id) },
    });

    if (!issue) notFound();

    return <div>EditIssuePage</div>;
};

export default EditIssuePage;
