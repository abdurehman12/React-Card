import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <a href="https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/" className="btn btn-primary">Image Link</a>

      </Card.Body>
    </Card>
  );
}


// function Cards(props) {
//     return (
//       <div className="card">
//         <img src={props.imageSrc} alt={props.imageAlt} />
//         <div className="card-body">
//           <h5 className="card-title">{props.title}</h5>
//           <p className="card-text">{props.description}</p>
//           <a href={props.link} className="btn btn-primary">{props.buttonText}</a>
//         </div>
//       </div>
//     );
//   }

export default CardExample;