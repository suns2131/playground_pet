import React from 'react'
import Container from '@mui/material/Container';
import Post_content from '../componets/Post_content';
import Headers from '../shared/Headers';

const Posting = () => {
    return (
        <div>
            <Headers />
            <Container maxWidth="lg">
                <Post_content/>
            </Container>
        </div>
        
    );
}

export default Posting;