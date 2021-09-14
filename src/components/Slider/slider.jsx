import React, {Component} from 'react';
import Slider from 'react-slick';
import './slider.css';
import './media.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import card1 from './../../images/slider_1.png';
import card2 from './../../images/slider_2.png';
import card3 from './../../images/slider_3.png';


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={"icon " + className}
            style={{...style, marginRight: "45px", marginTop: '-20px', display: "flex"}}
            onClick={onClick}
        />
    );
}

class Cards extends Component {
    state = {
        carousel: [
            {
                img: card1,
                field: 'Tech car',
                title: 'This bizarre electric racing scooter goes as fast as a car',
                text: 'The eSkootr S1X is a carbon-fibre version of a Segway that can reach speeds of 100kph',
                more: 'Read more',
            },
            {
                img: card2,
                field: 'Tech car',
                title: 'This bizarre electric racing scooter goes as fast as a car',
                text: 'The eSkootr S1X is a carbon-fibre version of a Segway that can reach speeds of 100kph',
                more: 'Read more',
            },
            {
                img: card3,
                field: 'Tech car',
                title: 'This bizarre electric racing scooter goes as fast as a car',
                text: 'The eSkootr S1X is a carbon-fibre version of a Segway that can reach speeds of 100kph',
                more: 'Read more',
            },
            {
                img: card2,
                field: 'Tech car',
                title: 'This bizarre electric racing scooter goes as fast as a car',
                text: 'The eSkootr S1X is a carbon-fibre version of a Segway that can reach speeds of 100kph',
                more: 'Read more',
            }
        ],
        screen9: false,
    };

    componentDidMount() {
        const handler = e => this.setState({screen9: e.matches});
        window.matchMedia("(max-width: 900px)").addListener(handler);
    }

    render() {
        const {carousel} = this.state;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: !window.matchMedia("(max-width: 900px)").matches ? 3 : 2,
            slidesToScroll: 1,
            className: 'eventSlides',
            nextArrow: <SampleNextArrow/>,
        };

        return (
            <div className="card">
                <div className="cardContainer">
                    <div className="cardTitle">
                        <h1>Other news</h1>
                        <h3>Latest news</h3>
                    </div>
                    <Slider {...settings}>
                        {
                            carousel.map((carousel, i) => {
                                return (
                                    <div key={i}>
                                        <div className="itemCard">
                                            <img className="image" src={carousel.img} alt=""/>
                                            <div className="itemTitleCard">
                                                <h1>{carousel.field}</h1>
                                                <div className="textParameters">
                                                    <div className="itemTextTitle">
                                                        <p>{carousel.title}</p>
                                                    </div>
                                                    <div className="itemText">
                                                        <p>{carousel.text}</p>
                                                    </div>
                                                    <div className="itemMore">
                                                        <p>{carousel.more}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    }
                </div>
            </div>
        );
    }
}

export default Cards;