import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Cardcomponent(props) {
    const image = props.image;
    const heading = props.heading;
    const description = props.description;
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {heading}
          </Typography>

          <Typography gutterBottom variant="body2" component="div">
            {description}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
  );
}