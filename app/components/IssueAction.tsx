import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import IssueStatusFilter from '../issues/list/IssueStatusFilter';

const IssueAction = () => {
    return (
        <Flex justify="between" className="mb-5">
            <IssueStatusFilter />
            <Button>
                <Link href="/issues/new">New Issue</Link>
            </Button>
        </Flex>
    );
};

export default IssueAction;
