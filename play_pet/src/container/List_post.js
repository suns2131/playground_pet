import { List } from "@mui/material";
import React from "react";
import Post from "../components/Post";
import Grid from "../elements/Grid";


const List_post = () => {
    return (
        <div>
            <Grid
                  bg="#ffffff"
                  margin="15px 0px"
                //   key={p.id}
                  _onClick={() => {
                    // history.push(`/post/${p.id}`);
                  }}
                >
                   <Post/>     
                </Grid>
            
        </div>
    );
}

export default List_post;