import React from 'react'
import Container from '@mui/material/Container';
import Post_content from '../componets/Post_content';
import ImageCard from '../componets/ImageCard';

const Main = () => {
    const itemarray = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfZio88ahT78tAP7zTa6GVOodu5w1qDfkifBz-JqMR27AEM3wF1LIrGoQB46GArniaQ4&usqp=CAU',
        'https://newsimg-hams.hankookilbo.com/2021/12/19/51e4f7ad-79f8-44b7-9a5c-6354dbd55df3.jpg',
        'https://kormedi.com/wp-content/uploads/2021/12/gettyimages-1313156182-580x454.jpg',
    ]

    React.useEffect(() => {
        console.log('로드!')
    })
    return (
        <div> 11</div>
        // <Container maxWidth="lg">
        //     <ImageCard imagelist = {itemarray}/>
        // </Container>
    );
}

export default Main;