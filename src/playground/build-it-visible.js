console.log("App.js is running1");

class VisibilityToggle extends React.Component {
    constructor() {
        super();
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggler</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                <p hidden={!this.state.visibility}>This is detailed text</p>
            </div>
        )
    }
}

// let visibility = false;

//
// const toggleDetails = () => {
//     visibility = !visibility;
//     console.log('Toggle details called', visibility);
//     render();
// };
//
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggler</h1>
//             <button onClick={toggleDetails}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//             <p hidden={!visibility}>This is detailed text</p>
//         </div>
//     );
//
// };
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// render();