import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {
    let { name } = useParams();//yine destructuring
    const [product, setProduct] = useState({}); //destructuring 
    useEffect(() => {
        let productService = new ProductService()
        productService.getByProductName(name).then(result => setProduct(result.data.data)).catch()
        console.log(product.productName)
        console.log(product.id)
    }, [])
    return (

        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/jenny.jpg'
                        />
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta></Card.Meta>
                        <Card.Description>
                            Jenny requested permission to view your contact details
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>    
                </div>
    )
}