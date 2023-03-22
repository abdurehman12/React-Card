import {Button} from 'react-bootstrap';
import './style.css';

export const TestButton = ({buttonname}) => {
    return( 
        <div className='TestButton'>
              <h2>Demo Button</h2> 
            <Button className='demonbutton'>{buttonname}</Button>
             
            {/* <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}  */}

        </div>
    );
    }

    export const PrimaryButton = () => {
        return( 
            <div className='PrimaryButton'>
            
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                {/* <input></input>
     */}
    
            </div>
        );
        }
    
    