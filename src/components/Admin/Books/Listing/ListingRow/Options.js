import React from 'react';
class Options extends React.Component {
    constructor() {
        super();
    }

    render() {
        debugger
        let Options = this.props.options;
        let optionItems = Options.map((op) =>
            <option key={op._id} value={op._id}>{op.Name?op.Name:op.FN}</option>
        );

        return (
            <>
                {optionItems}
            </>
        )
    }
}

export default Options;