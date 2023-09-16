import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; 
import {Grid, Typography} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


export default function (props){{
    return(
        <>
    <Typography variant='h4' sx={{color:"rgb(46, 139, 87)", fontFamily:"Raleway", textAlign:"center", marginBottom:5,marginTop:5}}>
         Our Client Testimonials
        </Typography>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}sx={{mt:10,mb:10}}>
       <Grid item xs={1}>
       </Grid>
        <Grid item xs={3} sx={{border:1,borderRadius:2, borderColor:"gray"}} >
        <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"black",fontsize:"1rem"}} >
        T Satish Babu
         </Typography>
       <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"gray",fontsize:"1rem"}} >
       Manager - Maintenance & Production
         </Typography>
         <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgba(0, 0, 0, 0.87)"}} >
         "I am very satisfied with the service provided by this company. The team was very professional and responsive to my needs."
         </Typography>
        </Grid>
        <Grid item xs={0.5}>
            </Grid>
        <Grid item xs={3} sx={{border:1, borderRadius:2, borderColor:"gray"}}>
        <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"black",fontsize:"1rem"}} >
        Vrushali Pol
         </Typography>
        <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"gray",fontsize:" 1rem"}} >
        Manager - Enterprise Sales
         </Typography>
         <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgba(0, 0, 0, 0.87)" , }} >
         "I have been a customer of this company for several years now and I have always been impressed with their pompt reply, commited work & good with market price."  
         </Typography>
         </Grid>
         <Grid item xs={0.5}>
       </Grid>
         <Grid item xs={3} sx={{border:1, borderRadius:2, borderColor:"gray"}}>
         <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"black",fontsize:"1rem"}} >
         J Praven Kumar Reddy
         </Typography>
        <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"gray",fontsize:"1rem"}} >
        Junior Engineer - Mechanical
         </Typography>
         <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgba(0, 0, 0, 0.87)"}} >
         "The firm so supportive, creative and spontaneous to work. They support us 24/7, even in odd times and their creativeness is so amazing. Thanks for the support."
         </Typography>
         </Grid>
         </Grid>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}sx={{mt:10,mb:10}}>
       <Grid item xs={2}>
       </Grid>
        <Grid item xs={4} sx={{border:1,borderRadius:2, borderColor:"gray"}} >
        <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"black",fontsize:"1rem"}} >
        Subramanian Viswanathan
         </Typography>
       <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"gray",fontsize:"1rem"}} >
       Production Manager
         </Typography>
         <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgba(0, 0, 0, 0.87)"}} >
         "I have been a client to this firm from a long time. Almost all products & services will be available at very reasonable prices."
         </Typography>
        </Grid>
        <Grid item xs={0.5}>
       </Grid>
        <Grid item xs={4} sx={{border:1,borderRadius:2 , borderColor:"gray",    transition: "boxshadow 300ms"}} >
        <Typography variant='h5'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"black",fontsize:"1rem"}} >
        G Shivanand Basavaraj
         </Typography>
       <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"gray",fontsize:"1rem"}} >
       Manager - Purchase
         </Typography>
         <Typography variant='h6'  sx={{ textAlign:"center", fontFamily:"Raleway", color:"rgba(0, 0, 0, 0.87)"}} >
         "The team over there has always been proactive in answering us & maintaining a good relation with us.Thanks for the services."
         </Typography>
        </Grid>
         </Grid>

         
        
        </>
    )
}}