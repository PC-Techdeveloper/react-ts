import Card from "./Card";
import Context from "./Context";

const SecondCard = () => {
  return (
    <div className="container mx-auto my-5">
      <SecondCard>
        <h2 className="card-title">Card Title</h2>
        <p className="card-text">This is a simple card component.</p>
        <button className="btn btn-primary">Click Me</button>
      </SecondCard>
      <Card>
        <h2 className="card-title">Card Title</h2>
        <p className="card-text">This is a simple card component.</p>
      </Card>
      <Card>
        <p className="card-text">This is a simple card component.</p>
      </Card>
    </div>
};

export default SecondCard;
