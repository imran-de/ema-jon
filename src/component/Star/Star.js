import React from 'react';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'; */
const Star = (props) => {
    const star = props.star
    let disStar = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= star) {
            disStar = disStar + '★'
        } else {
            disStar = disStar + '☆';
        }
    }
    // <FontAwesomeIcon icon={faStar} />
    return (
        <div>
            {/* {disStar}: {star} */}
            <span style={{ color: 'goldenrod', fontSize: '24px' }}>{disStar}</span>({props.count})
        </div>
    );
};

export default Star;