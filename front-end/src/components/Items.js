import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function Items({items,update}) {

    return(
        
        items.map(item => {

            return (
                <Card key={item.name} style={{ width: '40rem' }}>
               <Card.Body>
                <h2>{item.name}</h2>
                <Card.Img variant="top" src={item.img} />
                <div className='price'>
                  <h3>{item.value}€</h3>
                  <Button variant="primary" type='submit' onClick={()=> {
                    update(item)
                  }}>Add To Cart</Button>
                  </div>
                  </Card.Body>

                </Card>
            )                    

        })    


    ) 
 
}

export default Items