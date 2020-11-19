import React, {Component} from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, blanditiis?"
            },
            {
                icon: <FaHiking/>,
                title: "Endless hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, blanditiis?"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, blanditiis?"
            },
            {
                icon: <FaBeer/>,
                title: "Strongest beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, blanditiis?"
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}

                </div>
            </section>
        );
    }
}

export default Services;