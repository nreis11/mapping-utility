import React from 'react';

const style = {
    paddingLeft: 0,
    fontSize: "1.5em"
}

const Header = ({name}) => (
        <h2 style={style}>
            <span className="pull-left">{name}</span>
        </h2>
    )

export default Header;