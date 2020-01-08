import React from 'react';
import Slider from 'infinite-react-carousel';

export default function ActivitiesSlider(props) {
  const settings =  {
    arrows: false,
    autoplay: true,
    dots: true,
    className: props.className,
  };

  if (props.content.length !== 0) {
    return (
      <div>
        <Slider { ...settings }>
          {props.content.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item}</h2>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  } else {
    return <React.Fragment />
  }
}
