import React from 'react'
// import Card from '@mui/material/Card';
// import image from "../assets/image.png"
import { Card as MCard, CardContent, CardMedia, Typography } from '@mui/material';

const Card = ({name, image}) => {
  return (
    <MCard sx={{border: "black"}}>
    <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
        <CardContent>
            <Typography>{name}</Typography>
        </CardContent>
    </MCard>
  )
}

export default Card
