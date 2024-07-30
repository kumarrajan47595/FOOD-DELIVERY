import React from "react";
import "./Footer.css"
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo}></img>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis totam accusamus enim nobis dolor tempore libero, dolorem cumque iste suscipit velit vero maiores fugit sed deleniti, quas earum natus neque porro quam animi rerum dolore facilis. Repudiandae vel, modi laborum, repellat nobis ratione fuga debitis placeat facilis earum ipsum.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon}></img>
                        <img src={assets.twitter_icon}></img>
                        <img src={assets.linkedin_icon}></img>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 &copy; Tomato.com - All Right Reserved</p>
        </div>
    )
}

export default Footer