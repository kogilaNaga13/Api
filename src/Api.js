import React,{useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Api(){
    const [update,setUpdate]=useState([])

    useEffect(()=>{

        fetch('https://api.tvmaze.com/seasons/1/episodes')
        .then((res)=>{
            return res.json()
           
        })

        .then((data)=>setUpdate(data))

        .catch((err)=>console.log(err))

    })
    

    return(
      
        <>
        
            {
               update.map((updates)=>(
           
             <div className='col'>
                 <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={updates.image.medium} />
      <Card.Body>
      
        <Card.Title>Movie : {updates.name}</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>AirDate:{updates.airdate}</ListGroup.Item>
        <ListGroup.Item>AirTime:{updates.airtime}</ListGroup.Item>
        <ListGroup.Item>RunTime:{updates.runtime}Mins</ListGroup.Item>
        <ListGroup.Item>Ratings:{updates.rating.average}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
          
              
             </div>

          


               

               ))
            }

        </>
    )
}

export default Api