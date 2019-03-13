import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../../../Redux/action';
class About extends Component {
    componentDidMount() {
        const { addUser } = this.props;
        addUser();
    }
    render() {
        return (
            <div>
                Accusantium culpa distinctio fuga harum hic ipsam ipsum maiores nam neque nihil non obcaecati, perspiciatis quasi quod reprehenderit unde vel vero voluptatem.
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addUser
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(About);

