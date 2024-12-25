import Profilepic from './assets/profile.jpeg'
function Card()
{
    return(
        <>
        <div className ="Card">
            <img className='card-img' src={Profilepic} alt="Beshwanth-image"></img>
            <h1>
                Beshwanth Sai Katari
            </h1>
            <p>VeniVediVici</p>
        </div>
        <h1>
            hi hello
        </h1>
        </>
    );
}

export default Card;