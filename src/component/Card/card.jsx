import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ReplyIcon from '@mui/icons-material/Reply';
const CardPage = ({items,handleBtnClick}) => {
  return (
    <div>
         <Card sx={{ maxWidth: 345, marginBottom: "10%" }}>
                                <CardMedia
                                    sx={{ height: 140, width: "55%" }}
                                    image={items.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Department:- {items.company.department} <br />
                                        Price:- {items.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>
                                            First Name: {items.firstName} <br />
                                            Last Name: {items.lastName} <br />
                                            Gender: {items.gender} <br />
                                            Phone Number: {items.phone} <br />
                                            DOB: {items.birthDate} <br />
                                            Age:{items.age}</h3>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => handleBtnClick(items)} variant="outlined">Add to Cart</Button>
                                    <Link href="/"><p><ReplyIcon/></p></Link>
                                </CardActions>
                            </Card>
    </div>
  )
}

export default CardPage