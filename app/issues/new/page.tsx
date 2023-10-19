'use client';

import { Button, TextField } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css';
import SimpleMDE from 'react-simplemde-editor';

const page = () => {
    return (
        <div className="max-w-xl space-y-5">
            <TextField.Root>
                <TextField.Input placeholder="Title" />
            </TextField.Root>
            <SimpleMDE />
            <Button>Submit New Issue</Button>
        </div>
    );
};

export default page;
