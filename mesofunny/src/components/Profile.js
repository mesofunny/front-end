import React from 'react';
import AvatarCard from './AvatarCard'
import { Link, Route } from 'react-router-dom'
import { Image } from 'semantic-ui-react';


export default function Profile(props) {
    return(
        <div>
            <Link to= '/profile'>
            <Image src='/images/wireframe/image.png' />
                 profile
            </Link>  
            <Route path = '/profile/:id' component={AvatarCard} />
        </div>
    )
}
