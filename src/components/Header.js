import React from 'react';
import TypeSelector from './TypeSelector';
import AddDataButton from './AddDataButton';

class Header extends React.Component {
    render() {

    const style = {
        paddingLeft: 0,
    }

    const headerButton = this.props.internal ? <TypeSelector />: <AddDataButton />;

        return(
            <h2 style={style}>
                <span className="pull-left">{this.props.name}</span>
                {headerButton}
            </h2>
        )
    }
}

export default Header;