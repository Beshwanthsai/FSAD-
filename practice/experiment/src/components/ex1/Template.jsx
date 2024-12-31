
import './style.css'


function Template()
{
    return(
        <div className="container">
            <div className="header">
                <div className="heading">KL University</div>
                <div className="menu">
                     <span>Home</span>
                     <span>About</span>
                     <span>Portfolio</span>
                     <span>Login</span>
                </div>
            </div>
            <div className="content">
                <div className="plogo"><img src="{laptop}" alt="No image" width={100} height={100}/></div>
                    <div className="pdetails">
                        <div className="Pname">Product Details</div>
                            <div className="Pother">
                                <p>Product Description</p>
                                <p>Rs. 10000</p>
                                <p> 2024</p>
                            </div>
                        </div>
                    </div>
            <div className="footer">
                <div className="slogo">
                <span><i class="fa fa-facebook"></i></span>
                <span><i class="fa fa-twitter"></i></span>
                <span><i class="fa fa-google"></i></span>
                <span><i class="fa fa-instagram"></i></span>
                </div>
            </div>
        </div>
    );
    
}
export default Template;